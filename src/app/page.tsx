// ============================================
// FILE: /src/app/page.tsx
// Landing Page - Sophisticated & Minimalist
// ============================================
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, GraduationCap, BookOpen, Brain, CheckCircle, Zap, Award, TrendingUp } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Subtle animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50/30 via-orange-50/20 to-background pointer-events-none" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Header */}
      <header className="border-b border-border/50 bg-card/80 backdrop-blur-xl sticky top-0 z-50 shadow-theme-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="w-10 h-10 relative flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Image
                  src="/logo.svg" 
                  alt="Assura Learn Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
                Assura Learn
              </span>
            </div>
            <Link
              href="/learn"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 flex items-center space-x-2 group"
            >
              <span>Browse Topics</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 to-orange-400/10 border border-primary/20 rounded-full px-5 py-2.5 backdrop-blur-sm animate-fadeIn">
              <Brain className="h-4 w-4 text-primary animate-pulse" />
              <span className="text-xs font-semibold bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
                AI-Powered Learning Platform
              </span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight animate-fadeIn" style={{ animationDelay: '100ms' }}>
              Master Quality
              <span className="block bg-gradient-to-r from-primary via-teal-500 to-orange-500 bg-clip-text text-transparent">
                Assurance & Testing
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fadeIn" style={{ animationDelay: '200ms' }}>
              Transform your career with interactive lessons, real-world scenarios, and AI-guided learning paths designed for modern QA professionals.
            </p>
            
            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fadeIn" style={{ animationDelay: '300ms' }}>
              <Link
                href="/learn"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-teal-500 text-primary-foreground rounded-xl hover:shadow-theme-lg transition-all duration-300 text-lg font-semibold overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Start Learning Free
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              <Link
                href="/learn"
                className="inline-flex items-center justify-center px-8 py-4 bg-card border border-border text-foreground rounded-xl hover:border-primary hover:shadow-theme transition-all duration-300 text-lg font-semibold"
              >
                View Demo
              </Link>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center gap-8 pt-12 text-sm text-muted-foreground animate-fadeIn" style={{ animationDelay: '400ms' }}>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-4 w-4 text-success" />
                <span>10K+ Students</span>
              </div>
              <div className="w-1 h-1 bg-border rounded-full" />
              <div className="flex items-center space-x-2">
                <Award className="h-4 w-4 text-orange-500" />
                <span>50+ Topics</span>
              </div>
              <div className="w-1 h-1 bg-border rounded-full" />
              <div className="flex items-center space-x-2">
                <Zap className="h-4 w-4 text-primary" />
                <span>AI-Powered</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group relative bg-card border border-border rounded-2xl p-8 hover:border-orange-400/50 hover:shadow-theme-lg transition-all duration-500 animate-fadeIn" style={{ animationDelay: '500ms' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-theme">
                  <BookOpen className="h-7 w-7 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Interactive Lessons</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Learn by doing with hands-on exercises and real-world testing scenarios that build practical skills.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 hover:shadow-theme-lg transition-all duration-500 animate-fadeIn" style={{ animationDelay: '600ms' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-teal-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-theme">
                  <Brain className="h-7 w-7 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">AI-Powered Support</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Get instant, intelligent answers to your questions and personalized learning recommendations.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-card border border-border rounded-2xl p-8 hover:border-teal-400/50 hover:shadow-theme-lg transition-all duration-500 animate-fadeIn" style={{ animationDelay: '700ms' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-theme">
                  <CheckCircle className="h-7 w-7 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Progress Tracking</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Test your knowledge with adaptive quizzes and monitor your growth with detailed analytics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}