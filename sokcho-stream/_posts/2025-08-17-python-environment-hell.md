---
layout: post
title: "2025년 Python 환경설정 지옥 완전 정복기"
date: 2025-08-17
categories: [python, development]
tags: [conda, uv, venv, windows, troubleshooting]
---

# 2025년 Python 환경설정 지옥 완전 정복기
## conda → uv 전환으로 개발 환경 구축하기

### TL;DR
- conda: 느리고 ToS 문제로 망함
- uv: 빠르고 현대적, 강력 추천
- Windows 환경설정은 여전히 지옥

---

## 사건의 발단: conda create 실패

평범한 일요일, hwp-mcp 프로젝트를 위해 conda 환경을 만들려고 했다.

```bash
conda create -n hwp-mcp python=3.10 -c conda-forge
```

하지만 현실은...

```
PackagesNotFoundError: The following packages are not available from current channels:
  - python=3.10
```

**아니 python=3.10이 없다고?** 이게 말이 되나?

## 첫 번째 삽질: 채널 문제인 줄 알았다

처음에는 단순한 채널 문제인 줄 알았다.

```bash
# 이것도 시도해보고
conda create -n hwp-mcp python=3.11 -c conda-forge

# 저것도 시도해보고
conda create -n hwp-mcp python=3.9

# 심지어 버전 없이도
conda create -n hwp-mcp
```

결과는 **모두 실패**. 뭔가 근본적인 문제가 있었다.

## 진짜 문제 발견: Anaconda ToS 지옥

한참 삽질하다가 진짜 문제를 발견했다.

https://stackoverflow.com/questions/79702788/condatosnoninteractiveerror-terms-of-service-have-not-been-accepted?newreg=1996452084954123b29ca39d237e346e

역시 stackoverflow 없이 개발 못한다... 

```
CondaToSNonInteractiveError: Terms of Service have not been accepted for the following channels.
Please accept or remove them before proceeding:
• https://repo.anaconda.com/pkgs/main
• https://repo.anaconda.com/pkgs/r
```

**아하! 2025년 7월 15일부터 Anaconda가 새로운 ToS를 시행**한 거였다.

### Anaconda ToS 문제란?

- Anaconda가 상업적 이용에 대해 라이선스 요구
- 기업 환경에서 conda 사용 시 비용 지불 필요
- CI/CD 환경에서 자동 동의 불가로 빌드 실패 속출

## 두 번째 삽질: ToS 동의해도 패키지 못 찾음

ToS에 동의하고 나서도 문제는 계속됐다.

```bash
conda create -n hwp-mcp python=3.11
# 여전히 PackagesNotFoundError...
```

아이러니하게도 `conda search python`에서는 Python 3.11이 **수십 개**나 검색됐다.

```
python                        3.11.0      h966fe2a_2  pkgs/main
python                        3.11.2      h966fe2a_0  pkgs/main
python                        3.11.3      h966fe2a_0  pkgs/main
# ... 수십 개 더
```

**검색에서는 나오는데 설치는 안 된다?** 이게 무슨 상황인가.

## 세 번째 삽질: Miniconda 재설치

문제가 계속되자 아예 conda를 다시 설치하기로 했다.

1. **기존 Anaconda 완전 제거**
   - 제어판에서 제거
   - 환경변수 PATH 정리
   - 레지스트리 정리

2. **Miniconda 새로 설치**
   - [공식 사이트](https://docs.conda.io/en/latest/miniconda.html)에서 다운로드
   - "Add to PATH" 옵션 체크

3. **결과: 여전히 같은 에러**

## 네 번째 삽질: pip도 안 됨

conda가 안 되니까 pip로라도 uv를 설치하려고 했다.

```cmd
pip install uv
```

```
'pip'은(는) 내부 또는 외부 명령, 실행할 수 있는 프로그램, 또는 배치 파일이 아닙니다.
```

**pip도 PATH에 없다고?** conda 설치 과정에서 뭔가 꼬인 것 같았다.

### Python 확인

```cmd
where python
C:\Users\sokchokim\AppData\Local\Microsoft\WindowsApps\python.exe

python -m pip install uv
# 다행히 이건 작동
```

## 전환점: uv 발견과 설치

PowerShell에서 uv를 직접 설치했다.

```powershell
irm https://astral.sh/uv/install.ps1 | iex
```

```
Downloading uv 0.8.11 (x86_64-pc-windows-msvc)
Installing to C:\Users\sokchokim\.local\bin
everything's installed!
```

**PATH 추가 후 확인:**

```powershell
$env:Path = "C:\Users\sokchokim\.local\bin;$env:Path"
uv --version
# uv 0.8.11 (f892276ac 2025-08-14)
```

## uv로 환경 구축: 드디어 성공

```bash
cd C:\Sokcho\hwp-mcp
uv python install 3.11
uv venv .venv
.venv\Scripts\activate
```

**결과:**
```
Using CPython 3.11.13
Creating virtual environment at: .venv
Activate with: .venv\Scripts\activate
```

**드디어 성공!** 총 소요시간: 약 3시간

## conda vs uv: 무엇이 달랐나?

### conda의 문제점 (2025년 기준)

1. **느린 속도**: 의존성 해결에 몇 분씩 소요
2. **무거운 크기**: 기본 설치만 몇 GB
3. **ToS 문제**: 기업 환경에서 사용 제한
4. **복잡한 채널**: defaults vs conda-forge 충돌
5. **구식 아키텍처**: Python 생태계 발전 속도를 따라가지 못함

### uv의 장점

1. **속도**: conda보다 10-100배 빠름
2. **현대적**: pyproject.toml, lockfile 지원
3. **Python 관리**: Python 버전 자동 다운로드/관리
4. **경량**: Rust로 제작되어 빠르고 가벼움
5. **호환성**: pip/Poetry와 호환

### 실제 체감 차이

```bash
# conda로 numpy 설치: 30초+
conda install numpy

# uv로 numpy 설치: 2초
uv add numpy
```

## IDE 설정: Cursor에서 Python 인터프리터 변경

마지막 관문은 Cursor에서 올바른 Python 인터프리터를 선택하는 것이었다.

1. **`Ctrl + Shift + P`**
2. **"Python: Select Interpreter"**
3. **`.venv\Scripts\python.exe` 선택**

하지만 여기서도 함정이...

### Microsoft Store Python의 함정

Windows에서 `python` 명령어가 Microsoft Store Python을 가리키는 경우가 있다.

```
⚠️ python
시스템에서 파일에 액세스할 수 없습니다.
```

**해결책**: uv로 만든 가상환경의 Python을 직접 지정

## 최종 해결: 완벽한 개발 환경

```bash
# 프로젝트 디렉토리로 이동
cd C:\Sokcho\hwp-mcp

# uv로 Python 3.11 설치
uv python install 3.11

# 가상환경 생성
uv venv .venv

# 환경 활성화
.venv\Scripts\activate

# 패키지 설치
uv add fastapi uvicorn python-multipart
```

**Cursor 설정:**
- Python Interpreter: `.venv\Scripts\python.exe`
- 터미널: Command Prompt 또는 PowerShell

## conda 자동 활성화 비활성화

마지막으로 conda가 자동으로 base 환경을 활성화하는 것을 막았다.

```bash
conda config --set auto_activate_base false
```

## 결론: 2025년에는 uv를 사용하자

### 언제 conda를 사용할까?

- **ML 초보자**: 복잡한 C++ 라이브러리 의존성
- **레거시 프로젝트**: 이미 conda로 구축된 환경
- **특수한 패키지**: conda에서만 제공하는 패키지

### 언제 uv를 사용할까?

- **새로운 프로젝트**: 빠른 환경 구축
- **CI/CD**: 라이선스 문제 없음
- **현대적 개발**: pyproject.toml 기반 의존성 관리
- **팀 협업**: lockfile을 통한 정확한 환경 재현

### 교훈

1. **환경설정에 너무 많은 시간을 쓰지 말자**
2. **새로운 도구에 대한 열린 마음을 가지자**
3. **Windows 개발환경은 여전히 험난하다**
4. **문제 해결 과정도 좋은 학습 경험이다**

## 추가 팁

### uv 주요 명령어

```bash
# Python 설치
uv python install 3.11

# 가상환경 생성
uv venv .venv

# 패키지 설치
uv add package_name

# requirements.txt에서 설치
uv pip install -r requirements.txt

# 프로젝트 초기화
uv init
```

### Windows 환경변수 관리

PATH 관리가 복잡하다면 다음 도구들을 고려해보자:

- **Windows Package Manager**: `winget install`
- **Scoop**: 개발자 친화적 패키지 매니저
- **Chocolatey**: Windows용 패키지 매니저

---

**환경설정으로 하루를 날렸지만, uv라는 훌륭한 도구를 발견했으니 만족한다.** 

다음 프로젝트부터는 처음부터 uv를 사용할 예정이다. conda는 정말 특별한 경우가 아니면 더 이상 사용하지 않을 것 같다.

혹시 비슷한 문제로 고생하는 분들에게 도움이 되길 바란다! 🚀