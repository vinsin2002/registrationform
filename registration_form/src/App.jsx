import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
function App(props) {
  return (
    <div className=''>
      <Nav/>
      <Hero path={props.path} />
    </div>
  )
}

export default App