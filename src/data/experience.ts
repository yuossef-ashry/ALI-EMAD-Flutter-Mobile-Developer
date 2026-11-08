export interface ExperienceItem {
  period: string
  organization: string
  role: string
  description: string
  highlights: string[]
}

export const experience: ExperienceItem[] = [
  {
    period: 'Jul 2026 — Present',
    organization: 'Digital Egypt Pioneers Initiative (DEPI)',
    role: 'Cross-Platform Mobile Application Developer · Flutter',
    description:
      'Building practical experience through real-world Flutter applications and an industry-standard capstone project.',
    highlights: [
      'Clean, scalable, maintainable application code',
      'Firebase, REST APIs, Git and GitHub',
      'Clean Architecture and collaborative workflows',
    ],
  },
  {
    period: 'May 2026 — Present',
    organization: 'Route Academy',
    role: 'Mobile App Development · Flutter & Android Native',
    description:
      'Developing mobile apps with modern patterns, integrations, and end-to-end product features.',
    highlights: [
      'Dependency injection and design patterns',
      'Firebase, REST APIs, local storage and Google Maps',
      'Authentication, push notifications and payment services',
      'Git, GitHub and AI-assisted development workflows',
    ],
  },
]

export const education = {
  degree: "Bachelor's Degree in Information Technology",
  institution: 'Borg El Arab Technological University (BATU)',
  faculty: 'Faculty of Industry and Energy Technology',
  specialization: 'Software Engineering',
}
