import './globals.css'
import 'dracula-ui/styles/dracula-ui.css'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import cn from 'classnames'

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
      <body className={cn(inter.className, 'bg-[#0e0d11] drac-scrollbar-grey')}>
        <div className="flex justify-center w-full">
          <div className="flex flex-col items-center w-full">
            <header className="flex justify-between w-full py-3 text-sm transition-shadow duration-200">
              <div className="px-6">
                {[
                  { ph: 'Home', href: '/' },
                  { ph: 'Posts', href: '/posts' },
                  { ph: 'Projects', href: '/projects' },
                ].map(({ ph, href }, i) => (
                  <Link className="px-4 text-white" key={href} href={href}>
                    {ph}
                  </Link>
                ))}
              </div>
            </header>
            <div className="flex">{children} </div>
          </div>
        </div>
      </body>
    </html>
  )
}
