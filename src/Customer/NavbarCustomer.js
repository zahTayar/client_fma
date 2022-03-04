import React , {Component} from 'react'
import { Link } from "react-router-dom";
import Sidebar from "./SideBarCustomer"
import { saveUser } from "../Action/SaveUser";
import { connect } from "react-redux";
import "./Style.css";
class NavigationBar extends Component{
    constructor(props) {
        super(props);

        this.props.saveUser({
          user: this.props.user.user
        });
    }
    render(){
        return(
           
           <div style = {{height: '60px', display:'flex',borderColor:'black', position: 'fixed', top:'0px', right:'0px', width: '1460px', backgroundColor:'white', zIndex:3}}>
          
          <Link to={"/dashboard"} className="brand-logo" style= {{marginLeft:'300px',fontSize:"35px", color: 'rgba(106, 196, 255)', marginTop:'10px', position:'absolute', zIndex:2, textDecoration: 'none'}}>
          Tableing
          </Link>
          <div className="regular" style={{direction:'rtl', color: 'rgba(106, 196, 255)', position:'absolute', zIndex:3, marginLeft:'1085px', fontSize:"25px", fontWeight:'bold', marginTop:'20px'}}>היי {this.props.user.user.userName}!</div>
         <Sidebar/>
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
  const Nav = connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
  
  export default connect()(Nav);



