import Image from 'next/image'
import { useMDXComponent } from 'next-contentlayer/hooks'

import cn from 'classnames'
import { Callout } from './Callout'
import Card from '../Card'
import { List, OrderedList } from 'dracula-ui'
import { BlogPost, Project } from 'contentlayer/generated'
import Link from 'next/link'

const components: {
  [key: string]: (args: any) => {} | any
} = {
  h1: ({ className, ...props }) => (
    <h1
      className={cn(
        'p-8 text-dracula-cyan text-4xl font-bold tracking-tight',
        className,
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }) => (
    <h2
      className={cn(
        'my-10 scroll-m-20 border-b text-3xl font-semibold tracking-tight first:mt-0',
        className,
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }) => (
    <h3
      className={cn(
        'mt-8 scroll-m-20 text-2xl font-semibold tracking-tight',
        className,
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }) => (
    <h4
      className={cn(
        'mt-8 scroll-m-20 text-xl font-semibold tracking-tight',
        className,
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }) => (
    <h5
      className={cn(
        'mt-8 scroll-m-20 text-lg font-semibold tracking-tight',
        className,
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }) => (
    <h6
      className={cn(
        'mt-8 scroll-m-20 text-base font-semibold tracking-tight',
        className,
      )}
      {...props}
    />
  ),
  a: ({ className, ...props }) => (
    <Link
      target="_blank"
      className={cn('font-medium underline underline-offset-4', className)}
      {...props}
    />
  ),
  p: ({ className, ...props }) => (
    <p className={cn('leading-7', className)} {...props} />
  ),
  ul: ({ className, ...props }) => (
    <List
      color="purple"
      variant="unordered"
      className={cn('p-4', className)}
      {...props}
    />
  ),
  ol: ({ className, ...props }) => (
    <OrderedList color="red" className={cn('p-4', className)} {...props} />
  ),
  li: ({ className, ...props }) => (
    <li className={cn('py-2 ', className)} {...props} />
  ),
  blockquote: ({ className, ...props }) => (
    <blockquote
      className={cn(
        'mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground',
        className,
      )}
      {...props}
    />
  ),
  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={cn('rounded-md border', className)} alt={alt} {...props} />
  ),
  hr: ({ ...props }) => <hr className="my-4 md:my-8" {...props} />,
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="w-full my-6 overflow-y-auto">
      <table className={cn('w-full', className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn('m-0 border-t p-0 even:bg-muted', className)}
      {...props}
    />
  ),
  th: ({ className, ...props }) => (
    <th
      className={cn(
        'border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right',
        className,
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }) => (
    <td
      className={cn(
        'border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right',
        className,
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }) => (
    <pre
      className={cn('overflow-x-auto rounded-lg bg-black ', className)}
      {...props}
    />
  ),
  code: ({ className, ...props }) => (
    <code className={cn('p-2', className)} {...props} />
  ),
  Image,
  Callout,
  Card,
}

interface MdxProps {
  code: string
  data: BlogPost | Project
}

export function Mdx({ code, data }: MdxProps) {
  const Component = useMDXComponent(code)

  return (
    <div className="flex justify-center">
      <div className={cn('container flex flex-col p-8 pt-2 text-calm')}>
        <div className="p-2 sm:p-8">
          <h1 className="text-4xl font-bold tracking-tight text-attention">
            {data.title}
          </h1>
          <h2 className="p-4 text-xl">{data.excerpt}</h2>
        </div>
        <Component components={components} />
      </div>
    </div>
  )
}
