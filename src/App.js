import React from 'react'
import NewPost from './components/NewPost' 
import './style.css'

const App = () => {
  return (
    <>
      <h1>r/cis197</h1>
      <NewPost title={'new post'} depth={3} />
    </>
  )
}

export default App