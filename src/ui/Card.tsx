import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

type ICardProps = {
  link: string
  coverSrc: string
  title: string
  excerpt: string
  className?: string
}
const Card = ({ link, coverSrc, title, excerpt, className }: ICardProps) => {
  return (
    <div
      className={cn(
        'flex flex-col max-w-80 max-h-80 items-center md:items-start bg-supp rounded-3xl',
        className,
      )}
    >
      <Link href={link} className="w-full h-full">
        <div>
          <Image
            className="rounded"
            width="3"
            height="200"
            src={coverSrc}
            alt={`[PREVIEW] ${title}`}
          />
        </div>
        <div className="flex flex-col h-full">
          <div className="py-4 text-2xl text-dracula-purple-400">{title}</div>
          <div className="items-center py-1 text-white h-max">{excerpt}</div>
        </div>
      </Link>
    </div>
  )
}
export default Card
