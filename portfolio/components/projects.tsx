"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "BaristAI - AI Coffee Kiosk",
    description:
      "An intelligent coffee ordering system with elderly-friendly voice interface, making coffee ordering accessible for all ages through natural language processing.",
    technologies: ["Whisper", "GPT-4o-mini", "FastAPI", "SQLite"],
    achievement: "Elderly-friendly voice interface",
    image: "/ai-coffee-kiosk.png",
  },
  {
    title: "DeePrint - Child Psychology Analysis",
    description:
      "Automated psychological assessment system for children using computer vision and AI to analyze behavioral patterns and provide insights.",
    technologies: ["YOLO", "Gemini API", "RAG"],
    achievement: "Automated psychological assessment",
    image: "/child-psychology-dashboard.png",
  },
  {
    title: "BE MY MUSE - AI Lyrics Generator",
    description:
      "Advanced AI-powered lyrics generation system that analyzes musical patterns and creates original lyrics based on extensive song database analysis.",
    technologies: ["KoGPT-2", "BERT", "Selenium"],
    achievement: "7,349 songs crawled and analyzed",
    image: "/ai-lyrics-generator-interface.png",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(45)].map((_, i) => (
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
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">🎯 Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-slate-800/80 border-slate-600 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-2 backdrop-blur-sm"
              >
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg?height=200&width=400&query=AI project interface"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">{project.description}</p>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-green-500/20 text-green-200 border-green-400/30"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="bg-blue-500/20 p-3 rounded-lg border border-blue-400/30">
                      <p className="text-sm font-semibold text-blue-200">🏆 {project.achievement}</p>
                    </div>
                  </div>
                  <div className="flex gap-2 pt-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 bg-transparent border-blue-400/50 text-blue-200 hover:bg-blue-500/20"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 bg-transparent border-green-400/50 text-green-200 hover:bg-green-500/20"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </div>
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
