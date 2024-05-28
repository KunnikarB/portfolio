import React from 'react';
import developer_image from '../../assets/profile.jpg';
import './Home.css';
import { NavLink } from 'react-router-dom';



const Home = () => {
  return (
    <div className='hero'>
      <img src={developer_image} alt="woman developer image" />
      <h1><span>Hi, I am Kunnikar Boonbunlu</span></h1>  <h2>Front-end developer based in Stockholm, Sweden. </h2>
      <p>I am passionate about creating beautiful and functional websites. I am currently looking for a new role as a Front-end developer. </p>
        <div className='hero-action'>
          <NavLink to='/Portfolio' className='hero-connect'> My Lastes projects </NavLink>
          <NavLink to='/Testimonials' className='hero-resume'> Testimonials </NavLink>  
        </div>

    </div>
  );
};

export default Home;