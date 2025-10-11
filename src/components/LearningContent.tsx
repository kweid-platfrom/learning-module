import React from 'react';
import { BookOpen, ArrowRight } from 'lucide-react';

interface LearningContentProps {
    content: string;
    onStartQuiz: () => void;
}

const LearningContent: React.FC<LearningContentProps> = ({ content, onStartQuiz }) => {
    return (
        <div className="bg-card rounded-xl p-6 border border-border">
            <div className="flex items-center space-x-2 mb-6">
                <BookOpen className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">Learning Material</h3>
            </div>
            <div className="prose prose-sm max-w-none">
                {content.split('\n\n').map((paragraph: string, index: number) => (
                    <p key={index} className="text-muted-foreground mb-4 whitespace-pre-line text-sm leading-relaxed">
                        {paragraph}
                    </p>
                ))}
            </div>
            <div className="mt-6 pt-6 border-t border-border">
                <button
                    onClick={onStartQuiz}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2"
                >
                    <span>Take Quiz</span>
                    <ArrowRight className="h-5 w-5" />
                </button>
            </div>
        </div>
    );
};

export default LearningContent;