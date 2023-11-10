import Card from '@/ui/Card'
import { allBlogPosts } from 'contentlayer/generated'

const BlogPage = () => {
  const projects = allBlogPosts.filter((d) => d.contentType === 'blog')

  return (
    <>
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
    </>
  )
}
export default BlogPage
