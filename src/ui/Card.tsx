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
        'flex flex-col flex-wrap w-full lg:w-[320px] lg:h-[400px] transition duration-300 items-center  bg-secondary rounded-3xl group hover:border-[#565166] border-transparent border-2 overflow-clip',
        className,
      )}
    >
      <Link href={link} className="w-full h-full">
        <div className="lg:w-[320px] lg:h-[224px] max-h-[224px] rounded-md overflow-hidden">
          <Image
            className="object-cover object-center w-full h-full transition duration-150 ease-in rounded group-hover:-rotate-3 group-hover:scale-110 group-hover:opacity-100 opacity-60"
            width="400"
            height="200"
            src={coverSrc}
            alt={`${title}`}
          />
        </div>
        <div className="flex flex-col h-full p-[18px] pt-[24px] font-bold">
          <div className="text-lg text-white">{title}</div>
          <div className="items-center text-sm break-all text-secondary h-max line-clamp-2">
            {excerpt}
          </div>
        </div>
      </Link>
    </div>
  )
}
export default Card
