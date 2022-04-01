import React from 'react';
import ReactLogo from '../images/react-logo.png'
import '../App.css'

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <img className="nav-img" src={ReactLogo} alt='react-logo' />
        <ul className="nav-bar">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}