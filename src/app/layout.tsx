import './globals.css'
import 'dracula-ui/styles/dracula-ui.css'
import { Inter } from 'next/font/google'
import cn from 'classnames'
import { GithubIcon } from 'lucide-react'
import { NavLink } from '@/ui/nav/NavBarLink'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, 'bg-alt drac-scrollbar-grey')}>
        <div className="flex justify-center w-full">
          <div className="flex flex-col items-center w-full">
            <header className="fixed z-50 flex items-center justify-center w-full h-12 py-3 overflow-hidden text-sm  duration-200 border-b-[1px] border-black shadow bg-alt">
              <div className="flex items-center justify-between w-full h-full max-w-6xl px-6">
                <div className="w-full">
                  <NavLink href="/">About</NavLink>
                </div>
                <div className="flex justify-center w-full space-x-6">
                  {[
                    { ph: 'Notes', href: '/notes' },
                    { ph: 'Projects', href: '/projects' },
                    { ph: 'Haxxed', href: '/haxxed' },
                  ].map(({ ph, href }, i) => (
                    <NavLink key={href} href={href}>
                      {ph}
                    </NavLink>
                  ))}
                </div>
                <div className="flex justify-end w-full">
                  <NavLink
                    target="_blank"
                    href="https://github.com/MikalaiLappo/mikalailappo.github.io"
                  >
                    <GithubIcon
                      className="hover:stroke-white stroke-secondary"
                      size="18"
                    />
                  </NavLink>
                </div>
              </div>
            </header>
            <main className="w-full max-w-6xl mt-16">{children}</main>
          </div>
        </div>
      </body>
    </html>
  )
}
