import React, { useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function SignUpForm({ onButtonClick, error}) {
  const classes = useStyles();
  const [Name, setName] = React.useState("");
  const [Email, setEmail] = React.useState("");
  const [isNameValid, setNameValid] = React.useState(false);
  const [isEmailValid, setEmailValid] = React.useState(false);

  const handleName = (event) => {
    setName(event.target.value);
  }; 

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleButtonClick = () => onButtonClick(Name, Email);
  useEffect(() => {
    if (Name !== "") {
      setNameValid(true);
    } else {
      setNameValid(false);
    }

    if (Email !== "") {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }

  });
  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      style={{ textAlign: "center", marginTop: "70px" ,marginLeft:'550px', backgroundColor:'aliceblue', borderRadius:'30px', width:'400px', height:'330px' }}
    >
      <div className="regular" style={{color:'rgba(106, 196, 255)', fontWeight:'bolder',fontSize:'30px', direction:'rtl'}}>הירשמו עכשיו!</div>
      <div >
      <div>
          <TextField
            id="outlined-name"
            label="שם"
            value={Name}
            onChange={handleName}
            variant="outlined"
            style={{direction:'rtl'}}
          />
        </div>
        <div>
          <TextField
            id="outlined-name"
            label="אימייל"
            value={Email}
            type = "email"
            onChange={handleEmail}
            variant="outlined"
          />
        </div>
        
        <div>
        <div className="regular" style={{fontSize:'15px', width:'180px', marginLeft:'110px', direction:'rtl', fontWeight:'bold'}}>
            משתמש קיים?
            <Link to={"/Welcome"} className="brand-logo" style= {{textDecoration: 'none', direction:'rtl', fontWeight:'bold', width:'100px'}}>
          לחץ כאן
          </Link>
          </div>
        <Button className="regular"  style={{position:'relative',zIndex:2,display:'inline',borderColor:'white', backgroundColor:'rgba(106, 196, 255)', color:'white', fontSize: '17px', borderRadius:'30px', width:'100px', height:'45px', fontWeight:'bolder', marginTop:'10px'}} onClick={handleButtonClick}>הרשמה
        <div className="regular" style={{color:'red', fontSize:'10px', marginTop:'20px', width:'115px', marginRight:'30px'}}>{error}</div>
        </Button>

        </div>
      </div>
    </form>
  );
}
