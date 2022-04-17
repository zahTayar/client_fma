
import React , {Component} from 'react'
import { Link } from "react-router-dom";
import "./Style.css";
class NavigationBar extends Component{
    render(){
        return(
           
        <div style = {{height: '60px', display:'flex', borderColor:'black', position: 'fixed', top:'0px', right:'0px', width: '1460px', backgroundColor:'white', zIndex:2}}>
            <Link to={"/"} className="brand-logo" style= {{marginLeft:'300px',fontSize:"45px", color: 'rgba(106, 196, 255)', marginTop:'1px', position:'absolute', zIndex:'99', textDecoration: 'none'}}>
                FMA
            </Link>
        </div>
        );
    }
}
export default NavigationBar;