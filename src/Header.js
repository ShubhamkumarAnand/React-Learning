import React from 'react';
import './App.css'

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <img className="nav-img" src="./logo512.png" alt='react-logo' />
        <ul className="nav-bar">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}