import profileImage from "../img/profile_photo.png"
import {VscTriangleRight} from "react-icons/vsc"

const About = () => {
  return (
    <div className="about" id="about">
      <p className="about-heading">About Me</p>
      <div className="about-description">
        <div className="about-me">
            <p className="about-para">Enthusiasm to convert the skills into useful assets, 
            has lead me to be the robust to my efforts. As a Web-Developer, constant search 
            for excellence has enabled me to be the best in forever learning process. 
            Moreover Books have been companion to me. Beyond that, Web-Development embraces me 
            rendering an opportunity to express myself on web-pages keeping in mind the user-friendly layouts.
            </p>
            <div className="about-skill">
                <p>Prime Technologies I'have been working with</p>
                <div className="about-skill-list">
                    <ul style={{paddingLeft: 0}}>
                        <li style={{paddingLeft: 0}}><VscTriangleRight style={{color: '#63fedb', marginRight: '10px'}}/>React Js</li>
                        <li style={{paddingLeft: 0}}><VscTriangleRight style={{color: '#63fedb', marginRight: '10px'}}/>Node JS</li>
                        <li style={{paddingLeft: 0}}><VscTriangleRight style={{color: '#63fedb', marginRight: '10px'}}/>Javascript</li>
                    </ul>
                    <ul>
                        <li><VscTriangleRight style={{color: '#63fedb', marginRight: '10px'}}/>Python</li>
                        <li><VscTriangleRight style={{color: '#63fedb', marginRight: '10px'}}/>Flask</li>
                        <li><VscTriangleRight style={{color: '#63fedb', marginRight: '10px'}}/>MS SQL</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="profile-photo-section">
            <img className="profile-photo" src={profileImage} alt=""/>
        </div>
      </div>
    </div>
  )
}

export default About
