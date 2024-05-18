
import developer_image from '../../assets/profile.jpg';
import './Home.css';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className='hero'>
      <img src={developer_image} alt="woman developer image" />
      <h1><span>Hi, I am Kunnikar Boonbunlu</span>  Front-end developer based in Stockholm, Sweden. </h1>
      <p>I am passionate about creating beautiful and functional websites. I am currently looking for a new role as a Front-end developer. </p>
        <div className='hero-action'>
          <NavLink className='hero-connect'>Connect with me</NavLink>
          <NavLink className='hero-resume'>My resume</NavLink>

        </div>

    </div>
  );
};

export default Home;