import { ReactNode } from 'react'

const ContentLayout = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-col justify-center mt-8 space-y-8 md:space-y-0 md:flex-row md:space-x-6">
    {children}
  </div>
)

export default ContentLayout
