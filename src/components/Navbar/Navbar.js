import React from 'react'
import './Navbar.css'

const NavbarLink = () => {
  return (
    <div className="navbar-links">
      <div className="link-column">
        <a href="#add">
          <img src={require('../../graphics/add-tool.svg')} alt="plus sign" />
          add
        </a>
      </div>
      <div className="link-column">
        <a href="#message">
          <img src={require('../../graphics/message.svg')} alt="plus sign" />
          message
        </a>
      </div>
      <div className="link-column">
        <a href="#account">
          <img src={require('../../graphics/portrait.svg')} alt="person representing account" />
          account
        </a>
      </div>
      
    </div>
  )
}




export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo"><a href="#easyonline">EASY➤online</a></div>
      <NavbarLink />
    </div>
    
  )
}
