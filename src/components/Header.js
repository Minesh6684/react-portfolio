import {VscListSelection} from 'react-icons/vsc'

const Header = ({classname}) => {
    const getSection = (section) => {
        section.scrollIntoView({behavior: 'smooth'})
    }
  return (
    <div className={`header ${classname}`}>
      <div className="header-logo">MT</div>
      <div className='header-nav'>
        <ul className='header-nav-links'>
            <li onClick={() => getSection(document.getElementById('about'))}>About</li>
            <li onClick={() => getSection(document.getElementById('work'))}>Work</li>
            <li>Resume</li>
        </ul>
        <VscListSelection className='header-nav-listIcon'/>
      </div>
    </div>
  )
}

export default Header
