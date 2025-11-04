// 使用客户端渲染模式（Next.js 13+ 特性）
// 这个组件将在客户端执行，可以使用 React 状态和事件处理
'use client'

// 导入必要的依赖
import * as React from 'react'  // React 核心库
import { GithubLogo } from '@phosphor-icons/react'  // GitHub 图标组件
import Link from 'next/link'  // Next.js 的客户端导航链接组件

// 定义 GitHub 仓库链接组件
export function GithubRepo() {
  return (
    // 使用 Next.js 的 Link 组件实现客户端导航
    <Link
      href="https://github.com/zshixinzshixin/MP1"  // 目标 GitHub 仓库地址
      target="_blank"        // 在新标签页打开链接
      rel="noopener noreferrer nofollow"  // 安全性和 SEO 相关属性
      // Tailwind CSS 样式类：
      className="text-md group flex flex-row items-center justify-start font-medium transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      // - text-md: 中等字体大小
      // - group: 创建分组上下文，用于子元素悬停效果
      // - flex flex-row: 弹性布局，水平排列
      // - items-center: 垂直居中对齐
      // - justify-start: 水平左对齐
      // - font-medium: 中等字重
      // - transition: 添加过渡动画效果
      // - hover:text-teal-500: 悬停时变为蓝绿色
      // - dark:text-zinc-200: 深色模式下使用锌色200
      // - dark:hover:text-teal-500: 深色模式下悬停时变为蓝绿色
    >
      {/* GitHub 图标 */}
      <GithubLogo 
        size={18}           // 图标大小 18px
        weight="duotone"    // 图标样式：双色调
      />
      
      {/* 屏幕阅读器专用文本 - 为无障碍访问设计 */}
      <span className="sr-only">
        Github Repo  // 只有屏幕阅读器会读取这个文本，视觉上隐藏
      </span>
    </Link>
  )
}