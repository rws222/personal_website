import './ListItem.css';
import Tooltip from '@mui/material/Tooltip';

function ListItem(props) {
  return (
    <div className="ListItem">
      <div className="ListItem-text-wrap">
        <h3 className="ListItem-title">{props.title}</h3>
        <h5 className="ListItem-date">{props.date}</h5>
      </div>
      <div className="ListItem-text-wrap">
        <h4 className="ListItem-subtitle">{props.subtitle}</h4>
        <h5 className="ListItem-gpa">GPA: {props.gpa}/4</h5>
      </div>
      <div className="ListItem-text-wrap">
        <p className='ListItem-description'><Tooltip title={props.tag} placement='right' arrow>{props.description}</Tooltip></p>
      </div>
    </div> 
  );
}

export default ListItem;