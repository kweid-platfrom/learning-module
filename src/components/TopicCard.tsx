import React from 'react';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface Topic {
    icon: LucideIcon;
    title: string;
    description: string;
}

interface TopicCardProps {
    topic: Topic;
    onClick: () => void;
    index: number;
}

const TopicCard: React.FC<TopicCardProps> = ({ topic, onClick, index }) => {
    const Icon = topic.icon;
    
    return (
        <div
            onClick={onClick}
            className="group cursor-pointer h-full"
            style={{ animationDelay: `${index * 50}ms` }}
        >
            <div className="bg-card h-full flex flex-col rounded-xl p-6 border border-border hover:border-orange-400 hover:shadow-theme-md transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-orange-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Icon className="h-7 w-7 text-primary-foreground group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                    {topic.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 flex-grow">
                    {topic.description}
                </p>
                <div className="flex items-center text-primary group-hover:text-orange-500 text-sm font-medium group-hover:translate-x-2 transition-all duration-300 mt-auto">
                    <span className="mr-2">Start Learning</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
            </div>
        </div>
    );
};

export default TopicCard;