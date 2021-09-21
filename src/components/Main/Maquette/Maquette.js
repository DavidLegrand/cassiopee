import React, { useState } from "react";
import { Button, Modal } from 'react-bootstrap'
import css from './Maquette.module.css'

const Maquette = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="danger" className={css.button} onClick={handleShow}>
        Voir la maquette 3d
      </Button>

      <Modal show={show} onHide={handleClose} centered size="xl" className={css.modal}>
        <Modal.Header closeButton />
        <Modal.Body>
          <iframe title="Maquette" className={css.iframe} src="https://www.off-digital.com/Spy/Terredesarts/" />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Maquette;
