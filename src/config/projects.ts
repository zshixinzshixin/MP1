// ==================== 类型定义 ====================

// 定义项目条目的数据类型
export type ProjectItemType = {
  name: string                     // 项目名称
  description: string             // 项目描述
  link: { href: string; label: string }  // 项目链接对象，包含链接地址和显示标签
  tags: string[]                  // 项目技术标签数组
}

// 定义活动/奖项条目的数据类型
export type ActivityItemType = {
  name: string                    // 活动/奖项名称
  description: string            // 详细描述
  date: string                   // 日期（可以是年份或具体日期）
  location: string               // 地点
  link?: string                  // 相关链接（可选字段）
}

// ==================== 奖项与荣誉部分 ====================

// 奖项部分标题
export const awardsHeadLine = "Awards & Honors"
// 奖项介绍文本
export const awardsIntro = "awardIntro"

// 奖项数据数组
export const awards: Array<ActivityItemType> = [
  {
    name: 'xx Award',  // xx奖
    description: '',                    // 描述为空
    date: '2024',                      // 2024年获得
    location: 'xx',        // xx机构颁发
  },
]

// ==================== 研究与项目部分 ====================

// 项目部分标题
export const projectHeadLine = "Research & Projects"
// 项目介绍文本
export const projectIntro = "Academic research and technical projects I've worked on."

// 项目数据数组
export const projects: Array<ProjectItemType> = [
  {
    name: 'Study_Test',       // AI夏令营课程开发
    description: 'emtpy',  // 为高中生开发全面的AI课程
    link: { 
      href: 'https://github.com/zshixinzshixin/Study_Test',  // 课程文档链接
      label: 'View Course'                    // 链接显示文本
    },
    tags: ['Test', 'Study']                 // 项目领域
  },
]

// ==================== 爱好与志愿者活动部分 ====================

// 活动部分标题
export const activitiesHeadLine = "Hobbies & Volunteer"
// 活动介绍文本
export const activitiesIntro = "Personal interests and community contributions."

// 活动数据数组
export const activities: Array<ActivityItemType> = [
  {
    name: 'Study',                  // Python工作坊
    description: 'empty',  // 向初学者教授Python基础
    date: 'xxxx-xx-xx',                      // 具体日期：2024年2月24日
    location: 'zhejiang',                     // 上海
    link: 'https://github.com/zshixinzshixin/Study_Test',  // 工作坊链接
  },
]