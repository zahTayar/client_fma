import React , {Component} from 'react'
import { Link } from "react-router-dom";
import Sidebar from "./SideBarCustomer"
import { saveUser } from "../Action/SaveUser";
import { connect } from "react-redux";
import logo from "../img/logo.jpg"
import "./Style.css";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
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
            <div>
              <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                  <Toolbar>
                    <img src={logo} alt="logo" style={{width:'70px', float: 'left'}}></img>
                    <div className="brand-logo" style= {{marginLeft:'120px',fontSize:"35px", color: 'white', marginTop:'5px', position:'absolute', zIndex:2, textDecoration: 'none', fontWeight:'bold'}}>
                        FMA
                    </div>
                    <ul style={{marginLeft: '200px', marginTop: '15px', position: 'fixed'}}>
                      <li className='nav-li'>
                      <Link to={"/search"}>
                          SEARCH
                      </Link>
                      </li>
                      <li className='nav-li'>
                      <Link to={"/search"}>
                          CALCULATE
                      </Link>
                      </li>
                      <li className='nav-li'>
                      <Link to={"/history"}>
                          HISTORY
                      </Link>
                      </li>
                    </ul>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, direction: 'rtl', marginLeft: '780px', marginTop:'10px' }}>
                      היי {this.props.user.user.userName} !
                    </Typography>
                    <Sidebar/>
                  </Toolbar>
                </AppBar>
              </Box>
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
  const Navi = connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
  
  export default connect()(Navi);



