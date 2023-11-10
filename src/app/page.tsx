import { Am } from '@/ui/Am'
import cn from 'classnames'
import { Gruppo, Inter, Source_Code_Pro } from 'next/font/google'
import { Roboto } from 'next/font/google'
import { List } from 'dracula-ui'
import Link from 'next/link'

const sourceCodePro = Source_Code_Pro({ subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({
  weight: ['300', '700', '900'],
  subsets: ['latin'],
})

const HomePage = async () => {
  return (
    <div className={cn('flex flex-col text-white mt-16', roboto.className)}>
      <IntroBlock />
      <div className={cn('flex flex-col space-y-12 mt-20')}>
        <SkillsBlock />
        <ContactsBlock />
      </div>
    </div>
  )
}

const ContactsBlock = () => (
  <div>
    <h3 className="text-3xl">Contacts</h3>
    <div className="flex flex-col">
      <div className="p-4">
        You may hit me up on [<i>whatever footer link</i>] to discuss
      </div>
      <div>
        <List className="px-4" variant="unordered" color="green">
          <li>Open source project collaboration</li>
          <li>CTF or Hackathon team-up</li>
          <li>Your hacced website</li>
          <li>Opportunity offer</li>
        </List>
      </div>
    </div>
  </div>
)

const IntroBlock = () => (
  <div className="flex text-center md:text-right">
    <div className="w-full text-2xl">
      <div className="flex flex-col items-center px-8 leading-10">
        This blog supposed to make me look an IT guy
        <div className="mb-1">
          Btw I&apos;m <b>Mikalai</b> the <Am />
        </div>
      </div>
    </div>
  </div>
)
const SkillsBlock = () => (
  <div className={cn('flex flex-col text-lg')}>
    <h3 className="text-3xl">Skills</h3>
    <div className="flex flex-col p-4 space-y-2">
      <div>
        My specialty used to be{' '}
        <Link
          target="_blank"
          href="https://react.dev/"
          className="px-1 transition-all border-b-2 border-blue-500 hover:bg-blue-500"
        >
          React
        </Link>{' '}
        <Link
          target="_blank"
          href="https://redux-toolkit.js.org"
          className="px-1 transition-all border-b-2 hover:bg-dracula-purple-500 border-dracula-purple-500"
        >
          Redux
        </Link>{' '}
        and{' '}
        <Link
          target="_blank"
          href="https://nextjs.org/"
          className="px-1 transition-all border-b-2 hover:bg-dracula-darker-600 border-dracula-darker-600"
        >
          Next.js
        </Link>
      </div>
      <div>
        Lately, I&apos;m leaning towards {'  '}
        <b>FullStack</b>
        {'  '}
        working also with{' '}
        <Link
          target="_blank"
          href="https://expressjs.com/"
          className="px-1 transition-all border-b-2 border-dracula-green-600 hover:text-black hover:bg-dracula-green-600"
        >
          Express.js
        </Link>{' '}
        <Link
          target="_blank"
          href="https://nestjs.com/"
          className="px-1 transition-all border-b-2 border-red-600 hover:text-black hover:bg-red-600"
        >
          Nest.js
        </Link>{' '}
        and{' '}
        <Link
          target="_blank"
          href="https://create.t3.gg/"
          className="px-1 transition-all border-b-2 border-dracula-darker-600 hover:bg-dracula-darker-600"
        >
          T3-Stack
        </Link>
      </div>
    </div>
  </div>
)

export default HomePage
