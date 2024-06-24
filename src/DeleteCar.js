import {  useMutation } from "@tanstack/react-query";

export default function DeleteCar(dataid) {

    useMutation({
      mutationFN: (deleteCar) =>
      fetch(`https://6659cc10de346625136df8bb.mockapi.io/cars/car/${dataid}`, {
        method: 'DELETE',
      }).then((res) => res.json())})

  }