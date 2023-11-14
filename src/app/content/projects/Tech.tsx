import Image from 'next/image'
import { Project } from 'contentlayer/generated'

const pathLogo = (s: string) =>
  `https://skillicons.dev/icons/?i=${s.replace(/\./g, '').toLowerCase()}`

const Tech = ({
  progLanguages,
  frameworks,
}: {
  progLanguages: Project['progLanguages']
  frameworks: Project['frameworks']
}) => {
  return (
    <div className="flex flex-wrap w-full space-x-3">
      {(progLanguages.concat((frameworks || []) as any[]) as string[]).map(
        (pl) => (
          <Image
            className="pt-2"
            key={pl}
            width={30}
            height={30}
            src={pathLogo(pl)}
            alt={pl}
          />
        ),
      )}
    </div>
  )
}
export default Tech
