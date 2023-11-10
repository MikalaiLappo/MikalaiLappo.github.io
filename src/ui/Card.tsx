import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'

export type ICardProps = {
  link: string
  coverSrc: string
  title: string
  excerpt: string
  className?: string
  children?: ReactNode
  turnOffLink?: boolean // A development thing. I'd make `projects/[slug]` route different from blogposts, but I'm not sure how yet
}
const Card = ({
  link,
  coverSrc,
  title,
  excerpt,
  className,
  children,
  turnOffLink,
}: ICardProps) => {
  return (
    <div
      className={cn(
        'flex flex-col flex-wrap w-full md:w-[320px] md:h-[400px] transition duration-300 items-center  bg-secondary group border-transparent hover:border-[#565166]  border-2 overflow-clip',
        className,
      )}
    >
      <Link href={turnOffLink ? '#' : link} className="w-full h-full">
        <div className="lg:w-[320px] flex items-center md:h-[224px]  max-h-[224px] overflow-hidden">
          <Image
            className="object-cover object-center w-full h-full p-4 transition duration-150 ease-in group-hover:opacity-100 opacity-60"
            width="400"
            height="200"
            src={coverSrc}
            alt={`${title}`}
          />
        </div>
        <div className="flex flex-col h-full p-[18px] pt-[24px] font-bold">
          <div className="text-lg text-white">{title}</div>
          <div className="items-center p-4 text-sm break-word text-secondary h-max line-clamp-3">
            {excerpt}
          </div>
        </div>
        {children}
      </Link>
    </div>
  )
}

export { Card }
export default Card
