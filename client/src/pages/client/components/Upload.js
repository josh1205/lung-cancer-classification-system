// Database
import { collection, addDoc } from 'firebase/firestore';

// Auth
import { useUserAuth } from "../../../contexts/UserAuthContext";

// Firebase
import { db } from "../../../firebase";


// React
import React, { useState } from "react";

// Bootstrap
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


export default function Upload() {
  // React Hooks
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [imageName, setImageName] = useState("");
  const [selectedFile, setSelectedFile] = useState();
  const [show, setShow] = useState(false);

  
  // Auth
  const { user } = useUserAuth();
  
  // VARIABLES
  const room = `${user.uid}room`;
  const patientData = {
    email: email,
    first_name: firstName,
    last_name: lastName,
    image_name: imageName,
    file_name: String(selectedFile)
  };

  // FUNCTIONS
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handlePatientCreation = async (e) => {
    e.preventDefault();
    const patientsRef = collection(db, `rooms/${room}/patients`);
    if (email && firstName && lastName && imageName && selectedFile) {
        await addDoc(patientsRef, patientData);
        await setShow(false)
    } else {
        alert("Not all create patient fields are filled");
    }
  };

  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        Upload
      </Button>

      <Modal show={show} backdrop="static" centered onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Upload Patient Scan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-2">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={(event) => setEmail(event.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>First name</Form.Label>
              <Form.Control type="text" placeholder="Enter first name" onChange={(event) => setFirstName(event.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Last name</Form.Label>
              <Form.Control type="email" placeholder="Enter last name" onChange={(event) => setLastName(event.target.value)}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Scan title</Form.Label>
              <Form.Control type="email" placeholder="Enter scan title" onChange={(event) => setImageName(event.target.value)}/>
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="file"
                onChange={(e) => {
                  const file = e.target.files ? e.target.files[0] : undefined;
                  setSelectedFile(file);
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handlePatientCreation}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}