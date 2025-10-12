// ============================================
// FILE: /src/app/page.tsx
// Landing Page - Sophisticated & Minimalist
// ============================================
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, GraduationCap, BookOpen, Brain, CheckCircle, Zap, Award, TrendingUp, Star, Users, Target, ExternalLink, Sparkles, TrendingUp as TrendingUpIcon, Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function HomePage() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "QA Engineer at TechCorp",
      image: "/avatars/avatar1.jpg",
      content: "Assura Learn transformed my testing career. The AI-powered lessons are incredibly intuitive and the real-world scenarios helped me land my dream job.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Senior Test Analyst",
      image: "/avatars/avatar2.jpg",
      content: "The best QA learning platform I've used. The integration with Assura QA platform makes it seamless to apply what you learn directly to your projects.",
      rating: 5
    },
    {
      name: "Priya Patel",
      role: "Quality Assurance Lead",
      image: "/avatars/avatar3.jpg",
      content: "Outstanding content quality and depth. I've upskilled my entire team using this platform. The progress tracking features are fantastic!",
      rating: 5
    }
  ];

  const trendingTopics = [
    { title: "AI in Testing", category: "Emerging Tech", trending: true },
    { title: "Test Automation Frameworks", category: "Automation", trending: true },
    { title: "API Testing with Postman", category: "API Testing", trending: true },
    { title: "Shift-Left Testing", category: "Best Practices", trending: false },
    { title: "Performance Testing", category: "Performance", trending: true },
    { title: "CI/CD Integration", category: "DevOps", trending: false },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Subtle animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50/30 via-orange-50/20 to-background pointer-events-none" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Header */}
      <header className="border-b border-border/50 bg-card/80 backdrop-blur-xl sticky top-0 z-50 shadow-theme-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 lg:space-x-3 group cursor-pointer">
              <div className="w-8 h-8 lg:w-10 lg:h-10 relative flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Image
                  src="/logo.svg" 
                  alt="Assura Learn Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
                Assura Learn
              </span>
            </div>
            <Link
              href="/learn"
              className="text-xs lg:text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 flex items-center space-x-1 lg:space-x-2 group"
            >
              <span>Browse Topics</span>
              <ArrowRight className="h-3 w-3 lg:h-4 lg:w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32">
          <div className="text-center max-w-4xl mx-auto space-y-6 lg:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 to-orange-400/10 border border-primary/20 rounded-full px-4 lg:px-5 py-2 lg:py-2.5 backdrop-blur-sm animate-fadeIn">
              <Brain className="h-3 w-3 lg:h-4 lg:w-4 text-primary animate-pulse" />
              <span className="text-xs font-semibold bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
                AI-Powered Learning Platform
              </span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground leading-tight animate-fadeIn" style={{ animationDelay: '100ms' }}>
              Master Quality
              <span className="block bg-gradient-to-r from-primary via-teal-500 to-orange-500 bg-clip-text text-transparent">
                Assurance & Testing
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fadeIn" style={{ animationDelay: '200ms' }}>
              Transform your career with interactive lessons, real-world scenarios, and AI-guided learning paths designed for modern QA professionals.
            </p>
            
            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 lg:gap-4 pt-4 animate-fadeIn" style={{ animationDelay: '300ms' }}>
              <Link
                href="/learn"
                className="w-full sm:w-auto group relative inline-flex items-center justify-center px-6 lg:px-8 py-3 lg:py-4 bg-gradient-to-r from-primary to-teal-500 text-primary-foreground rounded-xl hover:shadow-theme-lg transition-all duration-300 text-base lg:text-lg font-semibold overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Start Learning Free
                  <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              <Link
                href="/learn"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 lg:px-8 py-3 lg:py-4 bg-card border border-border text-foreground rounded-xl hover:border-primary hover:shadow-theme transition-all duration-300 text-base lg:text-lg font-semibold"
              >
                View Demo
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-8 pt-8 lg:pt-12 text-xs lg:text-sm text-muted-foreground animate-fadeIn" style={{ animationDelay: '400ms' }}>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-3 w-3 lg:h-4 lg:w-4 text-success" />
                <span>10K+ Students</span>
              </div>
              <div className="w-1 h-1 bg-border rounded-full hidden sm:block" />
              <div className="flex items-center space-x-2">
                <Award className="h-3 w-3 lg:h-4 lg:w-4 text-orange-500" />
                <span>50+ Topics</span>
              </div>
              <div className="w-1 h-1 bg-border rounded-full hidden sm:block" />
              <div className="flex items-center space-x-2">
                <Zap className="h-3 w-3 lg:h-4 lg:w-4 text-primary" />
                <span>AI-Powered</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1 */}
            <div className="group relative bg-card border border-border rounded-2xl p-6 lg:p-8 hover:border-orange-400/50 hover:shadow-theme-lg transition-all duration-500 animate-fadeIn" style={{ animationDelay: '500ms' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />
              <div className="relative">
                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-theme">
                  <BookOpen className="h-6 w-6 lg:h-7 lg:w-7 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-foreground mb-2 lg:mb-3">Interactive Lessons</h3>
                <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                  Learn by doing with hands-on exercises and real-world testing scenarios that build practical skills.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-card border border-border rounded-2xl p-6 lg:p-8 hover:border-primary/50 hover:shadow-theme-lg transition-all duration-500 animate-fadeIn" style={{ animationDelay: '600ms' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />
              <div className="relative">
                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-primary to-teal-500 rounded-xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-theme">
                  <Brain className="h-6 w-6 lg:h-7 lg:w-7 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-foreground mb-2 lg:mb-3">AI-Powered Support</h3>
                <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                  Get instant, intelligent answers to your questions and personalized learning recommendations.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-card border border-border rounded-2xl p-6 lg:p-8 hover:border-teal-400/50 hover:shadow-theme-lg transition-all duration-500 animate-fadeIn sm:col-span-2 lg:col-span-1" style={{ animationDelay: '700ms' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />
              <div className="relative">
                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-theme">
                  <CheckCircle className="h-6 w-6 lg:h-7 lg:w-7 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-foreground mb-2 lg:mb-3">Progress Tracking</h3>
                <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                  Test your knowledge with adaptive quizzes and monitor your growth with detailed analytics.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Trending Topics Section */}
        <div className="bg-gradient-to-b from-transparent via-primary/5 to-transparent py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 lg:mb-16">
              <div className="inline-flex items-center space-x-2 bg-orange-400/10 border border-orange-400/20 rounded-full px-4 py-2 mb-4 lg:mb-6">
                <Sparkles className="h-3 w-3 lg:h-4 lg:w-4 text-orange-500" />
                <span className="text-xs font-semibold text-orange-600">Hot Topics</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 lg:mb-4">
                Trending in <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">QA & Testing</span>
              </h2>
              <p className="text-sm lg:text-lg text-muted-foreground max-w-2xl mx-auto">
                Stay ahead with the most in-demand skills and emerging technologies in quality assurance
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {trendingTopics.map((topic, index) => (
                <div
                  key={index}
                  className="group bg-card border border-border rounded-xl p-5 lg:p-6 hover:border-primary/50 hover:shadow-theme transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-base lg:text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {topic.title}
                      </h3>
                      <span className="inline-block text-xs font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">
                        {topic.category}
                      </span>
                    </div>
                    {topic.trending && (
                      <div className="flex items-center space-x-1 text-orange-500">
                        <TrendingUpIcon className="h-4 w-4" />
                        <span className="text-xs font-bold">HOT</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center text-xs lg:text-sm text-muted-foreground mt-4">
                    <Users className="h-3 w-3 lg:h-4 lg:w-4 mr-2" />
                    <span>{Math.floor(Math.random() * 5000) + 1000}+ enrolled</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 lg:mb-16">
              <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-4 lg:mb-6">
                <Star className="h-3 w-3 lg:h-4 lg:w-4 text-primary" />
                <span className="text-xs font-semibold text-primary">Success Stories</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 lg:mb-4">
                Loved by <span className="bg-gradient-to-r from-primary to-teal-500 bg-clip-text text-transparent">QA Professionals</span>
              </h2>
              <p className="text-sm lg:text-lg text-muted-foreground max-w-2xl mx-auto">
                Join thousands of learners who've transformed their careers with Assura Learn
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-2xl p-6 lg:p-8 hover:border-primary/30 hover:shadow-theme transition-all duration-300"
                >
                  <div className="flex items-center space-x-1 mb-4 lg:mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 lg:h-5 lg:w-5 fill-orange-400 text-orange-400" />
                    ))}
                  </div>
                  <p className="text-sm lg:text-base text-muted-foreground mb-4 lg:mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center space-x-3 lg:space-x-4">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-primary to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm lg:text-base">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-sm lg:text-base">{testimonial.name}</div>
                      <div className="text-xs lg:text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Assura QA Platform Section */}
        <div className="bg-gradient-to-br from-primary/10 via-teal-500/5 to-orange-400/10 py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-card border border-primary/20 rounded-3xl p-8 lg:p-12 shadow-theme-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div>
                  <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-4 lg:mb-6">
                    <Target className="h-3 w-3 lg:h-4 lg:w-4 text-primary" />
                    <span className="text-xs font-semibold text-primary">Complete Platform</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 lg:mb-6">
                    Meet <span className="bg-gradient-to-r from-primary to-teal-500 bg-clip-text text-transparent">Assura QA</span>
                  </h2>
                  <p className="text-sm lg:text-lg text-muted-foreground mb-6 lg:mb-8 leading-relaxed">
                    Take your learning to the next level with Assura QA - our comprehensive test management platform. Seamlessly apply what you learn with powerful tools for test planning, execution, and reporting.
                  </p>
                  <ul className="space-y-3 lg:space-y-4 mb-6 lg:mb-8">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 lg:h-6 lg:w-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm lg:text-base text-foreground">Complete test case management and execution</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 lg:h-6 lg:w-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm lg:text-base text-foreground">Real-time collaboration and reporting</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 lg:h-6 lg:w-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm lg:text-base text-foreground">Seamless CI/CD integration</span>
                    </li>
                  </ul>
                  <a
                    href="https://assura.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 lg:px-8 py-3 lg:py-4 bg-gradient-to-r from-primary to-teal-500 text-primary-foreground rounded-xl hover:shadow-theme-lg transition-all duration-300 text-sm lg:text-lg font-semibold group"
                  >
                    Explore Assura QA
                    <ExternalLink className="ml-2 h-4 w-4 lg:h-5 lg:w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </a>
                </div>
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-teal-500/20 rounded-2xl flex items-center justify-center border border-primary/30 backdrop-blur-sm">
                    <div className="text-center">
                      <Target className="h-16 w-16 lg:h-20 lg:w-20 text-primary mx-auto mb-4" />
                      <p className="text-sm lg:text-base text-muted-foreground font-medium">Assura QA Platform Preview</p>
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-20 h-20 lg:w-24 lg:h-24 bg-orange-400/20 rounded-full blur-2xl" />
                  <div className="absolute -bottom-4 -left-4 w-20 h-20 lg:w-24 lg:h-24 bg-primary/20 rounded-full blur-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 lg:mb-6">
              Ready to Level Up Your <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">QA Skills?</span>
            </h2>
            <p className="text-sm lg:text-lg text-muted-foreground mb-6 lg:mb-8 max-w-2xl mx-auto">
              Join our community of passionate QA professionals and start your journey to becoming a testing expert today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 lg:gap-4">
              <Link
                href="/learn"
                className="w-full sm:w-auto group relative inline-flex items-center justify-center px-6 lg:px-8 py-3 lg:py-4 bg-gradient-to-r from-primary to-teal-500 text-primary-foreground rounded-xl hover:shadow-theme-lg transition-all duration-300 text-base lg:text-lg font-semibold overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Get Started Now
                  <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              <Link
                href="/learn"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 lg:px-8 py-3 lg:py-4 bg-card border border-border text-foreground rounded-xl hover:border-primary hover:shadow-theme transition-all duration-300 text-base lg:text-lg font-semibold"
              >
                Browse Courses
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8 lg:mb-12">
            {/* Brand Column */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-3 mb-4 lg:mb-6">
                <div className="w-8 h-8 lg:w-10 lg:h-10 relative flex-shrink-0">
                  <Image
                    src="/logo.svg" 
                    alt="Assura Learn Logo"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
                  Assura Learn
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-4 lg:mb-6 leading-relaxed">
                Empowering QA professionals with AI-powered learning experiences and cutting-edge test management solutions.
              </p>
              <div className="flex items-center space-x-4">
                <a
                  href="https://twitter.com/assura"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 lg:w-10 lg:h-10 bg-muted hover:bg-primary/10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Twitter className="h-4 w-4 lg:h-5 lg:w-5 text-muted-foreground hover:text-primary" />
                </a>
                <a
                  href="https://linkedin.com/company/assura"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 lg:w-10 lg:h-10 bg-muted hover:bg-primary/10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="h-4 w-4 lg:h-5 lg:w-5 text-muted-foreground hover:text-primary" />
                </a>
                <a
                  href="https://github.com/assura"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 lg:w-10 lg:h-10 bg-muted hover:bg-primary/10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Github className="h-4 w-4 lg:h-5 lg:w-5 text-muted-foreground hover:text-primary" />
                </a>
              </div>
            </div>

            {/* Learning Column */}
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-4 lg:mb-6">Learning</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/learn" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                    Browse Topics
                  </Link>
                </li>
                <li>
                  <Link href="/learn/paths" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                    Learning Paths
                  </Link>
                </li>
                <li>
                  <Link href="/learn/certifications" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                    Certifications
                  </Link>
                </li>
                <li>
                  <Link href="/learn/community" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                    Community
                  </Link>
                </li>
              </ul>
            </div>

            {/* Platform Column */}
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-4 lg:mb-6">Platform</h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://assura.io" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 inline-flex items-center"
                  >
                    Assura QA Platform
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://assura.io/features" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a 
                    href="https://assura.io/pricing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a 
                    href="https://assura.io/integrations" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    Integrations
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-4 lg:mb-6">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                    Careers
                  </Link>
                </li>
                <li>
                  <a href="mailto:support@assura.io" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 inline-flex items-center">
                    <Mail className="mr-1 h-3 w-3" />
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs lg:text-sm text-muted-foreground text-center sm:text-left">
              © {new Date().getFullYear()} Assura Learn. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link href="/privacy" className="text-xs lg:text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-xs lg:text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-xs lg:text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
      </div>
  );
}