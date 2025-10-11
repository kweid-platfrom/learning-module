import { 
    Target,
    Bug,
    FileCheck,
    Layers,
    Workflow,
    Shield
} from 'lucide-react';

export const TOPICS_DATA = [
    {
        id: 'fundamentals',
        title: 'QA Fundamentals',
        icon: Target,
        description: 'Learn the core principles of quality assurance',
        content: `Quality Assurance (QA) is a systematic process of ensuring that a product or service meets specified requirements and customer expectations.

**Key Concepts:**

- Quality vs Testing: QA focuses on preventing defects through process improvement, while testing focuses on finding defects in the product.

- QA Activities: Include process definition, audits, training, and continuous improvement initiatives.

- Quality Standards: Following industry standards like ISO 9001 ensures consistent quality across projects.

- Prevention over Detection: QA aims to prevent defects early in the development cycle, reducing costs and time.

**Why QA Matters:**
- Reduces costs by catching issues early
- Improves customer satisfaction
- Builds trust and credibility
- Ensures regulatory compliance`,
        quiz: [
            {
                question: 'What is the primary goal of Quality Assurance?',
                options: [
                    'To find bugs in the software',
                    'To prevent defects through process improvement',
                    'To write test cases',
                    'To automate testing'
                ],
                correct: 1
            },
            {
                question: 'Which statement best describes the difference between QA and Testing?',
                options: [
                    'QA and Testing are the same thing',
                    'QA is proactive (prevention), Testing is reactive (detection)',
                    'Testing comes before QA',
                    'QA only involves manual testing'
                ],
                correct: 1
            },
            {
                question: 'When should QA activities begin in a project?',
                options: [
                    'After development is complete',
                    'During the testing phase',
                    'At the very beginning of the project',
                    'Only when bugs are found'
                ],
                correct: 2
            }
        ]
    },
    {
        id: 'test-cases',
        title: 'Writing Test Cases',
        icon: FileCheck,
        description: 'Master the art of creating effective test cases',
        content: `Test cases are detailed instructions that describe how to test a specific feature or functionality of a software application.

**Components of a Good Test Case:**

- Test Case ID: Unique identifier for tracking
- Test Description: Clear, concise summary
- Preconditions: Setup requirements before testing
- Test Steps: Detailed, numbered instructions
- Expected Results: What should happen at each step
- Actual Results: What actually happened (filled during execution)
- Status: Pass/Fail/Blocked

**Best Practices:**

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
        content: `Effective bug tracking is crucial for maintaining software quality and ensuring timely resolution of issues.

**Bug Life Cycle:**

1. New: Bug is reported
2. Assigned: Assigned to a developer
3. Open: Developer is working on it
4. Fixed: Developer has fixed the bug
5. Retest: QA verifies the fix
6. Closed: Bug is resolved
7. Reopened: If bug still exists

**Essential Bug Report Components:**

- Title: Clear, descriptive summary
- Severity: Critical, High, Medium, Low
- Priority: How soon it needs to be fixed
- Steps to Reproduce: Detailed instructions
- Expected vs Actual Results: What should happen vs what did happen
- Environment: OS, browser, version, etc.
- Attachments: Screenshots, videos, logs`,
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
        content: `Software testing encompasses various types and levels, each serving a specific purpose in ensuring quality.

**Testing Levels:**

- Unit Testing: Testing individual components/functions in isolation
- Integration Testing: Testing how components work together
- System Testing: Testing the complete integrated system
- Acceptance Testing: Validating against business requirements

**Testing Types:**

**Functional Testing:**
- Validates that features work as specified
- Includes smoke, sanity, regression testing

**Non-Functional Testing:**
- Performance: Speed, scalability, stability
- Security: Vulnerability and penetration testing
- Usability: User experience and interface testing
- Compatibility: Cross-browser, cross-device testing`,
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
        content: `Test automation involves using specialized tools and scripts to execute tests automatically, reducing manual effort and increasing efficiency.

**Benefits of Test Automation:**

- Speed: Tests run faster than manual execution
- Repeatability: Same tests can run multiple times consistently
- Coverage: More tests can be executed in less time
- Reliability: Eliminates human error in test execution
- Cost-Effective: Saves time and resources in the long run

**When to Automate:**

✓ Repetitive tests
✓ Regression test suites
✓ Tests requiring multiple data sets
✓ Tests that run on multiple configurations
✓ Performance and load tests

**Popular Automation Tools:**

- Selenium: Web application testing
- Cypress: Modern web testing framework
- Appium: Mobile application testing
- JUnit/TestNG: Unit testing frameworks
- Postman/Rest-Assured: API testing`,
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
        content: `Following QA best practices ensures consistent quality, efficiency, and professionalism in your testing efforts.

**Communication & Collaboration:**

- Clear Documentation: Maintain comprehensive test documentation
- Stakeholder Communication: Regular updates on quality status
- Team Collaboration: Work closely with developers and product owners
- Feedback Loops: Provide constructive feedback early and often

**Process Best Practices:**

- Early Testing: Shift-left approach - test early in the development cycle
- Continuous Testing: Integrate testing throughout the development process
- Test Data Management: Maintain relevant, up-to-date test data
- Environment Management: Ensure test environments mirror production

**Professional QA Mindset:**

- Detail-Oriented: Notice small inconsistencies
- Analytical Thinking: Understand root causes
- User Advocacy: Think from the user's perspective
- Continuous Learning: Stay updated with new tools and techniques`,
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