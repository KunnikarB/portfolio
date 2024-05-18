
import './Footer.css';
import logo from '../../assets/logo.jpg';
import user_icon from '../../assets/user_icon.svg';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-top'>
        <div className='footer-top-left'>
          <img src={logo} alt='logo' />
          <p>KB Creative Developer.</p>
        </div>
        <div className='footer-top-right'>
          <div className='footer-email-input'>
            <img src={user_icon} alt='user icon' />
            <input type='email' placeholder='Enter your email' />

          </div>

          <div className='footer-subscribe'>Subscribe</div>

          </div>

        </div>
        <hr />

        <div className='footer-bottom'>
         
            <p className='footer-bottom-left'>© 2024 KunnikarB All rights reserved</p>
          
            <div className='footer-bottom-right'>
              <p>Privacy Policy</p>
              <p>Terms of Service</p>
              <p>Connect with me</p>
            </div>
 
        </div>

      </div> 
  );
}

export default Footer