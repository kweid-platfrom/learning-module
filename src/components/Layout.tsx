// ============================================
// FILE: /src/app/learn/components/Layout.tsx
// Learning Module Layout
// ============================================
'use client';

import React from 'react';
import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const router = useRouter();

    const handleClose = () => {
        router.push('/');
    };

    return (
        <div className="min-h-screen bg-background">
            <div className="bg-card border-b border-border sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <div className="w-14 h-14 relative flex-shrink-0">
                                <Image
                                    src="/logo.svg" 
                                    alt="Assura Learn Logo"
                                    width={56}
                                    height={56}
                                    className="object-contain"
                                    priority
                                />
                            </div>
                            <div>
                                <h1 className="text-xl font-bold text-foreground">Assura Learn</h1>
                                <p className="text-sm text-muted-foreground">Master Quality Assurance</p>
                            </div>
                        </div>
                        <button 
                            onClick={handleClose}
                            className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-accent"
                            aria-label="Exit to Home"
                        >
                            <X className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
                {children}
            </div>
        </div>
    );
};

export default Layout;