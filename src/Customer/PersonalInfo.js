import React , {Component} from 'react'
import "./Style.css";
import Navbar from "./NavbarCustomer"
import { saveUser } from "../Action/SaveUser";
import { connect } from "react-redux";
import Bottom from "../Basic/Bottom"
import BackgroundImage from '../img/BackgroungImage.jpg';

class PersonalInfo extends Component{
    constructor(props) {
        super(props);

        this.props.saveUser({
          user: this.props.user.user,
        });

    }
    render(){
        return(
          <div style={{position: 'fixed', width: '100%', height: '100%', backgroundImage: `url(${BackgroundImage})`}}>
          <Navbar/>
          <div style={{backgroundColor:'aliceblue', borderRadius:'30px', width:'400px', height:'330px',textAlign: "center", marginTop: "70px" ,marginLeft:'500px'}}>
            <h1 style={{color: 'black', marginTop:'100px', fontWeight:'bolder'}}>הפרטים שלי</h1>
            <br></br><br></br>
            <h3 style={{direction:'rtl',textAlign:'center'}}>שם:&nbsp;{this.props.user.user.avatar}</h3>
            <br></br>
            <h3 style={{direction:'rtl', textAlign:'center'}}>דואר אלקטרוני:&nbsp;{this.props.user.user.email}</h3>
          </div>
          <Bottom />
        </div>

        );
               
        
    }


}
const mapStateToProps = (state) => {
    return {
      user: state.user
    };
  };
  function mapDispatchToProps(dispatch) {
    return {
      saveUser: (user) => dispatch(saveUser(user)),
    };
  }
  const Personal = connect(mapStateToProps, mapDispatchToProps)(PersonalInfo);
  
  export default connect()(Personal);



