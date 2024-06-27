import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import CarForm from './CarForm';
import Container from 'react-bootstrap/esm/Container';
import CarUpdate from './CarUpdate';

const API_URL = "https://6659cc10de346625136df8bb.mockapi.io/cars/car";

function App() {

  const [carList, setCarList] = useState([]);


  const getCars = async () => {
    const response = await fetch(API_URL).then(
      (response) => response.json());
    setCarList(response)
  }

  useEffect(() => {
    getCars();
  }, []);


  function handleClick() {
    getCars();
  }

  function showHide(id) {
    var el = document.getElementById(id);
    if (el && el.style.display === 'none')
      el.style.display = 'block';
    else
      el.style.display = 'none';
  }


  function DeleteCar(id) {
    const requestOptions = {
      method: "DELETE",
      headers: { 'Content-Type': 'application/json' },

    };

    fetch(API_URL + '/' + id, requestOptions)
      .then(async response => {
        if (!response.ok) {
          console.log("An Error Occurred");
          return;
        }
        handleClick();
      })
      .catch(error => {
        console.error("There was an error!", error);
      });




  }


  return (
    <div className="App">
      <div><h1 className="header">The Car Shop</h1></div>
      <Container>
        <Row>
          {carList?.map((car) => (
            <Col md="auto" key={car.id} className='d-md-flex'>
              <div className="car-card">
                <div className="col p-3 border bg-light">
                  <div>
                    <span>{car.id}</span>
                    <img alt={car.model} src={require("./car.png")} width="150px" />
                  </div>
                  <span>Brand-Model: {car.brand} {car.model}</span>
                  <br />
                  <span>Miles: {car.miles}</span><br />
                  <span>Year: {car.year.substring(0, 4)}</span><br />
                  <span>Price: {car.price}</span>
                  <button onClick={() => DeleteCar(car.id)} className="btn">🗑</button>
                  <button onClick={() => showHide(car.id)} className="btn">Edit</button>
                  <br></br>
                  <Col ><span id={car.id} style={{ display: "none" }}><CarUpdate handleClick={handleClick} showHide={showHide} car={car} /> </span> </Col>
                </div>
                <br></br><br></br>
              </div>

            </Col>
          )
          )}
        </Row>
      </Container>
      <Row>
        <Col className='d-md-flex' > <CarForm handleClick={handleClick} /></Col>
      </Row>



    </div>
  );
}
export default App;
