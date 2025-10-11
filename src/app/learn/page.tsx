// ============================================
// FILE: /src/app/learn/page.tsx
// Learning Hub - Topic List
// ============================================
'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Sparkles, CheckCircle } from 'lucide-react';
import Layout from '../../components/Layout';
import TopicCard from '../../components/TopicCard';
import { TOPICS_DATA } from '../../data/topics';

export default function LearnPage() {
    const router = useRouter();

    const handleTopicSelect = (topic: any) => {
        router.push(`/learn/${topic.id}`);
    };

    return (
        <Layout>
            <div className="text-center mb-12">
                <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
                    <Sparkles className="h-4 w-4 text-primary" />
                    <span className="text-xs font-medium text-primary">AI-Powered Learning</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                    Master QA & Testing
                </h2>
                <p className="text-base text-muted-foreground max-w-2xl mx-auto mb-8">
                    Learn quality assurance through interactive lessons and AI-assisted learning
                </p>
                <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground flex-wrap">
                    <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Interactive Lessons</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>AI Support</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Quizzes</span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {TOPICS_DATA.map((topic, index) => (
                    <TopicCard
                        key={topic.id}
                        topic={topic}
                        onClick={() => handleTopicSelect(topic)}
                        index={index}
                    />
                ))}
            </div>
        </Layout>
    );
}

