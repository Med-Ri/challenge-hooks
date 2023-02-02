import React, { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { v4 as uuidv4 } from 'uuid';

 function AddModal({setRestaux,restaux}) {
  const [show, setShow] = useState(false);

  const handleClose = () => 
  {setShow(false)
    
  setRestaux( [...restaux,{id:uuidv4() , name : ref1.current.value , description : ref2.current.value ,
   rate : ref3.current.value ,
    img : ref4.current.value }])
    console.log(restaux);
};
  const handleShow = () => setShow(true);
  const ref1=useRef()
  const ref2=useRef()
  const ref3=useRef()
  const ref4=useRef()

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type={"text"} placeholder="enter resto name" ref={ref1}></input>
          <input type={"text"} placeholder="enter resto descripption" ref={ref2}></input>
          <input type={"text"} placeholder="enter resto rate" ref={ref3}></input>
          <input type={"text"} placeholder="enter resto image link" ref={ref4}></input>



        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddModal