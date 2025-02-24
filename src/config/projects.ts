// projects
export const projectHeadLine = "What I've done and what I'm doing."
export const projectIntro =
  "I've worked on various project and Hackathons. Most of them are for SCLS Steam Week. "

export type ProjectItemType = {
  name: string
  description: string
  link: { href: string; label: string }
  date?: string
  logo?: string
  category?: string[]
  tags?: string[]
  image?: string
  techStack?: string[]
  gitStars?: number
  gitForks?: number
}

// projects
export const projects: Array<ProjectItemType> = [
  {
    name: 'Final Project Portfolio',
    description: 'Static website portfolio',
    link: { href: 'scls-cs.com', label: 'GitHub Cards' },
    category: ['Website'],
    techStack: ['Next.js', 'TailwindCSS', 'DaisyUI'],
    tags: ['Showcase', 'Portfolio'],
  },
  {
    name: 'Seeking DNA',
    description: '2022 SCLS Hackathon',
    link: { href: 'https://scls-cs.gitbook.io/scls-apcs-lab/lab5-dna', label: 'Hackathon' },
    logo: '/images/icon/aibesttools.png',
    category: ['Hackathon'],
    techStack: ['Python', 'Java'],
    tags: ['Hackathon'],
  },
  {
    name: 'Texas Holdem Poker Judge',
    description: '2024 SCLS Hackathon',
    link: { href: 'https://onecompiler.com/challenges/42yf4n5yn/scls-hackathon', label: 'Hackathon' },
    logo: '/images/icon/bestdirectories.png',
    category: ['Hackathon'],
    techStack: ['Python', 'Java'],
    tags: ['Hackathon'],
  },
]

// activities
export type ActivityItemType = {
  name: string // 活动名称
  description: string // 活动描述
  date: string // 活动时间
  location: string // 活动地点
  link?: string // 可选的外部链接
}

export const activities: Array<ActivityItemType> = [
  {
    name: 'Python Workshop',
    description:
      'Teaching basic Python programming concepts to beginners. Covering variables, control flow, and functions.',
    date: '2024-02-24',
    location: 'Shanghai',
    link: 'https://example.com/python-workshop',
  },
  {
    name: 'AI Ethics Discussion',
    description:
      'A group discussion about the ethical implications of AI development and its impact on society.',
    date: '2024-03-01',
    location: 'Shanghai',
    link: 'https://example.com/ai-ethics',
  },
  {
    name: 'Code Review Session',
    description:
      'Helping students improve their coding skills through peer code review and best practices sharing.',
    date: '2024-03-15',
    location: 'Shanghai',
  },
]
