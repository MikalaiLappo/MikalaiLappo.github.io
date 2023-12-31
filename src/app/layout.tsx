import './globals.css'
import 'dracula-ui/styles/dracula-ui.css'
import { Inter, Roboto } from 'next/font/google'
import cn from 'classnames'
import { NavLink } from '@/ui/nav/NavBarLink'
import Link from 'next/link'
import { AiOutlineMail } from 'react-icons/ai'
import { FaTelegram, FaLinkedin, FaGithub } from 'react-icons/fa'
import { SiCodewars } from 'react-icons/si'

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({
  weight: ['300', '700', '900'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'Mikalai Lappo',
  description: "Mikalai's personal page",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={cn(roboto.className, 'bg-alt drac-scrollbar-grey h-screen')}
      >
        <div className="flex justify-center w-full h-full">
          <div className="flex flex-col items-center justify-between w-full h-full">
            <header
              className={cn(
                'fixed z-50 flex items-center justify-center w-full h-12 py-3 overflow-hidden text-sm  duration-200 border-b-[1px] border-black shadow bg-alt',
                inter.className,
              )}
            >
              <NavDesktop />
              <NavMobile />
            </header>
            <main className="w-full h-auto max-w-6xl p-8">{children}</main>
            <footer className="flex justify-center text-[#fffff5db] text-3xl sm:text-2xl bg-secondary w-full">
              <div className="flex justify-center w-full max-w-6xl px-6 py-5 space-x-6 sm:py-2 sm:justify-end">
                <Link
                  target="_blank"
                  href="https://t.me/MikalaiLappo"
                  className="transition-all hover:text-white"
                >
                  <FaTelegram />
                </Link>
                <Link
                  target="_blank"
                  href="https://create.t3.gg/"
                  className="transition-all hover:text-white"
                >
                  <FaLinkedin />
                </Link>
                <Link
                  target="_blank"
                  href="mailto:mikalailappo@yandex.by"
                  className="transition-all hover:text-white"
                >
                  <AiOutlineMail />
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  )
}

const NavDesktop = () => (
  <div className="items-center justify-between hidden w-full h-full max-w-6xl px-6 sm:flex">
    <div className="w-full">
      <NavLink href="/">About</NavLink>
    </div>
    <div className="flex justify-center w-full space-x-6">
      {[
        /* { ph: 'Blog', href: '/content/blog' }, */
        { ph: 'Projects', href: '/content/projects' },
      ].map(({ ph, href }, i) => (
        <NavLink key={href} href={href}>
          {ph}
        </NavLink>
      ))}
    </div>
    <div className="justify-end hidden w-full sm:flex">
      <NavLink
        className="group"
        target="_blank"
        href="https://github.com/MikalaiLappo/mikalailappo.github.io"
      >
        <FaGithub size={20} />
      </NavLink>
    </div>
  </div>
)

const NavMobile = () => (
  <div className="flex items-center justify-between w-full h-full px-12 sm:hidden">
    <NavLink href="/">About</NavLink>
    {[
      /*{ ph: 'Blog', href: '/content/blog' },*/
      { ph: 'Projects', href: '/content/projects' },
    ].map(({ ph, href }, i) => (
      <NavLink key={href} href={href}>
        {ph}
      </NavLink>
    ))}
    <NavLink
      className="group"
      target="_blank"
      href="https://github.com/MikalaiLappo/mikalailappo.github.io"
    >
      <FaGithub size={20} />
    </NavLink>
  </div>
)
