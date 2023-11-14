import { Project, allProjects } from 'contentlayer/generated'
import { ProjectCard } from './ProjectCard'

const statusPriority: { [k in Project['status']]: number } = {
  Job: 999,
  Live: 500,
  Demo: 250,
  WIP: 50,
}

const ProjectsPage = async () => {
  const projects = allProjects

  return (
    <>
      {projects
        .sort((a, b) => statusPriority[b.status] - statusPriority[a.status])
        .map((props, i) => (
          <div key={props.link + i} className="pt-8">
            <ProjectCard {...props} />
          </div>
        ))}
    </>
  )
}

export default ProjectsPage
