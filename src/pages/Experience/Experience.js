import './Experience.css';
import Page from "../../components/Page/Page.js";
import Card from "../../components/Card/Card.js";

import EY_logo from "../../images/EY-logo.png";
import Lehigh_logo from "../../images/Lehigh-logo.png";

function Experience(props) {
  return (
    <Page id="Experience" header="Experience">
      <Card 
        image={EY_logo}
        alt='EY logo'
        title='Technology Consulting Intern, Ernst & Young'
        subtitle='June 2021 - August 2021'
        description={`Following my third year of college, I completed a summer internship at Ernst & Young (EY). As a Technology Consulting Intern, I worked with a team of consultants and software engineers to build four websites for an EY client. The majority of my work involved frontend programming and was my first experience with React. The most impactful task I was assigned was building the client's homepage from an image I was given. The client is a global, Fortune 1000 company, so seeing my work presented on their website's homepage was very rewarding. 
        The feedback from my project manager was positive as well, saying the following. 
        "[Ryan] is quick in learning new technologies and skills and does not shy away from challenges…. He also communicates well and [is] very pleasant to work with…. He is a great team player, always ready for new tasks and [to] help out on the project as much as he could. He is able to utilize the resources offered by EY and the immediate team to ramp up his skills quickly. Overall with his positive attitude, cooperative spirit, and quick learning aptitude, Ryan will be a great addition any team."
        `}
      >
        <p>Following my third year of college, I completed a summer internship at Ernst & Young (EY). As a Technology Consulting Intern, I worked with a team of consultants and software engineers to build four websites for an EY client. The majority of my work involved frontend programming and was my first experience with React. The most impactful task I was assigned was building the client's homepage from an image I was given. The client is a global, Fortune 1000 company, so seeing my work presented on their website's homepage was very rewarding.</p>
        <p>The feedback from my project manager was positive as well, saying the following.</p>
        <div className='quote'>
          <i>"[Ryan] is <b>quick in learning</b> new technologies and skills and <b>does not shy away from challenges…</b>. He also <b>communicates well</b> and [is] very pleasant to work with…. He is a great <b>team player</b>, always ready for new tasks and [to] help out on the project as much as he could. He is able to utilize the resources offered by EY and the immediate team to ramp up his skills quickly. Overall with his <b>positive attitude, cooperative spirit, and quick learning aptitude</b>, Ryan will be a <b>great addition to any team</b>."</i>
        </div>
      </Card>
      <Card 
        image={Lehigh_logo}
        alt='Lehigh logo'
        title='Academic Tutor, Lehigh University'
        subtitle='February 2021 - May 2021'
        description="During one semester, I was a tutor for two classes related to my computer engineering major – Intro to Electrical Engineering and Programming and Data Structures. These group tutoring sessions were a great way for me to reinforce my knowledge of the subjects while working on my technical communication skills. It was also rewarding to see the students succeeding with my help. "
      >
        <p>During one semester, I was a tutor for two classes related to my computer engineering major – Intro to Electrical Engineering and Programming and Data Structures. These group tutoring sessions were a great way for me to reinforce my knowledge of the subjects while working on my technical communication skills. It was also rewarding to see the students succeeding with my help. </p>
      </Card>
    </Page>
  );
}

export default Experience;