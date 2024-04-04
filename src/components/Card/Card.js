import React from 'react';
import { useModal } from '../../ModalContext.js';
import Button from '../../mui_components/Button.js';
import './Card.css';

function Card(props) {
  const { openModal } = useModal();

  const handleCardClick = () => {
    const modalContent = (
      <div>
        <h3 className='Modal-title'>{props.title}</h3>
        <h4 className='Modal-subtitle'>{props.subtitle}</h4>
        {props.children}
      </div>
    );
    const modalBtns = (
      <div>
        {props.button1text && <Button className='Modal-left-btn' href={props.button1link} target="_blank">{props.button1text}</Button>}
        {props.button2text && <Button className='Modal-right-btn' href={props.button2link} target="_blank">{props.button2text}</Button>}
      </div>
    );
    openModal(modalContent, modalBtns);
  };

  return (
      <div className='Card' onClick={handleCardClick}>
        <div className='Card-img-wrapper'>
          <img className='Card-img' src={props.image} alt={props.alt} />
        </div>
        <div className='Card-content'>
          <div className='Card-content-main'>
            <h3>{props.title}</h3>
            <h4>{props.subtitle}</h4>
            <p className='Card-description'>{props.description}</p>
          </div>
          <p className='Card-read-more'>Read more</p>
        </div>
      </div>
  );
}

export default Card;