import React from 'react'
import ReactLogo from '../images/react-logo.png'
import '../App.css'

export default function Navbar() {
  return (
    <nav className='nav'>
      <img src={ ReactLogo } alt='react-logo' width="40" />
      <h3>ReactFacts</h3>
      <h4>React course - Project 1</h4>
    </nav>
  )
}