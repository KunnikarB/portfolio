
import './Resume.css';
import Pattern from '../../assets/theme_pattern.svg';
import education_data from '../../assets/education_data';


const Resume = () => {
  return (
    <div className='services'>
      <div className='services-title'>
        <h1>Resume</h1>
        <img src={Pattern} alt='Pink pattern color' />
      </div>
      <div className='services-container'>
        {education_data.map((edu,index) => {
          return (
            <div className='services-format' key={index}>
              <h3>{edu.r_no}</h3>
              <h2>{edu.r_name}</h2>
              <p>{edu.r_degree}</p>
              <p>{edu.r_date}</p>
              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Resume