import React from 'react'

const Layout = ({children} : { children: React.ReactNode}) => {
  return (
    <>
    <main className='root'></main>
    
    <div className='root-container'>
        <div className='wrapper'/>
        {children}
      </div>
      </>
  )
}

export default Layout;