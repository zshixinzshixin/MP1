// ==================== 网站配置 ====================

// UTM来源跟踪参数，用于网站流量分析
// 当分享此网站链接时，会标记来源为 'derek-portfolio'
export const utm_source = 'derek-portfolio'

// ==================== 导航配置 ====================

// 定义导航项的数据类型
type NavItemType = {
  name: string  // 导航项显示名称
  href: string  // 导航项对应的链接地址
}

// 页脚导航项目配置
export const footerItems: Array<NavItemType> = [
  {
    name: 'Home',     // 首页
    href: '/'         // 根路径
  },
  {
    name: 'About',    // 关于页面
    href: '/about'    // 关于页面路径
  },
  {
    name: 'Projects', // 项目页面
    href: '/projects' // 项目页面路径
  },
  {
    name: 'Blogs',    // 博客页面
    href: '/blogs'    // 博客页面路径
  }
]

// 主导航项目配置（与页脚导航相同）
export const navItems: Array<NavItemType> = [
  {
    name: 'Home',     // 首页
    href: '/'         // 根路径
  },
  {
    name: 'About',    // 关于页面
    href: '/about'    // 关于页面路径
  },
  {
    name: 'Projects', // 项目页面
    href: '/projects' // 项目页面路径
  },
  {
    name: 'Blogs',    // 博客页面
    href: '/blogs'    // 博客页面路径
  }
]