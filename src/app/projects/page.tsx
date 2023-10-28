import Card from '@/ui/Card'
import BoxFall from '@/minigames/BoxFall'
import { allDocs } from 'contentlayer/generated'

const ProjectsPage = async () => {
  const projects = allDocs.filter(
    ({ contentType }) => contentType === 'projects',
  )

  return (
    <main className="flex flex-col justify-center p-4 space-y-8 md:space-y-0 md:flex-row md:space-x-6">
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

      <BoxFall />
    </main>
  )
}

export default ProjectsPage
