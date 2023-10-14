import React from 'react'
import './navbar.css'
import { Link, Element, scroller, scrollSpy } from 'react-scroll'

const Navbar = () => {
  return (
    
    <nav className='navbar'>
        <div className="logo">
            Deodor Portfolio
        </div>
        <div className="link">
            <Link className='linkitem'
                to='home'
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}>Home</Link>
            
            <Link className='linkitem'
                to='aboutme'
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}>AboutMe</Link>
            
            <Link className='linkitem'
                to='portfolio'
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}>Portfolio</Link>
                
             <Link className='linkitem'
                to='contact'
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}>Contact</Link>
        </div>
    </nav>
    
  )
}

export default Navbar
