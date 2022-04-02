import React from 'react'
import ReactLogo from '../images/react-logo.png'
import '../App.css'

export default function Navbar() {
  return (
    <nav>
      <img src={ ReactLogo } alt='react-logo' width="40" className='nav--img'/>
      <h3 className='nav--logo_text'>ReactFacts</h3>
      <h4 className='nav--title'>React course - Project 1</h4>
    </nav>
  )
}