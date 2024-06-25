
import Container from 'react-bootstrap/Container';



  


export default function CarForm ({setAppointments})  {

// function AddNewCar() { 

// fetch("https://6659cc10de346625136df8bb.mockapi.io/cars/car", {
//     method: "POST",
//     body: JSON.stringify({
//     id: $('#idUpdate').val(),
//     make: $('#makeUpdate').val(),
//     model: $('#modelUpdate').val(),    
//     miles: $('#id').val(),
//     price: $('#fullName').val(),
//     model: $('#newAssignment').val(), 
//     year: $('#newAssignment').val(),
//     }),
//     headers: {
//     "Content-type": "application/json; charset=UTF-8"
//     }
    
// })};



return (
<Container>

<div className='row' >
    <div className='col'>
  <form id="Form">
    <div className="submitForm">
      <h4 className="pt-5 ">Manage your Schedule</h4>
      <div>
        <label htmlFor="idUpdate" className="form-label">Id</label>
        <input type="text" className="form-control w-50" id="idUpdate"/>
      </div>
      <div>
        <label htmlFor="makeUpdate">Car scheduled</label>
        <input type="text" className="form-control w-50" id="car"/>
      </div>
      <div>
        <label htmlFor="modelUpdate">Day/Time</label>
        <input type="text" className="form-control w-50" id="modelUpdate"/>
      </div>
        <br/><br/>        
        <button >Update</button>
        <button >Delete</button> 
        <br/><br/><br/><br/><br/>
    </div>
  </form>
  </div>
  
  </div>
</Container>
)   

/* 

    <div className="submitForm">
      <h4 className="pt-5 ">Add/Update Car</h4>
      <div>
        <label htmlFor="idUpdate" className="form-label">Id</label>
        <input type="text" className="form-control w-50" id="idUpdate"/>
      </div>
      <div>
        <label htmlFor="makeUpdate">Make</label>
        <input type="text" className="form-control w-50" id="makeUpdate"/>
      </div>
      <div>
        <label htmlFor="modelUpdate">Model</label>
        <input type="text" className="form-control w-50" id="modelUpdate"/>
      </div>
      <div>
        <label htmlFor="mileageUpdate">Miles</label>
        <input type="text" className="form-control w-50" id="mileageUpdate"/>
      </div>
      <div>
        <label htmlFor="priceUpdate">Price</label>
        <input type="text" className="form-control w-50" id="priceUpdate"/>
      </div>
    
        <label htmlFor="yearUpdate">Year</label>

        <input type="text" className="form-control w-50" id="yearUpdate"/>
        <br/><br/> */

}
