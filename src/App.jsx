import React from 'react'
import { Route } from 'react-router-dom'

// Pages
import { HomePage, UserPage, PostPage } from './pages'

const App = () => {
  return (
    <>
      <Route path="/" exact component={HomePage} />
      <Route path="/user/:userId" exact component={UserPage} />
      <Route path="/post/:postId" exact component={PostPage} />
    </>
  )
}

export default App
