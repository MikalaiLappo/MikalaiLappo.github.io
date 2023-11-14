import { ReactNode } from 'react'

const ContentLayout = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-col flex-wrap items-center justify-center w-full h-auto mt-4 space-y-8 md:space-y-0 md:flex-row md:space-x-8">
    {children}
  </div>
)

export default ContentLayout
