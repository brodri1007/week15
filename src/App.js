import { useState} from 'react';
import {  useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import CarForm from "./CarForm";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import TestDriveRequest from "./TestDriveRequest"
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DeleteCar from './DeleteCar';
import { useEffect } from "react";


function App() {


  //use Query client initialisation
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const [cars, setCars] = useState([]);
  const [appointment, setAppointment] = useState([]);
  const QueryClient = useQueryClient();

  const { data, error, isloading } = useQuery({
    queryKey: ['car'],
    queryFn: () =>
      fetch("https://6659cc10de346625136df8bb.mockapi.io/cars/car").then((res) =>
        res.json()),
  });


 //useMutation Query client initialisation to make http calls
  const { mutate, isPending, isError, isSuccess } = useMutation({
    mutationFN: (newPost) =>
      fetch("https://6659cc10de346625136df8bb.mockapi.io/cars/car", {
        method: "POST",
        body: JSON.stringify(newPost),
        headers: {"Content-type":  "application/json; charset=UTF-8"}
      }).then((res) => res.json()),
      onSuccess: () => {
        QueryClient.invalidateQueries({queryKey: ["post"]});
      }
  });




function DeleteCar (carid) {
console.log(carid)
  fetch(`https://6659cc10de346625136df8bb.mockapi.io/cars/car/${carid}`, {
    method: "DELETE", 
    
}).then(()=> {
  fetch("https://6659cc10de346625136df8bb.mockapi.io/cars/car").then((res) =>
    res.json()
  )
})
};
 









  

  if (error || isError) return <div>There was an error!</div>;
  if (isloading) return <div>Data is loading...</div>;

  return (
             <>
                  <div className="App" >
                  
                    <Container>
                      <h1 className="header">The Car Shop</h1>
                    <Row>
                    {/* <button onClick={() =>
                      mutate({
                        useId: 25,
                        id: 56,
                        model: "Focus",
                        color: "pink",
                        make: "Jaguar",
                        body: " Hello this is Byron "  }) }> Add Car</button> 
                    {" "} */}


                    {data?.map((car, i) => {
                      
                      return (
                        <Col md="auto">
                          <div className="col p-3 border bg-light" key={i}>
                            <div><span>{car.id}</span> <img alt={car.model} src={require("./car.png")} width="150px" /></div>
                            <span>{car.make}</span>
                            <span>{car.model}</span> <br />
                            <span>Miles: {car.mileage}</span>
                            <span>Year: {car.year}</span><br />
                            <span>Price: {car.price}</span>
                            <button className="btn" onClick={() => DeleteCar(car.id)} >🗑</button>

                            

                            <TestDriveRequest cardetails={car} setappt={setAppointment} appt={appointment}/>
                          </div>
                        </Col>
                      )
                                
                       }
                      )}
                      </Row>
                      </Container>
                      
                  </div>   
                 
                  <CarForm/>
                  

              </>
          )

  

}

export default App;
