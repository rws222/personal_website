import './Skills.css';
import Page from "../../components/Page/Page.js";
import Chip from '@mui/material/Chip';

// TODO: remove

function Skills(props) {
  return (
    <Page id="Skills" header="Skills">
      <div className='Skills-container'>
        <div>
          <h3>Computer</h3>
          <div className='Skills-chip-wrapper'>
            <Chip label="Python" className='skill-1'/>
            <Chip label="C/C++" className='skill-2'/>
            <Chip label="Java" className='skill-3'/>
            <Chip label="JavaScript" className='skill-1'/>
            <Chip label="HTML/CSS" className='skill-1'/>
            <Chip label="React" className='skill-1'/>
            <Chip label="SQL" className='skill-1'/>
            <Chip label="MATLAB" className='skill-1'/>
          </div>
        </div>
        <div>
          <h3>Application</h3>
          <div className='Skills-chip-wrapper'>
            <Chip label="MS Office Apps" className='skill-1'/>
            <Chip label="Figma" className='skill-1'/>
            <Chip label="Adobe Illustrator" className='skill-1'/>
            <Chip label="LabVIEW" className='skill-1'/>
            <Chip label="Minitab" className='skill-1'/>
            <Chip label="JMP" className='skill-1'/>
            <Chip label="PSpice" className='skill-1'/>
          </div>
        </div>
      </div>
    </Page>
  );
}

export default Skills;