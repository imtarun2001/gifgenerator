import React from 'react'
import Title from './components/Title'
import RandomGif from './components/RandomGif'
import TaggedGif from './components/TaggedGif'
import './App.css'


function App() {

  return (
    <div className='app'>
      <div>
        <Title></Title>
      </div>
      <div>
        <RandomGif></RandomGif>
      </div>
      <div>
        <TaggedGif></TaggedGif>
      </div>
    </div>
  )
}

export default App
