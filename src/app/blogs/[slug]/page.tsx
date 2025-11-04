// 导入必要的模块和类型
import { type Metadata } from 'next'  // Next.js 的元数据类型
import { notFound } from 'next/navigation'  // Next.js 的 404 导航函数

// 导入自定义工具函数和组件
import { getBlogBySlug } from '@/lib/blogs'  // 根据 slug 获取博客数据的函数
import { getMDXContent } from '@/lib/mdx'    // 将 MDX 内容转换为 React 组件的函数
import { BlogLayout } from '@/components/layout/BlogLayout'  // 博客文章布局组件

// 设置运行时环境，根据环境变量决定使用 Edge Runtime 还是 Node.js Runtime
export const runtime = process.env.NEXT_RUNTIME === 'edge' ? 'edge' : 'nodejs'

// 定义组件参数接口
interface Props {
  params: {
    slug: string  // 从 URL 路径中获取的博客文章标识符
  }
}

// 生成页面元数据的异步函数（Next.js 特性）
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // 根据 slug 获取博客数据
  const blog = await getBlogBySlug(params.slug)
  
  // 如果博客不存在，返回默认元数据
  if (!blog) {
    return {
      title: 'Blog not found',  // 页面标题设置为"博客未找到"
    }
  }

  // 返回博客相关的元数据
  return {
    title: blog.title,        // 使用博客标题作为页面标题
    description: blog.description,  // 使用博客描述作为页面描述
  }
}

// 博客页面主组件
export default async function BlogPage({ params }: Props) {
  // 根据 slug 获取博客数据
  const blog = await getBlogBySlug(params.slug)
  
  // 如果博客不存在，显示 404 页面
  if (!blog) {
    notFound()  // 调用 Next.js 的 404 函数
  }

  // 获取并编译 MDX 内容
  const content = await getMDXContent(params.slug)

  // 渲染博客页面
  return (
    // 使用博客布局组件，并传入博客数据
    <BlogLayout blog={blog}>
      {/* 博客内容区域，使用 Tailwind CSS 样式 */}
      <div className="mt-8 prose dark:prose-invert">
        {content}  {/* 渲染编译后的 MDX 内容 */}
      </div>
    </BlogLayout>
  )
}