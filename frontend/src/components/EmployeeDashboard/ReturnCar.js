import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import NavBar from '../layouts/NavBar.js';

import ReturnDetails from "./ReturnDetails";

import { RENTALS_API_URL, CUSTOMER_API_URL } from "../../constants";

const ReturnCar = () => {
  const [licensePlate, setLicensePlate] = React.useState("");
  const [transaction, setTransaction] = React.useState([]);
  //const [id, setId] = React.useState(0);
  const [person, setPerson] = React.useState([]);
  const [checker, setChecker] = React.useState(false);

  let location = useLocation();
  const { branch, id } = location.state;
  console.log("customer id: " + id)

  const handleChange = (event) => {
    setLicensePlate(event.target.value);
  };

  //12345
  const handleClick = () => {
    axios.get(RENTALS_API_URL).then((response) => {
      response.data.map((transaction) => {
        if (transaction.licensePlate == licensePlate) {
          setTransaction(transaction);
          //setId(transaction.customerID);

          axios.get(CUSTOMER_API_URL).then((response) => {
            response.data.map((person) => {
              setPerson(person);
              setChecker(true);
            });
          });
        }
      });
    });
  };

  return (
    <>
      <NavBar state={{ id: id }}/>
      <div>
      <h1>Employee Dashboard</h1>
      <TextField
        required
        id="outlined-required"
        label="Required"
        defaultValue="License Plate"
        onChange={handleChange}
      />
      <Button variant="contained" onClick={handleClick}>
        Show
      </Button>

      {checker && <ReturnDetails person={person} transaction={transaction} />}
    </div>
    </>
    
  );
};
export default ReturnCar;
