import React , {Component} from 'react'
import Button from 'react-bootstrap/Button'
import "./Style.css";

class Botton extends Component{
    render(){
        return(
            <div style = {{backgroundColor:"black", height:'100px', width: '100%', position: 'fixed', bottom: 0, left: 0, right: 0, height: '80px'}}>
                <div className="brand-logo" style= {{marginLeft:'900px',fontSize:"30px", color: 'rgba(106, 196, 255)', marginTop:'15px', position:'absolute',textDecoration: 'none' }}>
                Let's Find Apartment For You
                </div>          
            </div>
        );
    }
}
export default Botton;