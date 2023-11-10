import { notFound } from 'next/navigation'
import { Mdx } from './Mdx'
import {
  BlogPost,
  Project,
  allBlogPosts,
  allProjects,
} from 'contentlayer/generated'

type TContentDomain = 'blog' | 'projects'
const getDocFromParams = async (domain: TContentDomain, slug: string) => {
  const content = domain === 'blog' ? allBlogPosts : allProjects
  // Some kind of a bug? TS doesn't seem to spit any error/warning, yet Next.js build fails
  // maybe something related to `Contentlayer` "linking" during bulid time
  const doc = (content as any).find((doc: any) => doc.link.endsWith(slug))

  if (!doc) return notFound()

  // manual `as` because of the bug above. still type-safe
  return doc as Project | BlogPost
}

type IStaticContentProps = { params: any }
const StaticContent =
  (domain: TContentDomain) =>
  async ({ params: { slug } }: IStaticContentProps) => {
    const doc = await getDocFromParams(domain, slug)

    return <Mdx data={doc} code={doc.body.code} />
  }
export default StaticContent
