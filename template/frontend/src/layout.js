import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='w-full min-h-screen bg-selphDark'>
        {children}
    </div>
  )
}

export default Layout