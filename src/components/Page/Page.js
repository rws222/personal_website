import './Page.css';

function Page(props) {
  return (
    <div id={props.id} className='Page'>
      <h2 className='Page-header'>{props.header}</h2>
      <div className='Page-heading-accent-container'>
        <div className='Page-heading-accent' />
      </div>
      <div className='Page-children-container'>
        {props.children}
      </div>
    </div>
  );
}

export default Page;