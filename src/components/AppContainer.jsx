import React from 'react'
import Header from './Header'

const AppContainer = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="container mb-5">
        {children}
      </main>
    </div>
  )
}

export default AppContainer
