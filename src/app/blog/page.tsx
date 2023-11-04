import Card from '@/ui/Card'
import { allBlogPosts } from 'contentlayer/generated'

const BlogPage = () => {
  const projects = allBlogPosts.filter((d) => d.contentType === 'blog')

  return (
    <div className="flex flex-col justify-center space-y-8 md:space-y-0 md:flex-row md:space-x-6">
      {projects.map(({ link, cover, title, excerpt }, i) => (
        <Card
          className="m"
          key={link + i}
          link={link}
          coverSrc={cover}
          title={title}
          excerpt={excerpt}
        />
      ))}
    </div>
  )
}
export default BlogPage
