import './About.css';
import Page from "../../components/Page/Page.js";

function About(props) {
  return (
    <Page id="About" header="About me">
      <p className="About-description">My name is Ryan Schmid, a recent computer science Master's 
      graduate of Lehigh University. Before my time as a graduate student, I completed two 
      Bachelor's degrees at Lehigh, one in Computer Engineering and the other in Integrated 
      Business and Engineering (IBE) with a major in Finance as part of the university's IBE 
      Honors Program. During my time at Lehigh, I completed a Technology Consulting internship 
      at Ernst & Young (EY). I built this website from scratch using React and a few MUI 
      components as a virtual resume to better showcase my experiences while practicing my web 
      development skills.</p>
    </Page>
  );
}

export default About;