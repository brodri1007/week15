import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';



export default function CarUpdate({ handleClick, car, showHide}) {

  const API_URL = "https://6659cc10de346625136df8bb.mockapi.io/cars/car/" + car.id;

  const [formValues, setFormValues] = useState({
    id: car.id, 
    brand: car.brand,
    model: car.model,
    miles: car.miles,
    year: car.year,               
    price: car.price
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({        
        brand: formValues.brand,
        model: formValues.model,
        miles: formValues.miles,
        year: formValues.year,               
        price: formValues.price
      })
  };


    fetch(API_URL, requestOptions)
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


  };

  return (
    <Container>
      <div className='row'>
        <div className='col'>
          <form onSubmit={handleSubmit}>
          <div>
          <input
                type="hidden"
                id="id"
                name="id"
                value={car.id}
                onChange={handleChange}/>
              <label htmlFor="brand">Brand:</label>
              <input
                type="text"
                id="brand"
                name="brand"
                value={formValues.brand}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="model">Model:</label>
              <input
                type="text"
                id="model"
                name="model"
                value={formValues.model}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="miles">Miles:</label>
              <input
                type="text"
                id="miles"
                name="miles"
                value={formValues.miles}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="year">Year:</label>
              <input
                type="text"
                id="year"
                name="year"
                value={formValues.year}
                onChange={handleChange}
              />
            </div>
           
            <div>
              <label htmlFor="price">Price:</label>
              <input
                type="text"
                id="price"
                name="price"
                value={formValues.price}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Update Car</button>
            <button onClick={() => showHide(formValues.id)} type="submit">Close</button>
          </form>
        </div>
      </div>
    </Container>
  );
}
