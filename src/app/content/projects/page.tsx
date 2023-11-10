import Card from '@/ui/Card'
import { allProjects } from 'contentlayer/generated'

const ProjectsPage = async () => {
  const projects = allProjects

  return (
    <>
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
    </>
  )
}

export default ProjectsPage
