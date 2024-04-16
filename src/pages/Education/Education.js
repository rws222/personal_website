import './Education.css';
import Page from "../../components/Page/Page.js";
import ListItem from '../../components/ListItem/ListItem.js';
import MiniListItem from '../../components/MiniListItem/MiniListItem.js';
import CourseworkTabs from '../../components/CourseworkTabs/CourseworkTabs';
import Chip from '@mui/material/Chip';

// leadership
const HKN_logo = require('../../images/Eta_Kappa_Nu_shield.png');
const IEEE_logo = require('../../images/IEEE_Logo.jpg');
const Tea_club_logo = require('../../images/Tea_Club_Logo.png');
const Res_life_logo = require('../../images/Res_Life_Logo.jpg');

// achievements
const Lehigh_logo = require('../../images/Lehigh-logo-white.png');
const Tau_beta_pi_logo = require('../../images/Tau-beta-pi-logo.png');
const Six_sigma_Ybelt_logo = require('../../images/Six_sigma_Ybelt_logo.png')

function Projects(props) {
  return (
    <Page id="Education" header="Education">
      <ListItem
        title="M.S. Computer Science"
        subtitle="Lehigh University"
        date="June 2022 - May 2023"
        gpa="4.00"
        description="Presidential Scholarship"
        tag='Free tuition for one year following undergraduate studies.'
      />
      <ListItem
        title="B.S. Computer Engineering"
        subtitle="Lehigh University"
        date="August 2018 - May 2022"
        gpa="3.85"
        description="Highest Honors"
      />
      <ListItem
        title="B.S. I.B.E. Finance"
        subtitle="Lehigh University"
        date="August 2018 - May 2022"
        gpa="3.85"
        description="Highest Honors"
      />
      <p className="Education-description">At Lehigh, I was a student in the University's <span className='Education-IBE-highlight'><a href='https://ibe.lehigh.edu' target="_blank" rel="noreferrer">Integrated Business and Engineering (IBE) Honors Program</a></span>, a highly selective and rigoruos curriculum that awards each student an AACSB-accredited business degree in their major of choice (e.g. Finance). </p>
      <h3>Coursework</h3>
      <p className='Education-coursework-subtitle'>(Hover over course names for more detail.)</p>
      <CourseworkTabs />
      <h3>Skills</h3>
      <div className='Education-skills-container'>
        <div>
          <div className='Education-skills-chip-wrapper'>
            <Chip label="Python" className='skill-1'/>
            <Chip label="HTML/CSS" className='skill-1'/>
            <Chip label="C/C++" className='skill-2'/>
            <Chip label="SQL" className='skill-2'/>
            <Chip label="Java" className='skill-2'/>
            <Chip label="JavaScript" className='skill-2'/>
            <Chip label="TypeScript" className='skill-2'/>
            <Chip label="React" className='skill-2'/>
            <Chip label="Verilog" className='skill-2'/>
            <Chip label="MATLAB" className='skill-3'/>
            <Chip label="Less" className='skill-3'/>
          </div>
        </div>
        <div>
          <div className='Education-skills-chip-wrapper'>
            <Chip label="MS Office Apps" className='skill-1'/>
            <Chip label="Figma" className='skill-1'/>
            <Chip label="MS Excel" className='skill-2'/>
            <Chip label="Adobe Illustrator" className='skill-2'/>
            <Chip label="LabVIEW" className='skill-3'/>
            <Chip label="Minitab" className='skill-3'/>
            <Chip label="PSpice" className='skill-3'/>
          </div>
        </div>
      </div>
      <div className='Education-lead-ach-row'>
        <div className='Education-lead-ach-item Education-lead'>
          <h3>Leadership</h3>
          <div className='Education-mini-list'>
            <MiniListItem
              title="President, IEEE - Eta Kappa Nu Engineering Honor Society"
              date="March 2021 - May 2022"
              img={HKN_logo}
              img_alt="HKN Logo"
              description="Treasurer from March 2020 - March 2021."
            />
            <MiniListItem
              title="Vice President, IEEE (Electrical & Computer Engineering Society) Student Branch"
              date="March 2020 - May 2022"
              img={IEEE_logo}
              img_alt="IEEE Logo"
              description=""
            />
            <MiniListItem
              title="Co-Founder & Treasurer, Lehigh Tea Club"
              date="February 2020 - May 2022"
              img={Tea_club_logo}
              img_alt="Lehigh Tea Club Logo"
              description=""
            />
            <MiniListItem
              title="Vice President, Residence Hall Council"
              date="September 2019 - May 2020"
              img={Res_life_logo}
              img_alt="Lehigh Residence Life Logo"
              description=""
            />
          </div>
        </div>
        <div className='Education-lead-ach-item'>
          <h3>Achievements</h3>
          <div className='Education-mini-list'>
            <MiniListItem
              title="Presidential Scholarship"
              date="Awarded May 2022"
              img={Lehigh_logo}
              img_alt="Lehigh Logo"
              description="Free tuition up to one year following undergraduate graduation. Awarded for earning above a 3.75 cumulative GPA."
            />
            <MiniListItem
              title="Member, Tau Beta Pi (Engineering Honor Society)"
              date="November 2020 - May 2022"
              img={Tau_beta_pi_logo}
              img_alt="Tau Beta Pi Logo"
              description="Top eigth of engineering class invited."
            />
            <MiniListItem
              title="Six Sigma Yellow Belt"
              date="Awarded December 2019"
              img={Six_sigma_Ybelt_logo}
              img_alt="Six Sigma Yellow Belt Logo"
              description=""
            />
            <MiniListItem
              title="Dean's List"
              date="6 times"
              img={Lehigh_logo}
              img_alt="Lehigh Logo"
              description=""
            />
          </div>
        </div>
      </div>
    </Page>
  );
}

export default Projects;