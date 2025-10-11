import React from 'react';
import { Sparkles, Send, CheckCircle } from 'lucide-react';

const AIAssistant = ({ topicTitle, question, response, onQuestionChange, onAsk, loading }) => {
    return (
        <div className="bg-card rounded-xl p-6 border border-border sticky top-24">
            <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <Sparkles className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="text-base font-semibold text-foreground">AI Assistant</h3>
            </div>

            <p className="text-sm text-muted-foreground mb-4">
                Ask questions about {topicTitle}
            </p>

            <div className="space-y-3">
                <textarea
                    value={question}
                    onChange={(e) => onQuestionChange(e.target.value)}
                    placeholder="Type your question..."
                    className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground resize-none text-sm"
                    rows="4"
                />
                <button
                    onClick={onAsk}
                    disabled={!question.trim() || loading}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <Send className="h-4 w-4" />
                    <span>{loading ? 'Thinking...' : 'Ask AI'}</span>
                </button>
            </div>

            {response && (
                <div className="mt-4 p-3 bg-primary/10 rounded-lg border border-primary/20">
                    <div className="flex items-start space-x-2 mb-2">
                        <Sparkles className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <h4 className="font-medium text-foreground text-sm">Response:</h4>
                    </div>
                    <p className="text-xs text-muted-foreground whitespace-pre-line">
                        {response}
                    </p>
                </div>
            )}

            <div className="mt-6 pt-4 border-t border-border">
                <h4 className="font-medium text-foreground mb-3 text-sm">Quick Tips:</h4>
                <ul className="space-y-2 text-xs text-muted-foreground">
                    <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Read material carefully before quiz</span>
                    </li>
                    <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Use AI for clarification</span>
                    </li>
                    <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Learn from incorrect answers</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default AIAssistant;