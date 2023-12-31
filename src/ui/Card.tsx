import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'

export type ICardProps = {
  link: string
  coverSrc: string
  title: string
  excerpt?: string
  className?: string
  children?: ReactNode
  turnOffLink?: boolean // A development thing. I'd make `projects/[slug]` route different from blogposts, but I'm not sure how yet
}
const Card = ({
  link,
  coverSrc: cover,
  title,
  excerpt,
  className,
  children,
  turnOffLink,
}: ICardProps) => {
  return (
    <div
      className={cn(
        'flex flex-col sm:w-[320px] h-auto min-h-[300px] transition duration-300 items-center bg-secondary group border-transparent hover:border-[#565166]  border-2 overflow-clip',
        className,
      )}
    >
      <Link href={turnOffLink ? '#' : link} className="h-full">
        <div className="lg:w-[320px] flex items-center md:h-[224px] overflow-hidden">
          <Image
            className="object-cover object-center w-full h-full transition duration-150 ease-in group-hover:opacity-100 opacity-60"
            width="400"
            height="200"
            src={cover}
            alt={`${title}`}
          />
        </div>
        <div className="flex flex-col w-full h-auto p-6 font-bold">
          <div className="flex justify-between w-full h-auto ">
            <div className="text-lg text-white">{title}</div>
          </div>
          {!excerpt ? null : (
            <div className="items-center py-4 text-sm break-word text-secondary line-clamp-3">
              {excerpt}
            </div>
          )}
          <div className="h-auto"></div>
        </div>
      </Link>
    </div>
  )
}

export { Card }
export default Card
