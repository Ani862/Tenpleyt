import React from 'react'
import "../../App.css"

function Header() {
    
  return (
    <header>
        <div className="logo">
            <a href='/'>
               <img src='	https://fakestoreapi.com/icons/logo.png'/>
            </a>
        </div>
        <nav className='menu'>
            <ul className='menu-list'>
                <li className='menu-link'><a href='/'>Home</a></li>
            </ul>
            <ul className='menu-list'>
                <li className='menu-link'><a href='/'>Docs</a></li>
            </ul>
            <ul className='menu-list'>
                <li className='menu-link'><a href='/'>GitHub</a></li>
            </ul>
            <ul className='menu-list'>
                <li className='menu-link'><a href='/'>Buy me a coffee</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header