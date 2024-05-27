import { useState } from 'react';
import './Portfolio.css';
import Pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import { MdExpandMore } from "react-icons/md";




const  Portfolio = () => {


  return (
    <div className='mywork'>
      <div className='mywork-title'>
        <h1>My Projects</h1>
        <img src= {Pattern} alt='' />
      </div>
     
        <div className='mywork-show'>
          { mywork_data.map((work,index) => {
            return (
              <div className='mywork-container'  >
                <h2>{work.w_name}</h2>
                <p>{work.w_desc}</p>
                <p>{work.w_note}</p>
                <p>{work.w_built}</p>
                <div className='mywork-showmore'> 
                <p onClick={work.w_more}>showmore<MdExpandMore /> 
                </p>
                </div>
                <a href={work.w_img_url}><img key={index} src={work.w_img} alt='Link image to my project' title='Click to see my project' /></a>
              </div>
            )
          })}
        </div>
      
      
    </div>
  );
};

export default Portfolio;