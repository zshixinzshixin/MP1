export * from './projects'
export * from './education'
export * from './career'

// personal info
export const name = 'zshixin'
export const headline = 'Be an idealist of an ordinary person.'
export const introduction =
  "Coucou Les Amis! My name is zshixin. I'm from Zhejiang. I’ve been a worker since 2020."
export const email = '2292623017@qq.com'
export const githubUsername = 'zshixinzshixin'

// about page
export const aboutMeHeadline = 'Who Are You and Why Should I Care?'
export const aboutParagraphs = [
  "Coucou Les Amis! My name is zshixin. I'm from Zhejiang. I’ve been a worker since 2020.",
  "I started this blog to share the insights I learn every day.  Most blogs focus on AI and embedded, while others share the worldview and methodology I've learned.",
]

// blog
export const blogHeadLine = "What I've thinking about."
export const blogIntro =
  "I've written something about AI, programming and life."

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'Tiktok',
    icon: 'tiktok',
    href: '1',
  },
  {
    name: 'Bilibili',
    icon: 'bilibili',
    href: 'https://space.bilibili.com/397820240',
  },
]

// https://simpleicons.org/
export const techIcons = [
  'typescript',
  'javascript',
  'supabase',
  'cloudflare',
  'java',
  'oracle',
  'mysql',
  'react',
  'nodedotjs',
  'nextdotjs',
  'prisma',
  'postgresql',
  'nginx',
  'vercel',
  'docker',
  'git',
  'github',
  'visualstudiocode',
  'androidstudio',
  'ios',
  'apple',
  'wechat',
]
