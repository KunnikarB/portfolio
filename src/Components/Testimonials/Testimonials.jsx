import React from 'react';
import { IoIosStar } from 'react-icons/io';
import { GoCodeOfConduct } from 'react-icons/go';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <>
    <h2 id='testimonials'><GoCodeOfConduct /> Testimonials </h2>
    <div className='container'>
      
    <div className='about-testimonials'>
      <div className='about-testimonial'>
        <p> "I was very impressed with the quality of work and the quick turnaround time. I would recommend her to anyone looking for a professional web developer."  </p>
        <h3><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /> Thomas Falck </h3>
      </div>
      <div className='about-testimonial'>
        <p> "She is a very talented developer who is very professional and easy to work with. I would highly recommend her for any web development project." </p>
        <h3><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /> Bruno Björn </h3>
      </div>
      </div>
    </div>
    </>
  )
}

export default Testimonials