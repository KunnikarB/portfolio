
import './Navbar.css';
import logo from '../../assets/logo.jpg';
import { NavLink } from 'react-router-dom';
import menu from '../../assets/menu_open.svg';
import menuClose from '../../assets/menu_close.svg';
import { useRef } from 'react';

const Navbar = () => {
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = '0';
  }

  const closeMenu = () => {
    menuRef.current.style.right = '-350px';
  }

  return (
    <>
    <img className='logo' src={logo} alt='' />
    <div className='navbar'>
      

      <img src={menu} onClick={openMenu} alt=' menu' className='nav-mob-open' />
      
      <nav ref={menuRef} className='nav-menu'>
        <img src={menuClose} onClick={closeMenu} alt=' menu' className='nav-mob-close' />
        <NavLink to='/' > Home </NavLink>

        <NavLink to='/About' > About </NavLink>

        <NavLink to='/Resume'> Resume </NavLink>

        <NavLink to='/Portfolio'> Portfolio </NavLink>
      </nav>
      
      <div className='nav-contact'>
        <NavLink to='/Contact'> Contact </NavLink>
      </div>
      
    </div>
    </>
  );
}

export default Navbar