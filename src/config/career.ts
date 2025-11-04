// 定义职业经历条目的数据类型
export type CareerItemType = {
    company: string   // 公司名称
    title: string     // 职位名称
    image?: string    // 公司图片（可选字段）
    logo: string      // 公司logo标识
    start: string     // 入职时间/开始时间
    end: string       // 离职时间/结束时间
}
  
// 职业经历列表数据，按时间倒序排列（从最近的到最早的）
export const careerList: Array<CareerItemType> = [
    {
      company: 'jiangsu',  // 上海宋庆龄学校
      title: 'worker',            // 计算机科学教师
      logo: 'college',                              // 使用college图标（表示教育机构）
      start: '2024',                                // 2020年入职
      end: 'Present'                                // 至今在职
    },
]