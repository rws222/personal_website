// import './Card.css';

// function Card(props) {
//   return (
//     <div className='Card'>
//       <div className='Card-img-wrapper'>
//         <img className='Card-img' src={props.image} alt={props.alt} />
//       </div>
//       <div className='Card-content'>
//         <h3>{props.title}</h3>
//         <h4>{props.subtitle}</h4>
//         <p className='Card-description'>{props.description}</p>
//       </div>
//     </div>
//   );
// }

// export default Card;

// import './Card.css';
// import React, { useState } from 'react';
// import { Modal, Backdrop, Fade } from '@mui/material';
// import Button from '../../mui_components/Button.js';

// // const style = {
// //   position: 'absolute',
// //   top: '50%',
// //   left: '50%',
// //   transform: 'translate(-50%, -50%)',
// //   width: 400,
// //   bgcolor: 'white',
// //   border: '2px solid #000',
// //   boxShadow: 24,
// //   p: 4,
// // };

// function Card(props) {
//   const [open, setOpen] = useState(false);

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const stopPropagation = (e) => {
//     e.stopPropagation();
//   };

//   return (
//     <div className='Card' onClick={handleOpen}>
//       {/* Your existing card content */}
//       <div className='Card-img-wrapper'>
//         <img className='Card-img' src={props.image} alt={props.alt} />
//       </div>
//       <div className='Card-content'>
//         <h3>{props.title}</h3>
//         <h4>{props.subtitle}</h4>
//         <p className='Card-description'>{props.description}</p>
//       </div>

//       {/* Modal */}
//       <Modal
//         open={open}
//         onClose={handleClose}
//         // aria-labelledby='modal-title'
//         // aria-describedby='modal-description'
//         closeAfterTransition
//         BackdropComponent={Backdrop}
//         BackdropProps={{
//           onClick: handleClose,
//           timeout: 500,
//         }}
//       >
//         <div className='Card-modal-wrapper' onclick={handleClose}>
//           <Fade in={open} onclick={handleClose}>
//             <div className='Card-modal' onClick={handleClose}>
//               {/* Add your HTML content related to the card here */}
//               <h3 className='Card-modal-title'>{props.title}</h3>
//               {/* Add other information related to the card */}
//               <p className='Card-modal-description'>{/* Your content here */}</p>
//               <Button onClick={handleClose}>Close</Button>
//             </div>
//           </Fade>
//         </div>
//       </Modal>
//     </div>
//   );
// }

// export default Card;




// TODO: delete all unnecessary code



// *** this works! just without the elipsis


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
      <div className='Modal-btn-left'>
        {props.button1text && <Button className='Modal-left-btn' href={props.button1link} target="_blank">{props.button1text}</Button>}
        {props.button2text && <Button href={props.button2link} target="_blank">{props.button2text}</Button>}
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






// import React, { useEffect, useRef } from 'react';
// import { useModal } from '../../ModalContext.js';
// import './Card.css';

// function Card(props) {
//   const { openModal } = useModal();
//   const descriptionRef = useRef(null);

//   useEffect(() => {
//     const element = descriptionRef.current;
//     if (element) {
//       const lineHeight = parseInt(window.getComputedStyle(element).lineHeight);
//       const maxHeight = element.offsetHeight;
//       console.log("maxHeight:" + maxHeight)
//       const lines = maxHeight / lineHeight;
//       element.style.webkitLineClamp = Math.floor(lines);
//     }
//   }, [props.description]);

//   const handleCardClick = () => {
//     const modalContent = (
//       <div>
//         {/* Customize modal content based on the card */}
//         <h3>{props.title}</h3>
//         {props.children}
//       </div>
//     );
//     openModal(modalContent);
//   };

//   return (
//     <div className='Card' onClick={handleCardClick}>
//       <div className='Card-img-wrapper'>
//         <img className='Card-img' src={props.image} alt={props.alt} />
//       </div>
//       <div className='Card-content'>
//         <h3>{props.title}</h3>
//         <h4>{props.subtitle}</h4>
//         <p ref={descriptionRef} className='Card-description'>{props.description}</p>
//       </div>
//     </div>
//   );
// }

// export default Card;
