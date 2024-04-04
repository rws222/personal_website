import './Links.css';

function Links(props) {

  const resumeFilePath = require('../../attachments/Resume.pdf');

  return (
    <div className="Links-icons" style={{justifyContent: props.justify}}>
      <a id="resume-link" href={resumeFilePath} title="View my resume" target="_blank" rel="noreferrer">
        <span className="fa-stack" style={{vertical_align: 'top'}}>
          <i className="fa-solid fa-circle fa-stack-2x"></i>
          <i className="Links-icon-subject fa-solid fa-file fa-stack-1x fa-inverse"></i>
        </span>
      </a>
      <a id="linkedin-link" href="https://www.linkedin.com/in/ryanwschmid/" title="Visit my LinkedIn" target="_blank" rel="noreferrer">
        <span className="fa-stack" style={{vertical_align: 'top'}}>
          <i className="fa-solid fa-circle fa-stack-2x"></i>
          <i className="Links-icon-subject fa-brands fa-linkedin-in fa-stack-1x fa-inverse"></i>
        </span>
      </a>
      <a id="github-link" href="https://github.com/rws222" title="Visit my Github" target="_blank" rel="noreferrer">
        <span className="fa-stack" style={{vertical_align: 'top'}}>
          <i className="fa-solid fa-circle fa-stack-2x"></i>
          <i className="Links-icon-subject fa-brands fa-github fa-stack-1x fa-inverse"></i>
        </span>
      </a>
      <a id="email-link" href="mailto:ryan@ryanwschmid.com" title="Send me an email" target="_blank" rel="noreferrer">
        <span className="fa-stack" style={{vertical_align: 'top'}}>
          <i className="fa-solid fa-circle fa-stack-2x"></i>
          <i className="Links-icon-subject fa-solid fa-envelope fa-stack-1x fa-inverse"></i>
        </span>
      </a> 
    </div>
  );
}

export default Links;