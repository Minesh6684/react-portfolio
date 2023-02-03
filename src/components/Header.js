import { useState } from 'react'

import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi"
import {VscListSelection} from 'react-icons/vsc'
import {AiOutlineClose} from 'react-icons/ai'
import portLogo from '../img/portfolio_logo_transparent.png'

const Header = ({classname}) => {

    const [menuToggle, setMenuToggle] = useState(false)

    const getSection = (section) => {
        section.scrollIntoView({behavior: 'smooth'})
        const headerMenu = document.querySelector('.responsive-menu')
        headerMenu.className = 'responsive-menu'
        setMenuToggle(!menuToggle)
    }

    const showHeaderMenu = () => {
      const headerMenu = document.querySelector('.responsive-menu')
      const outsideMenu = document.querySelector('.outside-menu')
      headerMenu.className += " responsive"
      outsideMenu.className += " outside-responsive"
      setMenuToggle(!menuToggle)
    }

    const hideHeaderMenu = () => {
      const headerMenu = document.querySelector('.responsive-menu')
      const outsideMenu = document.querySelector('.outside-menu')
      headerMenu.className = 'responsive-menu'
      outsideMenu.className = "outside-menu"
      setMenuToggle(!menuToggle)
    }

  

  return (
    <div className={`header ${classname}`}>
      <div className="header-logo"><img src={portLogo} alt="" className='portfolio-logo'/></div>
      {menuToggle && <AiOutlineClose className='header-nav-listIcon closeButton' onClick={hideHeaderMenu}/>}
      <div className='responsive-menu'>
        <div className='outside-menu' onClick={hideHeaderMenu}></div>
        <ul className='header-nav-links'>
            <li onClick={() => getSection(document.getElementById('about'))}>About</li>
            <li onClick={() => getSection(document.getElementById('work'))}>Work</li>
            <li className='header-resume'>Resume</li>
            <div className="social-links-header">
              <a href="https://github.com/Minesh6684" target='_blank' rel="noreferrer"><FiGithub /></a>
              <a href="https://www.linkedin.com/in/minesh-tandel-5a66bb1b1/" target='_blank' rel="noreferrer"><FiLinkedin /></a>
              <a href="mailto:minesh9174@gmail.com" target='_blank' rel="noreferrer"><FiMail /></a>
            </div>
        </ul>
      </div>
      {!menuToggle && <VscListSelection className='header-nav-listIcon openButton' onClick={showHeaderMenu}/>}
    </div>
  )
}

export default Header
