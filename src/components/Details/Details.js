import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './Details.css'

const Details = ({product}) => {
    console.log(product)
    const {strMeal,strMealThumb,strInstructions}=product
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
      <Button  className='warning mx-2'  onClick={handleShow}>
        Details
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{strMeal}</Modal.Title>
        </Modal.Header>
        <div className='info'>
        <img className='my-3' src={strMealThumb} alt="" />
        </div>
        <Modal.Body>{strInstructions}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    );
};

export default Details;