"use client"

import { Card, CardContent } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Stars background matching hero */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
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
          <h2 className="text-4xl font-bold text-center mb-12 text-white">About Me</h2>
          <Card className="bg-slate-800/80 border-slate-700 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="flex justify-center">
                  <div className="w-48 h-48 bg-slate-700 rounded-lg border-2 border-slate-600 flex items-center justify-center pixelated">
                    <div className="text-6xl">👨‍💻</div>
                  </div>
                </div>
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed text-white">
                    Hello! I'm Kim Sokcho, a passionate AI Engineer and Backend Developer with a deep love for creating
                    intelligent solutions that make a real impact.
                  </p>
                  <p className="text-lg leading-relaxed text-blue-200">
                    With expertise in deep learning, computer vision, and natural language processing, I specialize in
                    building robust backend systems and AI-powered applications that solve complex problems.
                  </p>
                  <p className="text-lg leading-relaxed text-green-200">
                    When I'm not coding, you'll find me exploring the latest AI research, enjoying a good cup of coffee
                    ☕️, and working on innovative projects that push the boundaries of what's possible.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
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
        
        .pixelated {
          image-rendering: pixelated;
          image-rendering: -moz-crisp-edges;
          image-rendering: crisp-edges;
        }
      `}</style>
    </section>
  )
}
