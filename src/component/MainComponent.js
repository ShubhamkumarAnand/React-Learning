import React from 'react'
import '../App.css'

export default function MainComponent() {
  return (
    <main>
      <h1 className='main--header'>Fun facts about React</h1>
      <ul className='main--facts'>
        <li className='main--points'>Was first created in 2013</li>
        <li className='main--points'>Was first created by Jordan Walkie</li>
        <li className='main--points'>Has over 100k stars in Github</li>
        <li className='main--points'>Is maintained by facebook</li>
        <li className='main--points'>Power thousand of enterprise app including mobile app</li>
      </ul>
    </main>
  )
}