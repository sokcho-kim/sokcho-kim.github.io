"use client"

import { ArrowDown } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [showMoonText, setShowMoonText] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-700"></div>

      {/* Stars */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 60}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div
        className="absolute top-4 right-4 md:top-20 md:right-20 cursor-pointer group"
        onMouseEnter={() => setShowMoonText(true)}
        onMouseLeave={() => setShowMoonText(false)}
        onClick={scrollToContact}
      >
        <div className="w-12 h-12 md:w-16 md:h-16 bg-yellow-100 rounded-full shadow-lg transition-all duration-300 group-hover:scale-110 relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <svg width="24" height="16" viewBox="0 0 24 16" className="pixelated md:w-8 md:h-6">
              <rect x="0" y="0" width="24" height="16" fill="white" stroke="#f3f4f6" strokeWidth="1" />
              <polygon points="0,0 12,8 24,0" fill="#fbbf24" />
              <rect x="20" y="2" width="2" height="2" fill="#ef4444" />
            </svg>
          </div>
        </div>

        {/* Pixel art GET IN TOUCH text */}
        {showMoonText && (
          <div className="absolute -bottom-12 md:-bottom-16 -left-4 md:-left-8 bg-slate-800 border-2 border-white p-2 rounded pixel-text">
            <div className="text-white text-xs font-mono tracking-wider whitespace-nowrap">GET IN TOUCH</div>
          </div>
        )}
      </div>

      <div className="absolute bottom-0 left-0 w-full h-48">
        {/* Deep water background */}
        <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-slate-800 to-slate-700"></div>

        {/* Wave 1 - Front wave */}
        <div className="absolute bottom-0 w-full h-16 wave-1">
          <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M0,60 C300,120 600,0 900,60 C1050,90 1150,30 1200,60 L1200,120 L0,120 Z"
              fill="#0ea5e9"
              opacity="0.8"
            />
          </svg>
        </div>

        {/* Wave 2 - Middle wave */}
        <div className="absolute bottom-0 w-full h-12 wave-2">
          <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,80 C400,20 800,100 1200,40 L1200,120 L0,120 Z" fill="#3b82f6" opacity="0.6" />
          </svg>
        </div>

        {/* Wave 3 - Back wave */}
        <div className="absolute bottom-0 w-full h-8 wave-3">
          <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M0,40 C200,80 400,0 600,40 C800,80 1000,0 1200,40 L1200,120 L0,120 Z"
              fill="#60a5fa"
              opacity="0.4"
            />
          </svg>
        </div>
      </div>

      <div className="absolute bottom-32 md:bottom-28 left-1/2 transform -translate-x-1/2 floating-boat z-20">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%202025%EB%85%84%208%EC%9B%94%2015%EC%9D%BC%20%EC%98%A4%ED%9B%84%2007_56_33-nkc5OeQWawdgIDKYiC1axhGuTG3uQV.png"
          alt="Pixel art character in boat"
          className="w-24 h-24 md:w-32 md:h-32 pixelated object-contain"
        />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="mb-4 md:mb-6 flex items-center justify-center gap-2 md:gap-3">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight px-2">
                🏄‍♂️ ∇(data) → insights
              </h1>
            </div>
            <p className="text-lg md:text-xl lg:text-2xl text-blue-200 mb-8 font-medium">
              데이터의 파도에서 인사이트를 찾아 서핑하는 AI Engineer
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-20 md:bottom-24 left-0 w-full z-15 pointer-events-none">
        <div className="formula-float-1 absolute left-[15%] text-white/8 text-xs font-mono">θ := θ - α∇J</div>
        <div className="formula-float-2 absolute left-[70%] text-white/8 text-xs font-mono">σ(Wx+b)</div>
        <div className="formula-float-3 absolute left-[40%] text-white/8 text-xs font-mono">∂L/∂w</div>
        <div className="formula-float-4 absolute left-[85%] text-white/8 text-xs font-mono">E[x]</div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <ArrowDown className="h-8 w-8 text-white/60 hover:text-white/80 transition-colors cursor-pointer" />
      </div>

      <style jsx>{`
        /* Updated wave animations with proper curved motion */
        .wave-1 {
          animation: waveMove1 8s ease-in-out infinite;
        }
        
        .wave-2 {
          animation: waveMove2 12s ease-in-out infinite reverse;
        }
        
        .wave-3 {
          animation: waveMove3 15s ease-in-out infinite;
        }
        
        @keyframes waveMove1 {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(-50px); }
        }
        
        @keyframes waveMove2 {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(30px); }
        }
        
        @keyframes waveMove3 {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(-20px); }
        }
        
        .floating-boat {
          animation: float 3s ease-in-out infinite, moveHorizontal 20s linear infinite;
        }
        
        .floating-boat img {
          object-fit: contain;
          max-width: 100%;
          height: auto;
          aspect-ratio: 1 / 1;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        @keyframes moveHorizontal {
          0% { left: 100%; }
          100% { left: -10%; }
        }
        
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
        
        /* Added pixel art styling */
        .pixelated {
          image-rendering: pixelated;
          image-rendering: -moz-crisp-edges;
          image-rendering: crisp-edges;
        }
        
        .pixel-text {
          image-rendering: pixelated;
          font-family: 'Courier New', monospace;
          text-shadow: 1px 1px 0px #000;
        }
        
        /* Added pixel mailbox styling */
        .pixel-mailbox {
          image-rendering: pixelated;
          border-radius: 1px;
        }

        /* Added floating formula animations */
        .formula-float-1 {
          animation: formulaFloat1 35s ease-in-out infinite;
        }
        
        .formula-float-2 {
          animation: formulaFloat2 40s ease-in-out infinite;
        }
        
        .formula-float-3 {
          animation: formulaFloat3 32s ease-in-out infinite;
        }
        
        .formula-float-4 {
          animation: formulaFloat4 38s ease-in-out infinite;
        }
        
        @keyframes formulaFloat1 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-12px) translateX(8px); }
          50% { transform: translateY(-8px) translateX(-5px); }
          75% { transform: translateY(-15px) translateX(3px); }
        }
        
        @keyframes formulaFloat2 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-10px) translateX(-6px); }
          66% { transform: translateY(-18px) translateX(4px); }
        }
        
        @keyframes formulaFloat3 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          20% { transform: translateY(-14px) translateX(-3px); }
          40% { transform: translateY(-6px) translateX(7px); }
          60% { transform: translateY(-16px) translateX(-2px); }
          80% { transform: translateY(-9px) translateX(5px); }
        }
        
        @keyframes formulaFloat4 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          30% { transform: translateY(-11px) translateX(6px); }
          70% { transform: translateY(-13px) translateX(-4px); }
        }
      `}</style>
    </section>
  )
}
