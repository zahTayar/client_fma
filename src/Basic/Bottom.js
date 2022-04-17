import React , {Component} from 'react'
import Button from 'react-bootstrap/Button'
import "./Style.css";

class Botton extends Component{
    render(){
        return(
            <div style = {{bottom:'0px', backgroundColor:"black", height:'100px',bottom: '0px', width: '100%'}}>
                <div className="brand-logo" style= {{marginLeft:'1000px',fontSize:"40px", color: 'rgba(106, 196, 255)', marginTop:'15px', position:'absolute',textDecoration: 'none' }}>
                Let's Find Apartment For You
                </div>          
            </div>
        );
    }
}
export default Botton;