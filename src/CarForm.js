import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';

const API_URL = "https://6659cc10de346625136df8bb.mockapi.io/cars/car";


//Receive function from parent to for form actions
export default function CarForm({ handleClick }) {

//set state for formValues
  const [formValues, setFormValues] = useState({
    id: '', 
    brand: '',
    model: '',
    miles: '',
    year: '',               
    price: ''
  });


  //Set values in the formValues array based on form field's names
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };



  const handleSubmit = (event) => {

    event.preventDefault();
   //Need to be able to not submit if there is no car data in the form  -----  if(!formValues.brand === null) {


   //Declare request options for API fetch
    const requestOptions = {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formValues)
    };

    //fecth cars from  API adding new car entry
    fetch(API_URL, requestOptions)
      .then(async response => {
        if (!response.ok) {
          console.log("An Error Occurred");
          return;
        }

        //Call function to re-render ui
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

    // }else {
    //     alert("Please enter the car's infomation to continue.")
    // }

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
