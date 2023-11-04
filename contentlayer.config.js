import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

/** @type{import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  link: {
    type: 'string',
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  cover: {
    type: 'string',
    resolve: (doc) =>
      `/content/${doc._raw.flattenedPath.split('/').slice(0, -1).join('/')}/${
        doc.cover
      }`,
  },
  contentType: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath.split('/').at(0),
  },
}

export const BlogPost = defineDocumentType(() => ({
  name: 'BlogPost',
  filePathPattern: './blog/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    excerpt: {
      type: 'string',
      required: true,
    },
    cover: {
      type: 'string',
      required: true,
    },
  },
  computedFields,
}))

export const ProjectInfo = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: './projects/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    excerpt: {
      type: 'string',
      required: true,
    },
    cover: {
      type: 'string',
      required: true,
    },
    primaryTech: {
      type: 'list',
      of: { type: 'string' },
      required: true,
    },
    secondaryTech: {
      type: 'list',
      of: { type: 'string' },
      required: false,
    },
  },
  computedFields,
}))

export default makeSource({
  contentDirPath: 'src/content',
  documentTypes: [BlogPost, ProjectInfo],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: 'github-dark',
          onVisitLine(node) {
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }]
            }
          },
          onHighlightedLine(node) {
            node.properties.className.push('line--highlighted')
          },
          onHighlightedWord(node) {
            node.properties.className = ['word--highlighted']
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['subheading-anchor'],
            ariaLabel: 'Link to section',
          },
        },
      ],
    ],
  },
})
