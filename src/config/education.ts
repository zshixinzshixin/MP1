// 定义教育经历条目的数据类型
export type EducationItemType = {
    school: string    // 学校名称
    major: string     // 专业名称
    image?: string    // 学校图片（可选字段）
    logo: string      // 学校logo标识
    start: string     // 入学时间/开始时间
    end: string       // 毕业时间/结束时间
}
  
// 教育经历列表数据
export const educationList: Array<EducationItemType> = [
    {
      school: 'jiangsu University',       // 江苏大学
      major: 'Mechatronics Engineering',  // 工商管理硕士
      logo: 'college',                    // 使用college图标
      start: '2019',                      // 2019年入学
      end: '2024'                         // 2024年毕业
    },
]