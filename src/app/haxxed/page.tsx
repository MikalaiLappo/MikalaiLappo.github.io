import { List } from 'dracula-ui'
import { Inter, Roboto } from 'next/font/google'
import cn from 'classnames'

const inter = Inter({
  subsets: ['latin'],
})

const HaxxedPage = () => {
  return (
    <div className="text-white">
      <div>
        When bored I hacc websites I visit <br />
        Unforutantly I forget Looking for a CTF team btw
      </div>
      <div>
        <List>
          <li>
            <span className={cn(inter.className, 'font-bold')}>
              PokerChanger
            </span>{' '}
            —{' '}
            <span>
              <span>RFI, RCE (PHP w/ pcntl)</span>
            </span>
          </li>
          <li>
            <span className={cn(inter.className, 'font-bold')}>Defiler</span> —{' '}
            <span>
              <span>SQLi, XSS (users data stolen)</span>
            </span>
          </li>
          <li>
            <span className={cn(inter.className, 'font-bold')}>Reps</span> —{' '}
            <span>
              <span>XSS</span>
            </span>
          </li>
          <li>
            <span className={cn(inter.className, 'font-bold')}>BeonMind</span> —{' '}
            <span>
              <span>IDOR, XSS (users data stolen)</span>
            </span>
          </li>
          <li>
            <span className={cn(inter.className, 'font-bold')}>BeonFun</span> —{' '}
            <span>
              <span>IDOR, XSS</span>
            </span>
          </li>
          <li>
            <span className={cn(inter.className, 'font-bold')}>BeonVip</span> —{' '}
            <span>
              <span>XSS</span>
            </span>
          </li>
          <li>
            <span className={cn(inter.className, 'font-bold')}>
              MatthiasPetursson {/*https://matthiaspetursson.com/dreamofsongs*/}
            </span>{' '}
            —{' '}
            <span>
              <span>XSS</span>
            </span>
          </li>
        </List>
      </div>
    </div>
  )
}

export default HaxxedPage
