import Link from 'next/link'
import './globals.css'
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
      <body className={cn(inter.className, 'bg-[#0e0d11]')}>
        <div className="flex justify-center w-full">
          <div className="flex flex-col max-w-3xl">
            <header className="flex justify-between text-sm transition-shadow duration-200 ">
              <div>
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
            {/* `children` should be wrapped within <main>, prolly */}
            <div>{children} </div>
          </div>
        </div>
      </body>
    </html>
  )
}
