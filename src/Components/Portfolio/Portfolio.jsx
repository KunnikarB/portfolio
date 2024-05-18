
import './Portfolio.css';
import Pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';



const  Portfolio = () => {
  return (
    <div className='mywork'>
      <div className='mywork-title'>
        <h1>Portfolio</h1>
        <img src= {Pattern} alt='' />
      </div>

      <div className='mywork-container'>
        { mywork_data.map((work,index) => {
          return (
              <img key={index} src={work.w_img} alt='' />
          )
        })}
      </div>

      <div className='mywork-showmore'>
        <p>Show more</p>
        <img src={arrow_icon} alt='' />
      </div>
    </div>
  );
};

export default Portfolio;