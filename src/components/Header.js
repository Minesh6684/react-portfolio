import { useState } from 'react'

import {VscListSelection} from 'react-icons/vsc'
import {AiOutlineClose} from 'react-icons/ai'

const Header = ({classname}) => {

    const [menuToggle, setMenuToggle] = useState(false)

    const getSection = (section) => {
        section.scrollIntoView({behavior: 'smooth'})
        const headerMenu = document.querySelector('.header-nav-links')
        headerMenu.className = 'header-nav-links'
        setMenuToggle(!menuToggle)
    }

    const toggleHeaderMenu = () => {
      const headerMenu = document.querySelector('.header-nav-links')
      headerMenu.className === 'header-nav-links' ? headerMenu.className += " responsive" : headerMenu.className = 'header-nav-links'
      setMenuToggle(!menuToggle)
    }

  return (
    <div className={`header ${classname}`}>
      <div className="header-logo">MT</div>
      <div style={{border: '1px solid yellow'}} className='responsive-menu'>
        <div className='outside-menu'></div>
        <ul className='header-nav-links'>
            {menuToggle && <AiOutlineClose className='header-nav-listIcon' onClick={toggleHeaderMenu}/>}  
            <li onClick={() => getSection(document.getElementById('about'))}>About</li>
            <li onClick={() => getSection(document.getElementById('work'))}>Work</li>
            <li>Resume</li>
        </ul>
      </div>
      {!menuToggle && <VscListSelection className='header-nav-listIcon' onClick={toggleHeaderMenu}/>}
    </div>
  )
}

export default Header
