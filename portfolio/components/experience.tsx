"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Senior AI Engineer",
    company: "Tech Innovation Lab",
    period: "2023 - Present",
    description: "Leading AI research and development projects, focusing on computer vision and NLP applications.",
    technologies: ["Python", "TensorFlow", "PyTorch", "FastAPI", "Docker"],
  },
  {
    title: "Backend Developer",
    company: "Digital Solutions Inc",
    period: "2021 - 2023",
    description: "Developed scalable backend systems and APIs serving millions of users daily.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "Redis", "AWS"],
  },
  {
    title: "Data Scientist",
    company: "Analytics Pro",
    period: "2020 - 2021",
    description: "Built machine learning models for predictive analytics and business intelligence.",
    technologies: ["Python", "Scikit-learn", "Pandas", "SQL", "Tableau"],
  },
  {
    title: "Junior Developer",
    company: "StartupTech",
    period: "2019 - 2020",
    description: "Started my journey in software development, working on web applications and data processing.",
    technologies: ["Python", "Django", "JavaScript", "MySQL"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
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
          <h2 className="text-4xl font-bold text-center mb-12 text-white">🚀 Experience Journey</h2>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 h-full w-0.5 bg-blue-400"></div>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full border-4 border-slate-900"></div>
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                    <Card className="bg-slate-800/80 border-slate-600 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 backdrop-blur-sm">
                      <CardContent className="p-6">
                        <div className="mb-4">
                          <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                          <p className="text-blue-300 font-semibold">{exp.company}</p>
                          <p className="text-sm text-blue-200">{exp.period}</p>
                        </div>
                        <p className="text-gray-300 mb-4">{exp.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="bg-blue-500/20 text-blue-200 border-blue-400/30"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
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
