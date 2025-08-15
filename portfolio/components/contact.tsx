"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Github, Linkedin, Twitter } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-900 relative overflow-hidden">
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
          <h2 className="text-4xl font-bold text-center mb-12 text-white">📬 Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-slate-800/80 border-slate-600 backdrop-blur-sm hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Let's Connect 🌟</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  I'm always interested in discussing new opportunities, innovative projects, or just having a chat
                  about AI and technology. Feel free to reach out!
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-400" />
                    <span className="text-white">kim.sokcho@email.com</span>
                  </div>
                  <div className="flex space-x-4 pt-4">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 bg-transparent border-blue-400/50 text-blue-200 hover:bg-blue-500/20"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 bg-transparent border-green-400/50 text-green-200 hover:bg-green-500/20"
                    >
                      <Linkedin className="mr-2 h-4 w-4" />
                      LinkedIn
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 bg-transparent border-blue-400/50 text-blue-200 hover:bg-blue-500/20"
                    >
                      <Twitter className="mr-2 h-4 w-4" />
                      Twitter
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/80 border-slate-600 backdrop-blur-sm hover:shadow-xl hover:shadow-green-500/20 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Send a Message 💌</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      placeholder="First Name"
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400"
                    />
                    <Input
                      placeholder="Last Name"
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <Input
                    placeholder="Email"
                    type="email"
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400"
                  />
                  <Input
                    placeholder="Subject"
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400"
                  />
                  <Textarea
                    placeholder="Your message..."
                    rows={5}
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 resize-none"
                  />
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white">
                    Send Message ✨
                  </Button>
                </form>
              </CardContent>
            </Card>
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
