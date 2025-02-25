export type AwardItemType = {
  name: string
  description: string
  date: string
  link?: string
}

export const awards: AwardItemType[] = [
  {
    name: '2024 SCLS Hackathon First Place',
    description: 'Won first place in the school-wide hackathon competition',
    date: '2024',
    link: 'https://example.com/hackathon'
  },
  {
    name: 'Math Olympiad Gold Medal',
    description: 'Achieved gold medal in regional mathematics competition',
    date: '2023'
  }
]
