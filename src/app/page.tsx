import Card from '@/ui/Card'
import BoxFall from '@/minigames/BoxFall'
import { allDocs } from 'contentlayer/generated'

const HomePage = async () => {
  const [projects, posts] = ['projects', 'posts'].map((type) =>
    allDocs.filter(({ contentType }) => contentType === type),
  )

  return (
    <div className="flex flex-col flex-wrap justify-center max-w-5xl gap-6 md:flex-row ">
      {projects.map(({ link, cover, title, excerpt }, i) => (
        <Card
          key={title + i}
          link={link}
          coverSrc={cover}
          title={title}
          excerpt={excerpt}
        />
      ))}
    </div>
  )
}

export default HomePage
