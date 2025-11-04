// 从其他模块导入并重新导出所有内容
// 这样可以集中管理不同类别的配置信息
export * from './projects'      // 导入并导出项目信息
export * from './education'     // 导入并导出教育背景信息  
export * from './career'        // 导入并导出职业经历信息

// ==================== 个人信息部分 ====================
// 个人基本信息配置
export const name = 'zshixin'   // 用户名/姓名
export const headline = 'Be an idealist of an ordinary person.'  // 个人标语/座右铭
export const introduction =     // 个人介绍文本
  "My name is zshixin."
export const email = '2292623017@qq.com'              // 联系邮箱
export const githubUsername = 'zshixinzshixin'        // GitHub用户名

// ==================== 关于页面配置 ====================
export const aboutMeHeadline = 'Who Are You and Why Should I Care?'  // 关于页面标题
export const aboutParagraphs = [  // 关于页面的段落内容数组
  "My name is zshixin. I'm from Zhejiang.",
  "I started this blog to share the insights I learn every day.",
]

// ==================== 博客页面配置 ====================
export const blogHeadLine = "What I've thinking about."  // 博客页面标题
export const blogIntro =                                // 博客介绍文本
  "I've written something about AI, programming and life."

// ==================== 社交媒体链接配置 ====================
// 定义社交媒体链接的数据类型
export type SocialLinkType = {
  name: string      // 平台名称
  ariaLabel?: string // 无障碍标签（可选）
  icon: string      // 图标名称（对应图标库）
  href: string      // 链接地址
}

// 社交媒体链接数组
export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'Tiktok',     // 抖音平台
    icon: 'tiktok',     // 使用tiktok图标
    href: '1',          // 抖音链接（当前为占位符）
  },
  {
    name: 'Bilibili',   // B站平台
    icon: 'bilibili',   // 使用bilibili图标
    href: 'https://space.bilibili.com/397820240',  // B站主页链接
  },
]

// ==================== 技术栈图标配置 ====================
// 使用的技术图标列表（图标来自 https://simpleicons.org/）
export const techIcons = [
  'typescript',        // TypeScript
  'javascript',        // JavaScript
  'supabase',          // Supabase
  'cloudflare',        // Cloudflare
  'java',              // Java
  'oracle',            // Oracle数据库
  'mysql',             // MySQL数据库
  'react',             // React框架
  'nodedotjs',         // Node.js
  'nextdotjs',         // Next.js
  'prisma',            // Prisma ORM
  'postgresql',        // PostgreSQL数据库
  'nginx',             // Nginx服务器
  'vercel',            // Vercel部署平台
  'docker',            // Docker容器
  'git',               // Git版本控制
  'github',            // GitHub
  'visualstudiocode',  // VS Code编辑器
  'androidstudio',     // Android Studio
  'ios',               // iOS系统
  'apple',             // Apple品牌
  'wechat',            // 微信
]