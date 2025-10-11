// ============================================
// FILE: QuizResults.tsx
// ============================================
import React from 'react';
import { CheckCircle, X, RotateCcw, Save } from 'lucide-react';

interface QuizItem {
    question: string;
    options: string[];
    correct: number;
}

interface QuizResultsProps {
    score: number;
    totalQuestions: number;
    quiz: QuizItem[];
    userAnswers: number[];
    onRetry: () => void;
    onSave: () => void;
}

const QuizResults: React.FC<QuizResultsProps> = ({ 
    score, 
    totalQuestions, 
    quiz, 
    userAnswers, 
    onRetry, 
    onSave 
}) => {
    const getScoreColor = (score: number, total: number): string => {
        const percentage = (score / total) * 100;
        if (percentage >= 80) return 'text-success';
        if (percentage >= 60) return 'text-warning';
        return 'text-error';
    };

    const getScoreMessage = (score: number, total: number): string => {
        const percentage = (score / total) * 100;
        if (percentage >= 80) return 'Excellent! Strong understanding of this topic.';
        if (percentage >= 60) return 'Good job! Review to strengthen knowledge.';
        return 'Keep learning! Review and try again.';
    };

    const getScoreBgColor = (score: number, total: number): string => {
        const percentage = (score / total) * 100;
        if (percentage >= 80) return 'bg-success/10';
        if (percentage >= 60) return 'bg-warning/10';
        return 'bg-error/10';
    };

    return (
        <div className="bg-card rounded-xl p-6 border border-border">
            <div className="text-center mb-8">
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 ${getScoreBgColor(score, totalQuestions)}`}>
                    <span className={`text-3xl font-bold ${getScoreColor(score, totalQuestions)}`}>
                        {Math.round((score / totalQuestions) * 100)}%
                    </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                    Quiz Complete!
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                    You scored {score} out of {totalQuestions}
                </p>
                <p className={`text-base font-medium ${getScoreColor(score, totalQuestions)}`}>
                    {getScoreMessage(score, totalQuestions)}
                </p>
            </div>

            <div className="space-y-4 mb-6">
                <h4 className="font-semibold text-foreground text-sm">Review Answers:</h4>
                {quiz.map((question: QuizItem, qIndex: number) => (
                    <div key={qIndex} className="p-4 bg-muted rounded-lg">
                        <p className="font-medium text-foreground mb-3 text-sm">
                            {qIndex + 1}. {question.question}
                        </p>
                        <div className="space-y-2">
                            {question.options.map((option: string, oIndex: number) => (
                                <div
                                    key={oIndex}
                                    className={`p-3 rounded-lg text-sm ${
                                        oIndex === question.correct
                                            ? 'bg-success/10 border-2 border-success'
                                            : userAnswers[qIndex] === oIndex
                                            ? 'bg-error/10 border-2 border-error'
                                            : 'bg-card'
                                    }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="text-foreground">{option}</span>
                                        {oIndex === question.correct && (
                                            <CheckCircle className="h-4 w-4 text-success" />
                                        )}
                                        {userAnswers[qIndex] === oIndex && oIndex !== question.correct && (
                                            <X className="h-4 w-4 text-error" />
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
                <button
                    onClick={onRetry}
                    className="flex-1 bg-muted hover:bg-muted/80 text-foreground px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2"
                >
                    <RotateCcw className="h-5 w-5" />
                    <span>Retry Quiz</span>
                </button>
                <button
                    onClick={onSave}
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2"
                >
                    <Save className="h-5 w-5" />
                    <span>Save Progress</span>
                </button>
            </div>
        </div>
    );
};

export default QuizResults;