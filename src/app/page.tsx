import Card from '@/ui/Card'
import BoxFall from '@/minigames/BoxFall'
import { allDocs } from 'contentlayer/generated'

const HomePage = async () => {
  const [projects, posts] = ['projects', 'posts'].map((type) =>
    allDocs.filter(({ contentType }) => contentType === type),
  )

  return (
    <main className="flex flex-col flex-wrap justify-center p-4 md:flex-row md:space-x-6">
      {projects.map(({ link, cover, title, excerpt }, i) => (
        <Card
          key={title + i}
          link={link}
          coverSrc={cover}
          title={title}
          excerpt={excerpt}
        />
      ))}
    </main>
  )
}

export default HomePage
