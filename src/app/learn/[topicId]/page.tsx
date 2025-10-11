// ============================================
// FILE: /src/app/learn/[topicId]/page.tsx
// Topic Detail Page
// ============================================
'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import Layout from '../../../components/Layout';
import LearningContent from '../../../components/LearningContent';
import QuizQuestion from '../../../components/QuizQuestion';
import QuizResults from '../../../components/QuizResults';
import AIAssistant from '../../../components/AIAssistant';
import { TOPICS_DATA } from '../../../data/topics';

export default function TopicDetailPage() {
    const router = useRouter();
    const params = useParams();
    const topicId = params?.topicId as string;

    const [selectedTopic, setSelectedTopic] = useState<any>(null);
    const [quizStarted, setQuizStarted] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState<number[]>([]);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [score, setScore] = useState(0);
    const [aiQuestion, setAiQuestion] = useState('');
    const [aiResponse, setAiResponse] = useState('');
    const [aiLoading, setAiLoading] = useState(false);

    useEffect(() => {
        if (topicId) {
            const topic = TOPICS_DATA.find(t => t.id === topicId);
            if (topic) {
                setSelectedTopic(topic);
            } else {
                router.push('/learn');
            }
        }
    }, [topicId, router]);

    const handleStartQuiz = () => {
        setQuizStarted(true);
        setCurrentQuestion(0);
        setUserAnswers([]);
        setQuizCompleted(false);
    };

    const handleAnswerSelect = (answerIndex: number) => {
        const newAnswers = [...userAnswers];
        newAnswers[currentQuestion] = answerIndex;
        setUserAnswers(newAnswers);
    };

    const handleNextQuestion = () => {
        if (currentQuestion < selectedTopic.quiz.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            handleSubmitQuiz();
        }
    };

    const handleSubmitQuiz = () => {
        let correctCount = 0;
        selectedTopic.quiz.forEach((q: any, index: number) => {
            if (userAnswers[index] === q.correct) {
                correctCount++;
            }
        });
        setScore(correctCount);
        setQuizCompleted(true);
    };

    const handleRetryQuiz = () => {
        setQuizStarted(true);
        setCurrentQuestion(0);
        setUserAnswers([]);
        setQuizCompleted(false);
        setScore(0);
    };

    const handleSaveProgress = () => {
        alert('Progress saved!');
    };

    const handleAskQuestion = async () => {
        if (!aiQuestion.trim()) return;
        
        setAiLoading(true);
        
        setTimeout(() => {
            setAiResponse(`This is a simulated AI response about "${aiQuestion}" in the context of ${selectedTopic?.title}. In production, this would connect to an AI service.`);
            setAiLoading(false);
        }, 1500);
    };

    if (!selectedTopic) {
        return (
            <Layout>
                <div className="text-center py-12">
                    <p className="text-muted-foreground">Loading...</p>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                    <button
                        onClick={() => router.push('/learn')}
                        className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                        <ArrowRight className="h-4 w-4 rotate-180" />
                        <span>Back to Topics</span>
                    </button>

                    <div className="bg-card rounded-xl p-6 border border-border">
                        <div className="flex items-start space-x-4">
                            <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                                {React.createElement(selectedTopic.icon, { className: 'h-7 w-7 text-primary-foreground' })}
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-2">
                                    {selectedTopic.title}
                                </h2>
                                <p className="text-sm text-muted-foreground">
                                    {selectedTopic.description}
                                </p>
                            </div>
                        </div>
                    </div>

                    {!quizStarted && !quizCompleted && (
                        <LearningContent 
                            content={selectedTopic.content}
                            onStartQuiz={handleStartQuiz}
                        />
                    )}

                    {quizStarted && !quizCompleted && (
                        <div className="bg-card rounded-xl p-6 border border-border">
                            <QuizQuestion
                                question={selectedTopic.quiz[currentQuestion].question}
                                options={selectedTopic.quiz[currentQuestion].options}
                                selectedAnswer={userAnswers[currentQuestion]}
                                onSelect={handleAnswerSelect}
                                questionNumber={currentQuestion + 1}
                                totalQuestions={selectedTopic.quiz.length}
                            />
                            <button
                                onClick={handleNextQuestion}
                                disabled={userAnswers[currentQuestion] === undefined}
                                className="w-full mt-6 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <span>{currentQuestion < selectedTopic.quiz.length - 1 ? 'Next' : 'Submit'}</span>
                                <ArrowRight className="h-5 w-5" />
                            </button>
                        </div>
                    )}

                    {quizCompleted && (
                        <QuizResults
                            score={score}
                            totalQuestions={selectedTopic.quiz.length}
                            quiz={selectedTopic.quiz}
                            userAnswers={userAnswers}
                            onRetry={handleRetryQuiz}
                            onSave={handleSaveProgress}
                        />
                    )}
                </div>

                <div className="lg:col-span-1">
                    <AIAssistant
                        topicTitle={selectedTopic.title}
                        question={aiQuestion}
                        response={aiResponse}
                        onQuestionChange={setAiQuestion}
                        onAsk={handleAskQuestion}
                        loading={aiLoading}
                    />
                </div>
            </div>
        </Layout>
    );
}
