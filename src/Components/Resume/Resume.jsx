
import './Resume.css';
import Pattern from '../../assets/theme_pattern.svg';
import education_data from '../../assets/education_data';
import works_data from '../../assets/works_data';
import skills_data from '../../assets/skills_data';
import { PiStudentFill } from "react-icons/pi";
import { SiWorkplace } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";

const Resume = () => {
  return (
    <div className='services'>
      <div className='services-title'>
        <h1>Resume</h1>
        <img src={Pattern} alt='Pink pattern color' />
      </div>
      
      <h2 className='title'><PiStudentFill /> EDUCATION</h2>
      <div className='services-container'>
        {education_data.map((edu,index) => {
          return (
            <div className='services-format' key={index}>
              <h3>{edu.r_name}</h3>
              <h4>{edu.r_degree}</h4>
              <p>{edu.r_date}</p>
              
            </div>
          );
        })}
      </div>
      <h2 className='title'><SiWorkplace /> WORK EXPERIENCE</h2>
      <div className='services-container'>
        {works_data.map((work,index) => {
          return (
            <div className='services-format' key={index}>
              <h3>{work.w_name}</h3>
              <h4>{work.w_employment}</h4>
              <p>{work.w_date}</p>
              
            </div>
          );
        })}
    </div>
    <h2 className='title'><FaLaptopCode /> SKILLS</h2>
      <div className='services-container'>
        {skills_data.map((skill,index) => {
          return (
            <div className='services-format' key={index}>
              <h3>{skill.s_name}</h3>
              <h4>{skill.s_about}</h4>
              
            </div>
          );
        })}
      </div>
  </div>
  );
};

export default Resume