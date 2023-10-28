import { Doc } from 'contentlayer/generated'

type IFeedProps = { doc: Doc }
const Feed = ({ doc }: IFeedProps) => {
  return (
    <div>
      <div> {doc.title} </div> <div>{doc.excerpt} </div>
    </div>
  )
}
