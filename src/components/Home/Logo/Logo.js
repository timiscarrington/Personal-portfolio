
import LogoT from '../../../assets/images/My project-1 (2).png'
import './Logo.scss'

const Logo = () => {
 
  return (
    <div className='logo-container' >
        <img className='solid-logo'src={LogoT} alt="logo"/>
    </div>
  )
}

export default Logo