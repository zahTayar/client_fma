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
          <div style={{position: 'fixed', height: '100%', backgroundImage: `url(${BackgroundImage})`}}>
          <div style={{backgroundColor:'aliceblue', borderRadius:'30px', width:'400px', height:'330px',textAlign: "center", marginTop: "70px" ,marginLeft:'500px'}}>
            <h2 style={{color: 'black', marginTop:'100px', fontWeight:'bolder'}}>הפרטים שלי</h2>
            <br></br><br></br>
            <h5 style={{direction:'rtl',textAlign:'center'}}>שם:&nbsp;{this.props.user.user.userName}</h5>
            <br></br>
            <h5 style={{direction:'rtl', textAlign:'center'}}>דואר אלקטרוני:&nbsp;{this.props.user.user.email}</h5>
          </div>
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



