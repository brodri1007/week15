import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
//import DatePicker from 'react-bootstrap/';

function TestDriveRequest(props) {
  console.log("props.appt.appointment: " + props)


  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [apptDate, setApptdate] = useState(new Date()); 
 

  const setAppointment = props.setAppointment;
  //const appt = [...props.appt.appointment];

  const make = props.cardetails.make;
  const model = props.cardetails.model;
  const year = props.cardetails.year;

 const appoint = props.appt.appointment.email;
console.log("New: " + appoint)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  const handleScheduleIt = (e) => {
  
    const newItem = {
        id: Math.random(),
        email: email,
        date:  apptDate,     
    };

    //console.log(appointment);

    // if (apptDate) {
    //     setAppointment([...appt, newItem]);
    //     setAppointment("");
    //     setEmail("");
    //     setApptdate(null); 

    // }
};


  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Test-drive me!
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Request an appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Label><img alt={model} src={require("./car.png")} width="150px" />You're requesting to schedule a test drive for this {year} {make} {model}.</Form.Label>
            <Form.Label>Enter your email address</Form.Label>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">              
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Select the day and time.</Form.Label>           

                <DatePicker selected={apptDate} onChange={(date) => setApptdate(date)} />

            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary"  onClick={handleScheduleIt}>
            Schedule it!
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TestDriveRequest;