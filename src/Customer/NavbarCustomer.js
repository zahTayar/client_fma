import React , {Component} from 'react'
import { Link } from "react-router-dom";
import Sidebar from "./SideBarCustomer"
import { saveUser } from "../Action/SaveUser";
import { connect } from "react-redux";
import logo from "../img/logo.jpg"
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
            <div style = {{height: '60px', display:'flex',borderColor:'black', top:'0px', right:'0px', width: 'auto', backgroundColor:'blue', zIndex:3}}>
              <img src={logo} alt="logo" style={{width:'70px'}}></img>
              <div className="brand-logo" style= {{marginLeft:'120px',fontSize:"35px", color: 'white', marginTop:'5px', position:'absolute', zIndex:2, textDecoration: 'none', fontWeight:'bold'}}>
                FMA
              </div>
              <nav>
              <Link to={"/dashboard"} className="menu-bars" style={{direction:'rtl', color: 'white', position:'absolute', zIndex:3, marginLeft:'350px', fontSize:"25px", fontWeight:'bold', marginTop:'10px'}}>
                SEARCH
              </Link>
              <Link to={"/dashboard"} className="menu-bars" style={{direction:'rtl', color: 'white', position:'absolute', zIndex:3, marginLeft:'500px', fontSize:"25px", fontWeight:'bold', marginTop:'10px'}}>
                CALCULATE
              </Link>
              <Link to={"/dashboard"} className="menu-bars" style={{direction:'rtl', color: 'white', position:'absolute', zIndex:3, marginLeft:'680px', fontSize:"25px", fontWeight:'bold', marginTop:'10px'}}>
                NOTIFICATION
              </Link>
              <div className="regular" style={{direction:'rtl', color: 'white', position:'absolute', zIndex:3, marginLeft:'1085px', fontSize:"25px", fontWeight:'bold', marginTop:'10px'}}>
                היי {this.props.user.user.userName}!
              </div>
              <Sidebar/>
              </nav>
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



