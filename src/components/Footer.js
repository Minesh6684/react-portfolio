import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi"

const Footer = () => {
  return (
    <footer className="footer p-5 text-white text-center position-relative">
        <div className="social-links">
          <a href="https://github.com/Minesh6684" target='_blank' rel="noreferrer"><FiGithub /></a>
          <a href="https://www.linkedin.com/in/minesh-tandel-5a66bb1b1/" target='_blank' rel="noreferrer"><FiLinkedin /></a>
          <a href="mailto:minesh9174@gmail.com" target='_blank' rel="noreferrer"><FiMail /></a>
        </div>
        <p className="lead">Developed By Minesh Tandel &copy; 2022 </p>
    </footer>
  )
}

export default Footer
