import React , {Component} from 'react'
import logo from "../img/logo.jpg";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Style.css";

class NavigationBar extends Component{
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
                </Toolbar>
              </AppBar>
            </Box>
          </div>
        );
    }
}
export default NavigationBar;