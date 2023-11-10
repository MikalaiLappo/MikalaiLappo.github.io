import Card, { ICardProps } from '@/ui/Card'
import { Project } from 'contentlayer/generated'

type IProjectCardProps = { data: Project }
const ProjectCard = ({
  data: { progLanguages, frameworks, title, excerpt, cover, link },
}: IProjectCardProps) => {
  return (
    <Card title={title} excerpt={excerpt} coverSrc={cover} link={link}>
      <div>{progLanguages}</div>
    </Card>
  )
}

export { ProjectCard }
