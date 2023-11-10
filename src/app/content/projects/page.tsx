import Card from '@/ui/Card'
import { allProjects } from 'contentlayer/generated'
import { ProjectCard } from './ProjectCard'

const ProjectsPage = async () => {
  const projects = allProjects

  return (
    <>
      {projects.map((props, i) => (
        <ProjectCard key={props.link + i} data={props} />
      ))}
    </>
  )
}

export default ProjectsPage
