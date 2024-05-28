
import './Footer.css';
import logo from '../../assets/logo.jpg';
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-top'>
          <img src={logo} alt='logo' />
          <p >KB Creative Developer.</p> 
      </div>
        <hr />

        <div className='footer-bottom'>
         
            <p className='footer-bottom-left'>© 2024 KunnikarB All rights reserved</p>
          
            <div className='footer-bottom-right'>
              <a href='https://www.linkedin.com/in/kunnikar/'><FaLinkedinIn /></a>
              <a href='https://github.com/KunnikarB'><FaGithub /></a>
              <a href='https://www.instagram.com/kunnikar_b/'><FaInstagram /></a>
            </div>
 
        </div>

      </div> 
  );
}

export default Footer