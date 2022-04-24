import React , {Component} from 'react'
import { saveUser } from "../Action/SaveUser";
import { connect } from "react-redux";
import NavigationBar from "../Basic/navigationBar"
import RegisterForm from "./RegisterForm"
import Bottom from "../Basic/Bottom"
import Background from '../img/Background.jpeg'

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
          role:"Player",
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
            } else {
              if(Name === "" && Email === "" && Password === ""){
              this.setState({ isSignup: false, error: "נא הכנס נתונים לשדות המתאימים" });
              }else{
              response.json().then((x) => {
                this.setState({
                  isSignup: false,
                  error:"ההרשמה נכשלה! המשתמש קיים",
                
                });
              });
              }
             
           } },
          (error) => {
            console.log(error);
            console.log("in error");
          }
        );
      };
        return(
          <div> 
            <NavigationBar/>
            <div style={{backgroundImage: `url(${Background})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', marginTop:'-10px'}}>

            <div style={{width:'400px', height:'500px', borderColor:'rgba(106, 196, 255)'}}>
            <br></br>
            <br></br>
            <br></br>
            <RegisterForm onButtonClick={handleButtonClick} error = {this.state.error}></RegisterForm>
            </div>
      
      <Bottom/>
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