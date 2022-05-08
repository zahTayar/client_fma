import React , {Component} from 'react'
import { saveUser } from "../Action/SaveUser";
import { connect } from "react-redux";
import NavigationBar from "../Basic/navigationBar"
import RegisterForm from "./RegisterForm"
import BackgroundImage from '../img/BackgroungImage.jpg';

class Register extends Component{
  constructor(props) {
    super(props);
    this.state = {
      isSignup: false,
      error: "",
    };
  }
      handleChange(event) {
        this.setState({email: event.target.email});
        this.setState({name: event.target.userName});
      }
 
    
    render(){
      const handleButtonClick = async (Name,Email,Password) => {
        const newUser = {
          email:Email,
          role:"PLAYER",
          username: Name,
          avatar:"",
          password:Password
        };
     
        const dataJson = JSON.stringify(newUser);
        await fetch("http://localhost:5500/fma/users", {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': '*',
            credentials: "include",
          },
          body: dataJson,
        }).then(
          (response) => {
         
            if (response.status === 200) {
              this.setState({error:""})
              response.json().then((d) => {
                console.log("200ok");
                // console.log(d);
                this.setState({
                  isSignup: true,
                  
                });
                window.location.assign('/Welcome');
              });
            } else if(Name === "" || Email === "" || Password === ""){
              this.setState({ isSignup: false, error: "נא הכנס נתונים לשדות המתאימים" });
              }else{
                this.setState({isSignup: false, error: "ההרשמה נכשלה! המשתמש קיים"});
              response.json().then((x) => {
                
              });
              }
             
           } ,
          (error) => {
            console.log(error);
            console.log("in error");
            console.log(this.state.error);
          }
        );
      };
        return(
          <div style={{position: 'fixed',  width: '100%', height: '100%', backgroundImage: `url(${BackgroundImage})`, right: 0, left: 0, top: 0, bottom: 0}}>
          <div style={{position: 'fixed',backgroundImage: `url(${BackgroundImage})`, right: 0, left: 0, top: 0, bottom: 0, overflowY: 'auto'}}>
            <NavigationBar/>
            <RegisterForm onButtonClick={handleButtonClick} error = {this.state.error}></RegisterForm>
            </div>
         </div>
        )
    }
}
const mapStateToProps = (state) => {
  return {
    user: state.newUser,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    saveUser: (newUser) => dispatch(saveUser(newUser)),
  };
}

const SignUp = connect(mapStateToProps, mapDispatchToProps)(Register);

export default SignUp;