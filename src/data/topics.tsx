import { 
    Target,
    Bug,
    FileCheck,
    Layers,
    Workflow,
    Shield,
    LucideIcon
} from 'lucide-react';

// ============================================
// TYPE DEFINITIONS
// ============================================

export interface QuizQuestion {
    id?: string;
    question: string;
    options: string[];
    correct: number;
    explanation?: string;
}

export interface Topic {
    id: string;
    title: string;
    icon: LucideIcon;
    description: string;
    content: string;
    videoUrl?: string;
    quiz: QuizQuestion[];
    difficulty?: 'beginner' | 'intermediate' | 'advanced';
    estimatedTime?: number; // in minutes
    prerequisites?: string[];
    tags?: string[];
}

// ============================================
// ICON MAPPING
// ============================================

const ICON_MAP: Record<string, LucideIcon> = {
    'target': Target,
    'bug': Bug,
    'file-check': FileCheck,
    'layers': Layers,
    'workflow': Workflow,
    'shield': Shield,
};

// ============================================
// API INTEGRATION (Commented Out)
// ============================================

/**
 * Fetch topics from external API
 * Uncomment and configure when ready to integrate with backend
 */

/*
export async function fetchTopicsFromAPI(): Promise<Topic[]> {
    try {
        const response = await fetch('/api/topics', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // Add authentication headers if needed
                // 'Authorization': `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch topics: ${response.statusText}`);
        }

        const data = await response.json();
        
        // Transform API response to match Topic interface
        return data.topics.map((topic: any) => ({
            id: topic.id,
            title: topic.title,
            icon: ICON_MAP[topic.iconName] || Target,
            description: topic.description,
            content: topic.content,
            videoUrl: topic.videoUrl,
            quiz: topic.quiz || [],
            difficulty: topic.difficulty,
            estimatedTime: topic.estimatedTime,
            prerequisites: topic.prerequisites,
            tags: topic.tags,
        }));
    } catch (error) {
        console.error('Error fetching topics:', error);
        // Fallback to local data or return empty array
        return TOPICS_DATA;
    }
}

export async function fetchTopicById(topicId: string): Promise<Topic | null> {
    try {
        const response = await fetch(`/api/topics/${topicId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch topic: ${response.statusText}`);
        }

        const data = await response.json();
        
        return {
            id: data.id,
            title: data.title,
            icon: ICON_MAP[data.iconName] || Target,
            description: data.description,
            content: data.content,
            videoUrl: data.videoUrl,
            quiz: data.quiz || [],
            difficulty: data.difficulty,
            estimatedTime: data.estimatedTime,
            prerequisites: data.prerequisites,
            tags: data.tags,
        };
    } catch (error) {
        console.error('Error fetching topic:', error);
        return null;
    }
}
*/

// ============================================
// DUMMY DATA (Current Implementation)
// ============================================

export const TOPICS_DATA: Topic[] = [
    {
        id: 'fundamentals',
        title: 'QA Fundamentals',
        icon: Target,
        description: 'Learn the core principles of quality assurance',
        difficulty: 'beginner',
        estimatedTime: 30,
        tags: ['basics', 'foundation', 'qa-principles'],
        videoUrl: 'https://www.youtube.com/embed/Yoyg3qRrqXI',
        content: `Quality Assurance (QA) is a systematic process of ensuring that a product or service meets specified requirements and customer expectations.

<strong>Key Concepts:</strong>

• Quality vs Testing: QA focuses on preventing defects through process improvement, while testing focuses on finding defects in the product.

• QA Activities: Include process definition, audits, training, and continuous improvement initiatives.

• Quality Standards: Following industry standards like ISO 9001 ensures consistent quality across projects.

• Prevention over Detection: QA aims to prevent defects early in the development cycle, reducing costs and time.

<strong>Why QA Matters:</strong>
• Reduces costs by catching issues early
• Improves customer satisfaction
• Builds trust and credibility
• Ensures regulatory compliance`,
        quiz: [
            {
                question: 'What is the primary goal of Quality Assurance?',
                options: [
                    'To find bugs in the software',
                    'To prevent defects through process improvement',
                    'To write test cases',
                    'To automate testing'
                ],
                correct: 1,
                explanation: 'QA is proactive and focuses on preventing defects through process improvement, while testing is reactive and focuses on finding defects.'
            },
            {
                question: 'Which statement best describes the difference between QA and Testing?',
                options: [
                    'QA and Testing are the same thing',
                    'QA is proactive (prevention), Testing is reactive (detection)',
                    'Testing comes before QA',
                    'QA only involves manual testing'
                ],
                correct: 1,
                explanation: 'QA prevents defects before they occur, while testing detects defects after they exist.'
            },
            {
                question: 'When should QA activities begin in a project?',
                options: [
                    'After development is complete',
                    'During the testing phase',
                    'At the very beginning of the project',
                    'Only when bugs are found'
                ],
                correct: 2,
                explanation: 'QA should begin at project inception to ensure quality is built into the process from the start.'
            }
        ]
    },
    {
        id: 'test-cases',
        title: 'Writing Test Cases',
        icon: FileCheck,
        description: 'Master the art of creating effective test cases',
        difficulty: 'beginner',
        estimatedTime: 45,
        tags: ['test-cases', 'documentation', 'best-practices'],
        prerequisites: ['fundamentals'],
        videoUrl: 'https://www.youtube.com/embed/Yoyg3qRrqXI', 
        content: `Test cases are detailed instructions that describe how to test a specific feature or functionality of a software application.

<strong>Components of a Good Test Case:</strong>

• Test Case ID: Unique identifier for tracking
• Test Description: Clear, concise summary
• Preconditions: Setup requirements before testing
• Test Steps: Detailed, numbered instructions
• Expected Results: What should happen at each step
• Actual Results: What actually happened (filled during execution)
• Status: Pass/Fail/Blocked

<strong>Best Practices:</strong>

1. Be Specific: Avoid ambiguity in test steps
2. One Objective: Each test case should test one thing
3. Reusable: Write test cases that can be reused
4. Maintainable: Easy to update when requirements change
5. Independent: Test cases shouldn't depend on each other`,
        quiz: [
            {
                question: 'What is the most important characteristic of a good test case?',
                options: [
                    'It should be as long as possible',
                    'It should be clear, specific, and unambiguous',
                    'It should test multiple features at once',
                    'It should only include positive scenarios'
                ],
                correct: 1
            },
            {
                question: 'Which component is NOT typically part of a test case?',
                options: [
                    'Test Case ID',
                    'Expected Results',
                    'Source code',
                    'Test Steps'
                ],
                correct: 2
            },
            {
                question: 'Why should test cases be independent of each other?',
                options: [
                    'To make them longer',
                    'So they can be executed in any order without dependencies',
                    'To reduce the number of test cases',
                    'To make testing faster'
                ],
                correct: 1
            }
        ]
    },
    {
        id: 'bug-tracking',
        title: 'Bug Tracking & Reporting',
        icon: Bug,
        description: 'Learn to identify, document, and track defects',
        difficulty: 'beginner',
        estimatedTime: 40,
        tags: ['bug-tracking', 'defect-management', 'reporting'],
        prerequisites: ['fundamentals'],
        videoUrl: 'https://www.youtube.com/embed/Yoyg3qRrqXI',
        content: `Effective bug tracking is crucial for maintaining software quality and ensuring timely resolution of issues.

<strong>Bug Life Cycle:</strong>

1. New: Bug is reported
2. Assigned: Assigned to a developer
3. Open: Developer is working on it
4. Fixed: Developer has fixed the bug
5. Retest: QA verifies the fix
6. Closed: Bug is resolved
7. Reopened: If bug still exists

<strong>Essential Bug Report Components:</strong>

• Title: Clear, descriptive summary
• Severity: Critical, High, Medium, Low
• Priority: How soon it needs to be fixed
• Steps to Reproduce: Detailed instructions
• Expected vs Actual Results: What should happen vs what did happen
• Environment: OS, browser, version, etc.
• Attachments: Screenshots, videos, logs`,
        quiz: [
            {
                question: 'What is the difference between bug severity and priority?',
                options: [
                    'They are the same thing',
                    'Severity is technical impact, Priority is business urgency',
                    'Priority is technical impact, Severity is business urgency',
                    'Only severity matters in bug tracking'
                ],
                correct: 1
            },
            {
                question: 'Which is the most critical information in a bug report?',
                options: [
                    'The name of the person who found it',
                    'The color scheme of the application',
                    'Steps to reproduce the bug',
                    'The time the bug was found'
                ],
                correct: 2
            },
            {
                question: 'When should a bug status be changed to "Reopened"?',
                options: [
                    'When the bug is first reported',
                    'When the developer starts working on it',
                    'When the fix doesn\'t resolve the issue',
                    'When the bug is assigned'
                ],
                correct: 2
            }
        ]
    },
    {
        id: 'test-types',
        title: 'Types of Testing',
        icon: Layers,
        description: 'Explore different testing methodologies',
        difficulty: 'intermediate',
        estimatedTime: 50,
        tags: ['testing-types', 'methodologies', 'strategies'],
        prerequisites: ['fundamentals', 'test-cases'],
        videoUrl: 'https://www.youtube.com/embed/Yoyg3qRrqXI',
        content: `Software testing encompasses various types and levels, each serving a specific purpose in ensuring quality.

<strong>Testing Levels:</strong>

• Unit Testing: Testing individual components/functions in isolation
• Integration Testing: Testing how components work together
• System Testing: Testing the complete integrated system
• Acceptance Testing: Validating against business requirements

<strong>Testing Types:</strong>

<strong>Functional Testing:</strong>
• Validates that features work as specified
• Includes smoke, sanity, regression testing

<strong>Non-Functional Testing:</strong>
• Performance: Speed, scalability, stability
• Security: Vulnerability and penetration testing
• Usability: User experience and interface testing
• Compatibility: Cross-browser, cross-device testing`,
        quiz: [
            {
                question: 'Which testing level comes first in the software development lifecycle?',
                options: [
                    'System Testing',
                    'Acceptance Testing',
                    'Unit Testing',
                    'Integration Testing'
                ],
                correct: 2
            },
            {
                question: 'What is the purpose of regression testing?',
                options: [
                    'To test new features',
                    'To ensure existing functionality still works after changes',
                    'To test performance',
                    'To test security'
                ],
                correct: 1
            },
            {
                question: 'Which is an example of non-functional testing?',
                options: [
                    'Testing login functionality',
                    'Testing form validation',
                    'Performance and load testing',
                    'Testing search feature'
                ],
                correct: 2
            }
        ]
    },
    {
        id: 'automation',
        title: 'Test Automation Basics',
        icon: Workflow,
        description: 'Introduction to automated testing',
        difficulty: 'intermediate',
        estimatedTime: 60,
        tags: ['automation', 'tools', 'frameworks'],
        prerequisites: ['fundamentals', 'test-cases', 'test-types'],
        videoUrl: 'https://www.youtube.com/embed/Yoyg3qRrqXI',
        content: `Test automation involves using specialized tools and scripts to execute tests automatically, reducing manual effort and increasing efficiency.

<strong>Benefits of Test Automation:</strong>

• Speed: Tests run faster than manual execution
• Repeatability: Same tests can run multiple times consistently
• Coverage: More tests can be executed in less time
• Reliability: Eliminates human error in test execution
• Cost-Effective: Saves time and resources in the long run

<strong>When to Automate:</strong>

✓ Repetitive tests
✓ Regression test suites
✓ Tests requiring multiple data sets
✓ Tests that run on multiple configurations
✓ Performance and load tests

<strong>Popular Automation Tools:</strong>

• Selenium: Web application testing
• Cypress: Modern web testing framework
• Appium: Mobile application testing
• JUnit/TestNG: Unit testing frameworks
• Postman/Rest-Assured: API testing`,
        quiz: [
            {
                question: 'Which scenario is BEST suited for test automation?',
                options: [
                    'One-time exploratory testing',
                    'Usability testing requiring human judgment',
                    'Regression tests that run repeatedly',
                    'Testing a feature still being developed'
                ],
                correct: 2
            },
            {
                question: 'What is the primary benefit of test automation?',
                options: [
                    'It completely eliminates the need for manual testing',
                    'It increases speed and consistency of test execution',
                    'It makes testing easier for non-technical people',
                    'It automatically fixes bugs'
                ],
                correct: 1
            },
            {
                question: 'Which tool is specifically designed for web application testing?',
                options: [
                    'JUnit',
                    'Appium',
                    'Selenium',
                    'Postman'
                ],
                correct: 2
            }
        ]
    },
    {
        id: 'best-practices',
        title: 'QA Best Practices',
        icon: Shield,
        description: 'Industry standards and professional practices',
        difficulty: 'advanced',
        estimatedTime: 55,
        tags: ['best-practices', 'standards', 'professional-development'],
        prerequisites: ['fundamentals', 'test-cases', 'bug-tracking', 'test-types'],
        videoUrl: 'https://www.youtube.com/embed/Yoyg3qRrqXI',
        content: `Following QA best practices ensures consistent quality, efficiency, and professionalism in your testing efforts.

<strong>Communication & Collaboration:</strong>

• Clear Documentation: Maintain comprehensive test documentation
• Stakeholder Communication: Regular updates on quality status
• Team Collaboration: Work closely with developers and product owners
• Feedback Loops: Provide constructive feedback early and often

<strong>Process Best Practices:</strong>

• Early Testing: Shift-left approach - test early in the development cycle
• Continuous Testing: Integrate testing throughout the development process
• Test Data Management: Maintain relevant, up-to-date test data
• Environment Management: Ensure test environments mirror production

<strong>Professional QA Mindset:</strong>

• Detail-Oriented: Notice small inconsistencies
• Analytical Thinking: Understand root causes
• User Advocacy: Think from the user's perspective
• Continuous Learning: Stay updated with new tools and techniques`,
        quiz: [
            {
                question: 'What does "shift-left testing" mean?',
                options: [
                    'Moving testing to a different team',
                    'Testing earlier in the development lifecycle',
                    'Testing only the left side of the screen',
                    'Reducing the amount of testing'
                ],
                correct: 1
            },
            {
                question: 'Which metric measures how much of the code is tested?',
                options: [
                    'Defect Density',
                    'Test Execution Rate',
                    'Test Coverage',
                    'Defect Resolution Time'
                ],
                correct: 2
            },
            {
                question: 'What should be the primary focus when prioritizing tests?',
                options: [
                    'Testing everything equally',
                    'Testing only new features',
                    'Risk-based testing - high-risk areas first',
                    'Testing based on alphabetical order'
                ],
                correct: 2
            }
        ]
    }
];

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Get all topics (currently returns dummy data)
 * Replace with fetchTopicsFromAPI() when ready
 */
export function getTopics(): Topic[] {
    // return await fetchTopicsFromAPI();
    return TOPICS_DATA;
}

/**
 * Get a single topic by ID
 */
export function getTopicById(topicId: string): Topic | undefined {
    // return await fetchTopicById(topicId);
    return TOPICS_DATA.find(topic => topic.id === topicId);
}

/**
 * Get topics by difficulty level
 */
export function getTopicsByDifficulty(difficulty: 'beginner' | 'intermediate' | 'advanced'): Topic[] {
    return TOPICS_DATA.filter(topic => topic.difficulty === difficulty);
}

/**
 * Get topics by tag
 */
export function getTopicsByTag(tag: string): Topic[] {
    return TOPICS_DATA.filter(topic => topic.tags?.includes(tag));
}

/**
 * Search topics by query
 */
export function searchTopics(query: string): Topic[] {
    const lowerQuery = query.toLowerCase();
    return TOPICS_DATA.filter(topic => 
        topic.title.toLowerCase().includes(lowerQuery) ||
        topic.description.toLowerCase().includes(lowerQuery) ||
        topic.tags?.some(tag => tag.toLowerCase().includes(lowerQuery))
    );
}

/**
 * Get recommended topics based on completed topics
 */
export function getRecommendedTopics(completedTopicIds: string[]): Topic[] {
    return TOPICS_DATA.filter(topic => {
        // Don't recommend already completed topics
        if (completedTopicIds.includes(topic.id)) return false;
        
        // Recommend if prerequisites are met
        if (topic.prerequisites && topic.prerequisites.length > 0) {
            return topic.prerequisites.every(prereq => completedTopicIds.includes(prereq));
        }
        
        return true;
    });
}