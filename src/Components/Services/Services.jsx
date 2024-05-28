import React from 'react';
import './Services.css';
import Pattern from '../../assets/theme_pattern.svg';
import services_data from '../../assets/services_data';

const Services = () => {
  
return (
    <div className='services'>
      <div className='services-title'>
        <h1>My Services</h1>
        <img src={Pattern} alt='Pink pattern color' />
      </div>
      
      <div className='services-container'>
        {services_data.map((services,index) => {
          return (
            <div className='services-format' key={index}>
              <h2>{services.s_name}</h2>
              <p>{services.s_desc}</p>
              
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Services;