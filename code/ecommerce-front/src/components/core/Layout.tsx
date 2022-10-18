import React from 'react'
import Navigation from './Navigation'
interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({children}) => {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  )
}

export default Layout
