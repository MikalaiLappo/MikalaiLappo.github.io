import cn from 'classnames'
import { Project } from 'contentlayer/generated'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'
import Tech from './Tech'

const statusColor: { [k in Project['status']]: string } = {
  Job: 'bg-dracula-cyan-500',
  WIP: 'bg-dracula-orange-400',
  Demo: 'bg-dracula-yellow-400',
  Live: 'bg-dracula-green-400',
}

export type IProjectCardProps = {
  link: string
  cover: string
  title: string
  excerpt?: string
  className?: string
  status: Project['status']
  frameworks?: Project['frameworks']
  progLanguages: Project['progLanguages']
}
const ProjectCard = ({
  link,
  cover,
  title,
  excerpt,
  status,
  frameworks,
  progLanguages,
}: IProjectCardProps) => {
  return (
    <div className="flex flex-col sm:w-[320px] h-auto min-h-[300px] transition duration-300 items-center bg-secondary group border-transparent hover:border-[#565166]  border-2 overflow-clip">
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
          <span
            className={cn(
              'flex items-center px-2 text-base -skew-x-12',
              statusColor[status],
            )}
          >
            <span className="inline-block skew-x-12">{status}</span>
          </span>
        </div>
        {!excerpt ? null : (
          <div className="items-center py-4 text-sm break-word text-secondary line-clamp-3">
            {excerpt}
          </div>
        )}
        <div className="h-auto">
          <Tech frameworks={frameworks} progLanguages={progLanguages} />
        </div>
      </div>
    </div>
  )
}

export { ProjectCard }
