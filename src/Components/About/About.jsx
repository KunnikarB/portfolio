
import './About.css'
import Profile from '../../assets/profile.jpg';
import Pattern from '../../assets/theme_pattern.svg';

const About = () => {
  return (
    
    <div className='about'>
      <div className='about-title'>
        <h1>About me</h1>
        <img src={Pattern} alt='pink pattern color' />
      </div>
    
      <div className='about-sections'>
        <div className='about-left'>
          <img src={Profile} alt='woman photo' />
        </div>
      
        <div className='about-right'>
          <div className='about-para'>
            <p> I am a Front-end Developer with a background in Infomation technologies and a passion for creating innovative applications.</p>
            
            <p> I am a quick learner and a team player who is always eager to learn new technologies and work on challenging projects. I am looking for opportunities to work on exciting projects and grow as a developer.</p>
          </div>

          <div className='about-skills'>
            <div className='about-skill'>
              <p> HTML & CSS </p>
              <hr style= {{ width: "50%"}} />
            </div> 

            <div className='about-skill'>
              <p> Bootstrap </p>
              <hr style= {{ width: "60%"}} />
            </div>

            <div className='about-skill'>
              <p> Figma </p>
              <hr style= {{ width: "50%"}} />
            </div>

            <div className='about-skill'>
              <p> JavaScript </p>
              <hr style= {{ width: "60%"}} />
            </div>

            <div className='about-skill'>
              <p> React js</p>
              <hr style= {{ width: "70%"}} />
            </div>
            
            <div className='about-skill'>
              <p> Git & GitHub</p>
              <hr style= {{ width: "60%"}} />
            </div> 
          </div>

        </div>
      </div>
    

    <div className='about-achievements'>
        <div className='about-achievement'>
          <h2> 10+ </h2>
          <p> YEARS OF EXPERIENCE </p>
        </div>
        <hr />

        <div className='about-achievement'>
          <h2> 90+ </h2>
          <p> PROJECTS COMPLETED </p>
        </div>
        <hr />
        <div className='about-achievement'>
          <h2> 150+ </h2>
          <p> HAPPY CLIENTS </p>
        </div>
    </div>
    </div>
  );
};

export default About