import './Sidebar.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoT from '../../assets/images/Tim Carrington (1).png'
import LogoTim from '../../assets/images/Tim Carrington (2).png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faProjectDiagram, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'


const Sidebar = () => (
    <div className="nav-bar">
        <Link className="logo" to="/">
            <img src={LogoT} alt="logo" />
            <img className="sub-logo" src={LogoTim} alt="Tim" />
        </Link>
        <nav>
            <NavLink exact='true' activeclassname="active" to="/" >
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact='true' activeclassname='active' className= "about-link" to="/about" >
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact='true' activeclassname="active" className="portfolio-link" to="/portfolio" >
                <FontAwesomeIcon icon={faProjectDiagram} color="#4d4d4e" />
            </NavLink>
            <NavLink exact='true' activeclassname="active" className="contact-link" to="/contact" >
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/timiscarrington/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/timiscarrington"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        </ul>
    </div>
)

export default Sidebar;