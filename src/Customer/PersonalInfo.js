import React , {Component} from 'react'
import "./Style.css";
import Navbar from "./NavbarCustomer"
import { saveUser } from "../Action/SaveUser";
import { connect } from "react-redux";
import Bottom from "../Basic/Bottom"

class PersonalInfo extends Component{
    constructor(props) {
        super(props);

        this.props.saveUser({
          user: this.props.user.user,
        });
        console.log(this.props.user.user)
        console.log(this.props.user.user.userId.email)

    }
    render(){
        return(
           
           <div>
         <Navbar/>
         <div style={{backgroundColor:'aliceblue', borderRadius:'30px', width:'400px', height:'330px',textAlign: "center", marginTop: "70px" ,marginLeft:'500px',}}>
         <h1 className="regular" style={{color: 'black', marginTop:'100px', fontWeight:'bolder'}}>הפרטים שלי</h1>
         <h4 className="regular" style={{direction:'rtl',textAlign:'center'}}>שם:&nbsp;{this.props.user.user.userName}</h4>
          <h4 className="regular" style={{direction:'rtl', textAlign:'center'}}>דואר אלקטרוני:&nbsp;{this.props.user.user.userId.email}</h4>
          </div>
         <div style={{marginTop:"450px"}}>
          <Bottom />
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



