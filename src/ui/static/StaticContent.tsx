import { notFound } from 'next/navigation'
import { Mdx } from './Mdx'
import { allBlogPosts, allProjects } from 'contentlayer/generated'

type TContentDomain = 'blog' | 'projects'
const getDocFromParams = async (domain: TContentDomain, slug: string) => {
  const content = domain === 'blog' ? allBlogPosts : allProjects
  const doc = content.find((doc) => doc.link.endsWith(slug))

  if (!doc) return notFound()

  return doc
}

type IStaticContentProps = { params: any }
const StaticContent =
  (domain: TContentDomain) =>
  async ({ params: { slug } }: IStaticContentProps) => {
    const doc = await getDocFromParams(domain, slug)

    return <Mdx data={doc} code={doc.body.code} />
  }
export default StaticContent
