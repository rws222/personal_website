import './Home.css';
import { Parallax } from "react-parallax";
import Links from '../../components/Links/Links';
import '../../index.css';
import { scrollToSection } from '../../App.js'

const bkg_pic_lehigh = require("../../images/home-bkg-lehigh.jpg");
const my_headshot = require("../../images/home-my-headshot.jpg");

function Home(props) {
  return (
    <div id='Home'>
      <div className="Home-nav">
        <h1 className="Home-nav-title">RYAN SCHMID</h1>
        <div className="Home-nav-list">
          <div className='Home-nav-accent' />
          <div className="Home-nav-links">
            <p className='nav-link' onClick={() => scrollToSection('Home')}>HOME</p>
            <p className='nav-link' onClick={() => scrollToSection('Experience')}>EXPERIENCE</p>
            <p className='nav-link' onClick={() => scrollToSection('Education')}>EDUCATION</p>
            <p className='nav-link' onClick={() => scrollToSection('Projects')}>PROJECTS</p>
          </div>
          <div className='Home-nav-accent' />
        </div>
      </div> 
      <Parallax
        bgImage={bkg_pic_lehigh}
        bgImageAlt="Background image"
        strength={200}
      >
        <div className='Home-bkg'>
          <div className='Home-bkg-overlay'>
            <div className='Home-center'>
              <img className='Home-headshot' src={my_headshot} alt='Ryan Schmid'/>
              <div className='Home-center-text'>
                <p className="Home-welcome">
                  Welcome
                </p>
                <p className="Home-intro">
                  I'm Ryan, a recent Master's graduate of Lehigh University
                </p>
                <Links justify='left' />
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
}

export default Home;