import './MiniListItem.css';
import Avatar from '@mui/material/Avatar';

function MiniListItem(props) {
  return (
    <div className='MiniListItem'>
      <Avatar alt={props.img_alt} src={props.img}/>
      <div className='MiniListItem-text'>
        <h6 className='MiniListItem-title'>{props.title}</h6>
        <p className='MiniListItem-date'>{props.date}</p>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default MiniListItem;