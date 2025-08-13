// Enhanced by AI on 2025-08-13T22:20:28.330Z
// Section: features
// Category: features

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Zap, 
  Laptop, 
  Code, 
  Book, 
  Feather, 
  Cpu, 
  Aperture, 
  Headphones
} from "lucide-react"
import Link from "next/link"

export default function TechBlog() {
  const features = [
    {
      icon: Zap,
      title: "Latest Tech News",
      description: "Stay up-to-date with the latest trends and innovations in the tech industry.",
      badge: "News"
    },
    {
      icon: Laptop,
      title: "Product Reviews",
      description: "In-depth analysis and honest reviews of the hottest tech products.",
      badge: "Reviews"
    },
    {
      icon: Code,
      title: "Programming Tutorials",
      description: "Learn to code with step-by-step guides and expert programming tips.",
      badge: "Tutorials"
    },
    {
      icon: Book,
      title: "Tech Guides",
      description: "Comprehensive guides to help you master various tech-related topics.",
      badge: "Guides"
    },
    {
      icon: Feather,
      title: "Industry Insights",
      description: "Thought-provoking articles and analysis on the tech landscape.",
      badge: "Insights"
    },
    {
      icon: Cpu,
      title: "Hardware Spotlight",
      description: "In-depth looks at the latest hardware and gadgets in the market.",
      badge: "Hardware"
    },
    {
      icon: Aperture,
      title: "Design Inspiration",
      description: "Explore cutting-edge design trends and creative tech-driven projects.",
      badge: "Design"
    },
    {
      icon: Headphones,
      title: "Podcast Episodes",
      description: "Listen to engaging discussions with industry experts and thought leaders.",
      badge: "Podcast"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Tech Blog
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Explore the Latest Trends
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              in the Tech World
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Dive into a world of cutting-edge technology, insightful analysis, and expert guidance.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <Link href="/blog" className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
            All Articles
          </Link>
          <Link href="/blog/news" className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
            Tech News
          </Link>
          <Link href="/blog/reviews" className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
            Product Reviews
          </Link>
          <Link href="/blog/tutorials" className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
            Programming Tutorials
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to dive into the latest tech insights?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/blog" className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Explore All Articles
            </Link>
            <Link href="/subscribe" className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
              Subscribe to Newsletter
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}