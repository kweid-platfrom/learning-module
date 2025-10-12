// ============================================
// FILE: /src/app/learn/[topicId]/page.tsx
// Enhanced Topic Detail Page with Video, Dynamic Quiz, and Sharing
// ============================================
'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { 
    ArrowRight, 
    BookOpen, 
    Video, 
    Share2, 
    CheckCircle, 
    Sparkles,
    Copy,
    Twitter,
    Linkedin,
    Facebook,
    Link as LinkIcon
} from 'lucide-react';
import Layout from '../../../components/Layout';
import AIAssistant from '../../../components/AIAssistant';
import { TOPICS_DATA } from '../../../data/topics';

type LearningMode = 'video' | 'reading' | 'both';

// Utility to shuffle and select random questions
function generateDynamicQuiz(allQuestions: any[], count: number = 5) {
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(count, shuffled.length)).map(q => ({
        ...q,
        options: [...q.options].sort(() => Math.random() - 0.5),
        correct: q.options.indexOf(q.options[q.correct])
    }));
}

export default function TopicDetailPage() {
    const router = useRouter();
    const params = useParams();
    const topicId = params?.topicId as string;

    const [selectedTopic, setSelectedTopic] = useState<any>(null);
    const [learningMode, setLearningMode] = useState<LearningMode>('both');
    const [quizStarted, setQuizStarted] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState<number[]>([]);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [score, setScore] = useState(0);
    const [dynamicQuiz, setDynamicQuiz] = useState<any[]>([]);
    const [showShareModal, setShowShareModal] = useState(false);
    const [showAISummary, setShowAISummary] = useState(false);
    const [aiSummary, setAiSummary] = useState('');
    const [summaryLoading, setSummaryLoading] = useState(false);
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
        // Generate dynamic quiz each time
        const newQuiz = generateDynamicQuiz(selectedTopic.quiz, 5);
        setDynamicQuiz(newQuiz);
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
        if (currentQuestion < dynamicQuiz.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            handleSubmitQuiz();
        }
    };

    const handleSubmitQuiz = () => {
        let correctCount = 0;
        dynamicQuiz.forEach((q: any, index: number) => {
            if (userAnswers[index] === q.correct) {
                correctCount++;
            }
        });
        setScore(correctCount);
        setQuizCompleted(true);
    };

    const handleRetryQuiz = () => {
        handleStartQuiz(); // This will generate new questions
    };

    const handleGenerateAISummary = () => {
        setSummaryLoading(true);
        setShowAISummary(true);
        
        // Simulate AI summary generation
        setTimeout(() => {
            setAiSummary(
                `📚 **Key Takeaways for ${selectedTopic?.title}**\n\n` +
                `This topic covers essential concepts in quality assurance. ` +
                `Understanding these principles will help you build robust testing strategies. ` +
                `The main points include practical applications, best practices, and common pitfalls to avoid. ` +
                `Make sure to practice the concepts through hands-on exercises and real-world scenarios.`
            );
            setSummaryLoading(false);
        }, 2000);
    };

    const handleShare = (platform: string) => {
        const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
        const shareText = `Check out this ${selectedTopic?.title} lesson on Assura Learn!`;
        
        const urls: { [key: string]: string } = {
            twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
            linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
        };

        if (platform === 'copy') {
            navigator.clipboard.writeText(shareUrl);
            alert('Link copied to clipboard!');
        } else {
            window.open(urls[platform], '_blank', 'width=600,height=400');
        }
        setShowShareModal(false);
    };

    const handleAskQuestion = async () => {
        if (!aiQuestion.trim()) return;
        
        setAiLoading(true);
        
        setTimeout(() => {
            setAiResponse(
                `Regarding "${aiQuestion}" in ${selectedTopic?.title}:\n\n` +
                `This is an important question. In quality assurance context, ` +
                `this relates to ensuring comprehensive test coverage and maintaining quality standards. ` +
                `Consider breaking down the problem into smaller testable units and applying relevant testing strategies.`
            );
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
                    {/* Navigation & Share */}
                    <div className="flex items-center justify-between">
                        <button
                            onClick={() => router.push('/learn')}
                            className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
                        >
                            <ArrowRight className="h-4 w-4 rotate-180" />
                            <span>Back to Topics</span>
                        </button>
                        <button
                            onClick={() => setShowShareModal(true)}
                            className="flex items-center space-x-2 px-4 py-2 bg-card border border-border rounded-lg hover:border-primary transition-all text-sm"
                        >
                            <Share2 className="h-4 w-4" />
                            <span>Share</span>
                        </button>
                    </div>

                    {/* Topic Header */}
                    <div className="bg-card rounded-xl p-6 border border-border">
                        <div className="flex items-start space-x-4">
                            <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                                {React.createElement(selectedTopic.icon, { className: 'h-7 w-7 text-primary-foreground' })}
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold text-foreground mb-2">
                                    {selectedTopic.title}
                                </h2>
                                <p className="text-sm text-muted-foreground mb-4">
                                    {selectedTopic.description}
                                </p>
                                
                                {/* Learning Mode Selector */}
                                <div className="flex flex-wrap items-center gap-2">
                                    <span className="text-xs text-muted-foreground">Learning Mode:</span>
                                    <button
                                        onClick={() => setLearningMode('video')}
                                        className={`flex items-center space-x-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                                            learningMode === 'video'
                                                ? 'bg-primary text-primary-foreground'
                                                : 'bg-muted text-muted-foreground hover:bg-muted/80'
                                        }`}
                                    >
                                        <Video className="h-3 w-3" />
                                        <span>Video</span>
                                    </button>
                                    <button
                                        onClick={() => setLearningMode('reading')}
                                        className={`flex items-center space-x-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                                            learningMode === 'reading'
                                                ? 'bg-primary text-primary-foreground'
                                                : 'bg-muted text-muted-foreground hover:bg-muted/80'
                                        }`}
                                    >
                                        <BookOpen className="h-3 w-3" />
                                        <span>Reading</span>
                                    </button>
                                    <button
                                        onClick={() => setLearningMode('both')}
                                        className={`flex items-center space-x-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                                            learningMode === 'both'
                                                ? 'bg-primary text-primary-foreground'
                                                : 'bg-muted text-muted-foreground hover:bg-muted/80'
                                        }`}
                                    >
                                        <CheckCircle className="h-3 w-3" />
                                        <span>Both</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {!quizStarted && !quizCompleted && (
                        <>
                            {/* Video Content */}
                            {(learningMode === 'video' || learningMode === 'both') && selectedTopic.videoUrl && (
                                <div className="bg-card rounded-xl p-6 border border-border">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center space-x-2">
                                            <Video className="h-5 w-5 text-primary" />
                                            <h3 className="text-lg font-semibold text-foreground">Video Tutorial</h3>
                                        </div>
                                    </div>
                                    <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                                        <iframe
                                            width="100%"
                                            height="100%"
                                            src={selectedTopic.videoUrl}
                                            title={selectedTopic.title}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            className="w-full h-full"
                                        />
                                    </div>
                                </div>
                            )}

                            {/* Reading Content */}
                            {(learningMode === 'reading' || learningMode === 'both') && (
                                <div className="bg-card rounded-xl p-6 border border-border">
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center space-x-2">
                                            <BookOpen className="h-5 w-5 text-primary" />
                                            <h3 className="text-lg font-semibold text-foreground">Learning Material</h3>
                                        </div>
                                        <button
                                            onClick={handleGenerateAISummary}
                                            className="flex items-center space-x-2 px-3 py-1.5 bg-gradient-to-r from-primary/10 to-orange-400/10 border border-primary/20 rounded-lg hover:shadow-theme transition-all text-sm"
                                        >
                                            <Sparkles className="h-4 w-4 text-primary" />
                                            <span className="text-primary font-medium">AI Summary</span>
                                        </button>
                                    </div>

                                    {showAISummary && (
                                        <div className="mb-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                                            {summaryLoading ? (
                                                <div className="flex items-center space-x-2 text-primary">
                                                    <div className="animate-spin h-4 w-4 border-2 border-primary border-t-transparent rounded-full" />
                                                    <span className="text-sm">Generating AI summary...</span>
                                                </div>
                                            ) : (
                                                <div className="prose prose-sm max-w-none">
                                                    <p className="text-sm text-foreground whitespace-pre-line">{aiSummary}</p>
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    <div className="prose prose-sm max-w-none">
                                        {selectedTopic.content.split('\n\n').map((paragraph: string, index: number) => (
                                            <p key={index} className="text-muted-foreground mb-4 whitespace-pre-line text-sm leading-relaxed">
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Start Quiz Button */}
                            <div className="bg-card rounded-xl p-6 border border-border">
                                <div className="text-center">
                                    <h3 className="text-lg font-semibold text-foreground mb-2">Ready to test your knowledge?</h3>
                                    <p className="text-sm text-muted-foreground mb-6">
                                        Take a dynamic quiz with randomly selected questions
                                    </p>
                                    <button
                                        onClick={handleStartQuiz}
                                        className="w-full bg-gradient-to-r from-primary to-teal-500 hover:shadow-theme-lg text-primary-foreground px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2"
                                    >
                                        <span>Start Quiz</span>
                                        <ArrowRight className="h-5 w-5" />
                                    </button>
                                </div>
                            </div>
                        </>
                    )}

                    {/* Quiz Questions */}
                    {quizStarted && !quizCompleted && (
                        <div className="bg-card rounded-xl p-6 border border-border">
                            <div className="mb-6">
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-lg font-semibold text-foreground">
                                        Question {currentQuestion + 1} of {dynamicQuiz.length}
                                    </h3>
                                    <span className="text-sm text-muted-foreground">
                                        {Math.round(((currentQuestion + 1) / dynamicQuiz.length) * 100)}% Complete
                                    </span>
                                </div>
                                <div className="w-full bg-muted rounded-full h-2">
                                    <div
                                        className="bg-primary h-2 rounded-full transition-all duration-300"
                                        style={{ width: `${((currentQuestion + 1) / dynamicQuiz.length) * 100}%` }}
                                    />
                                </div>
                            </div>

                            <h4 className="text-base font-medium text-foreground mb-6">
                                {dynamicQuiz[currentQuestion]?.question}
                            </h4>
                            <div className="space-y-3 mb-6">
                                {dynamicQuiz[currentQuestion]?.options.map((option: string, index: number) => (
                                    <button
                                        key={index}
                                        onClick={() => handleAnswerSelect(index)}
                                        className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                                            userAnswers[currentQuestion] === index
                                                ? 'border-primary bg-primary/10'
                                                : 'border-border hover:border-primary/50'
                                        }`}
                                    >
                                        <div className="flex items-center space-x-3">
                                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                                                userAnswers[currentQuestion] === index
                                                    ? 'border-primary bg-primary'
                                                    : 'border-muted-foreground'
                                            }`}>
                                                {userAnswers[currentQuestion] === index && (
                                                    <div className="w-2 h-2 bg-primary-foreground rounded-full" />
                                                )}
                                            </div>
                                            <span className="text-foreground text-sm">{option}</span>
                                        </div>
                                    </button>
                                ))}
                            </div>
                            <button
                                onClick={handleNextQuestion}
                                disabled={userAnswers[currentQuestion] === undefined}
                                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <span>{currentQuestion < dynamicQuiz.length - 1 ? 'Next Question' : 'Submit Quiz'}</span>
                                <ArrowRight className="h-5 w-5" />
                            </button>
                        </div>
                    )}

                    {/* Quiz Results */}
                    {quizCompleted && (
                        <div className="bg-card rounded-xl p-6 border border-border">
                            <div className="text-center mb-6">
                                <div className={`w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center ${
                                    score / dynamicQuiz.length >= 0.7 ? 'bg-success/20' : 'bg-orange-500/20'
                                }`}>
                                    <span className="text-3xl font-bold text-foreground">
                                        {Math.round((score / dynamicQuiz.length) * 100)}%
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold text-foreground mb-2">
                                    {score / dynamicQuiz.length >= 0.7 ? 'Great Job!' : 'Keep Learning!'}
                                </h3>
                                <p className="text-muted-foreground">
                                    You got {score} out of {dynamicQuiz.length} questions correct
                                </p>
                            </div>

                            <div className="space-y-4 mb-6">
                                {dynamicQuiz.map((q: any, index: number) => (
                                    <div key={index} className="p-4 bg-muted/50 rounded-lg">
                                        <div className="flex items-start space-x-3 mb-2">
                                            {userAnswers[index] === q.correct ? (
                                                <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                                            ) : (
                                                <div className="h-5 w-5 rounded-full border-2 border-destructive flex-shrink-0 mt-0.5" />
                                            )}
                                            <div className="flex-1">
                                                <p className="text-sm font-medium text-foreground mb-2">{q.question}</p>
                                                <p className="text-xs text-muted-foreground">
                                                    Your answer: <span className={userAnswers[index] === q.correct ? 'text-success' : 'text-destructive'}>
                                                        {q.options[userAnswers[index]] || 'Not answered'}
                                                    </span>
                                                </p>
                                                {userAnswers[index] !== q.correct && (
                                                    <p className="text-xs text-success mt-1">
                                                        Correct answer: {q.options[q.correct]}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex space-x-3">
                                <button
                                    onClick={handleRetryQuiz}
                                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-medium transition-all duration-300"
                                >
                                    Try New Questions
                                </button>
                                <button
                                    onClick={() => router.push('/learn')}
                                    className="flex-1 bg-card border border-border text-foreground px-6 py-3 rounded-lg font-medium hover:border-primary transition-all duration-300"
                                >
                                    Browse Topics
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* AI Assistant Sidebar */}
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

            {/* Share Modal */}
            {showShareModal && (
                <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-card border border-border rounded-2xl p-6 max-w-md w-full shadow-theme-xl">
                        <h3 className="text-xl font-bold text-foreground mb-4">Share this topic</h3>
                        <div className="grid grid-cols-2 gap-3 mb-4">
                            <button
                                onClick={() => handleShare('twitter')}
                                className="flex items-center justify-center space-x-2 p-3 bg-muted hover:bg-primary/10 rounded-lg transition-all"
                            >
                                <Twitter className="h-5 w-5 text-[#1DA1F2]" />
                                <span className="text-sm font-medium">Twitter</span>
                            </button>
                            <button
                                onClick={() => handleShare('linkedin')}
                                className="flex items-center justify-center space-x-2 p-3 bg-muted hover:bg-primary/10 rounded-lg transition-all"
                            >
                                <Linkedin className="h-5 w-5 text-[#0A66C2]" />
                                <span className="text-sm font-medium">LinkedIn</span>
                            </button>
                            <button
                                onClick={() => handleShare('facebook')}
                                className="flex items-center justify-center space-x-2 p-3 bg-muted hover:bg-primary/10 rounded-lg transition-all"
                            >
                                <Facebook className="h-5 w-5 text-[#1877F2]" />
                                <span className="text-sm font-medium">Facebook</span>
                            </button>
                            <button
                                onClick={() => handleShare('copy')}
                                className="flex items-center justify-center space-x-2 p-3 bg-muted hover:bg-primary/10 rounded-lg transition-all"
                            >
                                <Copy className="h-5 w-5 text-primary" />
                                <span className="text-sm font-medium">Copy Link</span>
                            </button>
                        </div>
                        <button
                            onClick={() => setShowShareModal(false)}
                            className="w-full bg-card border border-border text-foreground px-4 py-2 rounded-lg hover:border-primary transition-all"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </Layout>
    );
}