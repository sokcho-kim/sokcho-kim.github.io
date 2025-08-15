"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skillCategories = [
  {
    title: "🤖 AI & Machine Learning",
    skills: [
      { name: "Deep Learning", level: 90 },
      { name: "Computer Vision", level: 85 },
      { name: "NLP", level: 80 },
      { name: "RAG Systems", level: 85 },
    ],
  },
  {
    title: "⚡ Backend Development",
    skills: [
      { name: "Python (FastAPI)", level: 95 },
      { name: "Database Design", level: 85 },
      { name: "API Development", level: 90 },
      { name: "Server Architecture", level: 80 },
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(35)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">💫 Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card
                key={categoryIndex}
                className="bg-slate-800/80 border-slate-600 backdrop-blur-sm hover:shadow-xl hover:shadow-green-500/20 transition-all duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-xl text-white">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-white font-medium">{skill.name}</span>
                        <span className="text-blue-200 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-400 to-green-400 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  )
}
