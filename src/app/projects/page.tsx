import Card from '@/ui/Card'
import BoxFall from '@/minigames/BoxFall'
import { allProjects } from 'contentlayer/generated'

const ProjectsPage = async () => {
  const projects = allProjects

  return (
    <div className="flex flex-col justify-center space-y-8 md:space-y-0 md:flex-row md:space-x-6">
      {projects.map(({ link, cover, title, excerpt }, i) => (
        <Card
          className="m"
          key={link + i}
          link={link}
          coverSrc={cover}
          title={title}
          excerpt={excerpt}
        />
      ))}
    </div>
  )
}

export default ProjectsPage
