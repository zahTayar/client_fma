import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from 'react-bootstrap/Button'


const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function AddTableForm({ onButtonClick, error }) {
  const classes = useStyles();
  const [name, setName] = React.useState("");
  const [capacity, setCapacity] = React.useState("");
  const [isNameValid, setNameValid] = React.useState(false);
  const [isCapacityValid, setCapacityValid] = React.useState(false);
  const [toggle, setToggle] = useState(false);
  const handleName = (event) => {
    setName(event.target.value);
  }; 

  const handleCapacity = (event) => {
    setCapacity(event.target.value);
  };

  const handleButtonClick = () => onButtonClick(name, capacity);
  useEffect(() => {
    if (name !== "") {
      setNameValid(true);
    } else {
      setNameValid(false);
    }

    if (capacity !== "") {
      setCapacityValid(true);
    } else {
      setCapacityValid(false);
    }
 
  });

  return (
   
    <div>
      
          <TextField
            id="outlined-name"
            label="מס׳ שולחן"
            value={name}
            onChange={handleName}
            variant="outlined"
            style={{direction:'rtl', width:'85px', marginLeft:'830px', marginTop:'30px'}}
          />
          <TextField
            id="outlined-name"
            label="מקס׳ סועדים"
            value={capacity}
            onChange={handleCapacity}
            variant="outlined"
             style={{direction:'rtl', width:'102px', marginLeft:'700px', marginTop:'-56px'}}
             
          />
          <div style={{marginTop:'-55px'}}>
        <Button onClick={handleButtonClick} className="regular" variant="dark" style={{borderColor:'white', backgroundColor:'rgba(106, 196, 255)', color:'white', fontSize: '17px', borderRadius:'30px', width:'100px', height:'45px', fontWeight:'bolder', marginLeft:'550px', marginTop:'-100px'}}>הוספת שולחן</Button>{' '}
        <div className="regular" style={{color:'red', fontSize:'15px', marginTop:'20px', width:'200px', marginLeft:'700px', fontWeight:'bold'}}>{error}</div>
        </div>
      
      </div>
  );
}