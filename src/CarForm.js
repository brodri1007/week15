import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';

const API_URL = "https://6659cc10de346625136df8bb.mockapi.io/cars/car";

export default function CarForm({ handleClick }) {

  const [formValues, setFormValues] = useState({
    id: '', 
    brand: '',
    model: '',
    miles: '',
    year: '',               
    price: ''
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
    console.log(formValues);

   

    const requestOptions = {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formValues)
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

      setFormValues({  
        id: '',    
        brand: '',
        model: '',
        miles: '',
        year: '',               
        price: ''
      })



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
                value={formValues.id}
                onChange={handleChange}
              />
              <label htmlFor="brand"></label>
              <input
              placeholder='Enter the brand'
                type="text"
                id="brand"
                name="brand"
                value={formValues.brand}
                onChange={handleChange}
              />
          
              <label htmlFor="model"></label>
              <input
              placeholder='Enter the model'
                type="text"
                id="model"
                name="model"
                value={formValues.model}
                onChange={handleChange}
              />
        
              
              <input
              placeholder='How many miles'
                type="text"
                id="miles"
                name="miles"
                value={formValues.miles}
                onChange={handleChange}
              />
         
              
              <input
              placeholder='Enter the Year'
                type="text"
                id="year"
                name="year"
                value={formValues.year}
                onChange={handleChange}
              />
           
              
              <input
              placeholder='Enter a price'
                type="text"
                id="price"
                name="price"
                value={formValues.price}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Add a Car</button>
          </form>
        </div>
      </div>
    </Container>
  );
}
