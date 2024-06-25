import { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import CarForm from "./CarForm";

import Container from 'react-bootstrap/Container';
//import TestDriveRequest from "./TestDriveRequest"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import DatePicker from "react-datepicker";
import Schedule from './Schedule';


function App() {

  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [apptDate, setApptdate] = useState(new Date());
  const [appointments, setAppointments] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { data, error, isloading } = useQuery({
    queryKey: ['car'],
    queryFn: () =>
      fetch("https://6659cc10de346625136df8bb.mockapi.io/cars/car").then((res) =>
        res.json()),
  });


  const handleScheduleIt = (e) => {

    const newItem = {
      id: Math.random(),
      email: email,
      date: apptDate,
    };

    if (apptDate) {
      setAppointments([...appointments, newItem]);
      setEmail("");
      setApptdate(null);
    }

   
      handleClose()
  };


  if (error) return <div>There was an error!</div>;
  if (isloading) return <div>Data is loading...</div>;

  function DeleteCar(carid) {
    fetch(`https://6659cc10de346625136df8bb.mockapi.io/cars/car/${carid}`, {
      method: "DELETE",
    })
  };


  return (
    <>
      <div className="App" >
        <Container>
          <h1 className="header">The Car Shop</h1>
          <Row>
            {data?.map((car, i) => {
              return (
                <Col md="auto">
                  <div className="col p-3 border bg-light" key={car.id}>
                    <div><span>{car.id}</span> <img alt={car.model} src={require("./car.png")} width="150px" /></div>
                    <span>{car.make}</span>
                    <span>{car.model}</span> <br />
                    <span>Miles: {car.mileage}</span><br />
                    <span>Year: {car.year.substring(0, 4)}</span><br />
                    <span>Price: {car.price}</span>
                    <button className="btn" onClick={() => DeleteCar(car.id)} >🗑</button>
                    <Button variant="primary" onClick={handleShow}>
                    Test-drive me!
                  </Button>
                  </div>
      



                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Request an appointment</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form>
                        <Form.Label><img alt={car.model} src={require("./car.png")} width="150px" /><br></br>You're requesting to schedule a test drive for this {car.year.substring(0, 4)} <br></br>{car.make} {car.model}.</Form.Label>
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
                          controlId="exampleForm.ControlTextarea1">
                          <Form.Label>Select the day and time.</Form.Label>
                          <DatePicker 
                            selected={apptDate} 
                            onChange={(date) => setApptdate(date)}
                            showTimeSelect
                           />
                        </Form.Group>
                      </Form>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Cancel
                      </Button>
                      <Button variant="primary" onClick={handleScheduleIt}>
                        Schedule it!
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </Col>
              )
            }
            )}
          </Row>
    
          <CarForm setAppointment={setAppointments} />
          <Schedule appointments={appointments} />
        </Container>
      </div>


    </>

  )

}

export default App;
