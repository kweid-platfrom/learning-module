// ============================================
// FILE: QuizQuestion.tsx
// ============================================
import React from 'react';

interface QuizQuestionProps {
    question: string;
    options: string[];
    selectedAnswer: number | null;
    onSelect: (index: number) => void;
    questionNumber: number;
    totalQuestions: number;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({ 
    question, 
    options, 
    selectedAnswer, 
    onSelect, 
    questionNumber, 
    totalQuestions 
}) => {
    return (
        <div>
            <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-foreground">
                        Question {questionNumber} of {totalQuestions}
                    </h3>
                    <span className="text-sm text-muted-foreground">
                        {Math.round((questionNumber / totalQuestions) * 100)}% Complete
                    </span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                    <div
                        className="bg-primary h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
                    />
                </div>
            </div>

            <h4 className="text-base font-medium text-foreground mb-6">
                {question}
            </h4>
            <div className="space-y-3">
                {options.map((option: string, index: number) => (
                    <button
                        key={index}
                        onClick={() => onSelect(index)}
                        className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                            selectedAnswer === index
                                ? 'border-primary bg-primary/10'
                                : 'border-border hover:border-primary/50'
                        }`}
                    >
                        <div className="flex items-center space-x-3">
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                                selectedAnswer === index
                                    ? 'border-primary bg-primary'
                                    : 'border-muted-foreground'
                            }`}>
                                {selectedAnswer === index && (
                                    <div className="w-2 h-2 bg-primary-foreground rounded-full" />
                                )}
                            </div>
                            <span className="text-foreground text-sm">{option}</span>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default QuizQuestion;
