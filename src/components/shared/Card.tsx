// 导入必要的依赖
import Link from 'next/link'  // Next.js 客户端导航链接
import clsx from 'clsx'       // CSS 类名合并工具
import { ChevronRightIcon } from 'lucide-react'  // 右箭头图标

// 主 Card 组件 - 采用泛型设计，支持多种 HTML 元素类型
export function Card<T extends React.ElementType = 'div'>({
  as,           // 自定义渲染元素类型，默认为 'div'
  className,    // 自定义 CSS 类名
  children,     // 子内容
}: Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'className'> & {
  as?: T
  className?: string
}) {
  // 确定要渲染的组件类型，默认为 'div'
  let Component = as ?? 'div'

  return (
    <Component
      // 使用 clsx 合并类名，支持条件类名
      className={clsx(
        className, 
        'group relative flex flex-col items-start'  // 基础样式：相对定位、弹性列布局、左对齐
      )}
    >
      {children}
    </Component>
  )
}

// Card 链接组件 - 提供可点击的卡片区域
Card.Link = function CardLink({
  children,
  ...props  // 接收所有 Link 组件的属性
}: React.ComponentPropsWithoutRef<typeof Link>) {
  return (
    <>
      {/* 悬浮背景效果层 */}
      <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 transition group-hover:scale-100 sm:-inset-x-6 sm:rounded-2xl group-hover:bg-muted/50" />
      {/* Next.js 链接组件 */}
      <Link {...props}>
        {/* 扩大点击区域的透明覆盖层 */}
        <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
        {/* 实际内容容器 */}
        <span className="relative z-10">{children}</span>
      </Link>
    </>
  )
}

// Card 标题组件 - 支持内部链接
Card.Title = function CardTitle<T extends React.ElementType = 'h2'>({
  as,      // 自定义标题元素类型，默认为 'h2'
  href,    // 可选链接地址
  children,
}: Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'href'> & {
  as?: T
  href?: string
}) {
  let Component = as ?? 'h2'

  return (
    <Component className="text-base font-semibold tracking-tight">
      {/* 如果有链接，则包装在 Card.Link 中 */}
      {href ? <Card.Link href={href}>{children}</Card.Link> : children}
    </Component>
  )
}

// Card 描述组件 - 显示辅助文本
Card.Description = function CardDescription({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <p className="relative z-10 mt-2 text-sm text-muted-foreground">
      {children}
    </p>
  )
}

// Card 操作提示组件 - 显示可操作指示（通常带箭头）
Card.Cta = function CardCta({ children }: { children: React.ReactNode }) {
  return (
    <div
      aria-hidden="true"  // 对屏幕阅读器隐藏，因为只是视觉提示
      className="relative z-10 mt-4 flex items-center text-sm font-medium text-primary"
    >
      {children}
      {/* 右箭头图标 */}
      <ChevronRightIcon className="ml-1 h-4 w-4 stroke-current" />
    </div>
  )
}

// Card  eyebrow 组件 - 显示辅助信息（如分类、日期等）
Card.Eyebrow = function CardEyebrow<T extends React.ElementType = 'p'>({
  as,
  decorate = false,  // 是否显示左侧装饰线
  className,
  children,
  ...props
}: Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'decorate'> & {
  as?: T
  decorate?: boolean
}) {
  let Component = as ?? 'p'

  return (
    <Component
      className={clsx(
        className,
        'relative z-10 order-first mb-3 flex items-center text-sm text-muted-foreground',
        decorate && 'pl-3.5',  // 如果有装饰线，添加左内边距
      )}
      {...props}
    >
      {/* 可选的左侧装饰线 */}
      {decorate && (
        <span
          className="absolute inset-y-0 left-0 flex items-center"
          aria-hidden="true"
        >
          <span className="h-4 w-0.5 rounded-full bg-muted-foreground/30" />
        </span>
      )}
      {children}
    </Component>
  )
}