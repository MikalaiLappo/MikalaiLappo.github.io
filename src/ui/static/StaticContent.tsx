import { allDocs } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { Mdx } from './Mdx'

const getDocFromParams = async (slug: string) => {
  const doc = allDocs.find((doc) => doc.link.endsWith(slug))
  if (!doc) return notFound()

  return doc
}

type IStaticContentProps = { params: { slug: string } }
const StaticContent = async ({ params: { slug } }: IStaticContentProps) => {
  const doc = await getDocFromParams(slug)

  return <Mdx code={doc.body.code} />
}
export default StaticContent
