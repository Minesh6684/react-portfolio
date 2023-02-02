import { useState } from 'react'

import {VscListSelection} from 'react-icons/vsc'
import {AiOutlineClose} from 'react-icons/ai'

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
      <div className="header-logo">MT</div>
      {menuToggle && <AiOutlineClose className='header-nav-listIcon closeButton' onClick={hideHeaderMenu}/>}
      <div className='responsive-menu'>
        <div className='outside-menu' onClick={hideHeaderMenu}></div>
        <ul className='header-nav-links'>
            <li onClick={() => getSection(document.getElementById('about'))}>About</li>
            <li onClick={() => getSection(document.getElementById('work'))}>Work</li>
            <li>Resume</li>
        </ul>
      </div>
      {!menuToggle && <VscListSelection className='header-nav-listIcon openButton' onClick={showHeaderMenu}/>}
    </div>
  )
}

export default Header
