import React , {Component} from 'react'
import Navbar from "./NavbarCustomer"
import Bottom from "../Basic/Bottom";
import BackgroundImage from '../img/BackgroungImage.jpg';
import axios from "../axios";
import CircularProgress from '@mui/material/CircularProgress';

class Notifications extends Component{
    constructor(props) {
        super(props);
        this.state = {
          searches: null
        }
    }
    componentDidMount = () => {
      this.last_searches()
    }

    last_searches = () => {
      axios.get("items/by_user/"+"lidar@gmail.com")
      .then((response) => {
        this.setState({searches: response.data})
        console.log(response.data)
      })
      .catch((error) => {
          console.log(error.response.data)
      });
    }

    


    render(){
      let searchers_view = null;
        return(
            <div style={{margin: '0', padding: '0', position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', backgroundImage: `url(${BackgroundImage})`}}>
                <Navbar/>
                <div style={{ justifyContent: 'center'}}>
                    {searchers_view}
                </div>
                <div style={{marginTop: '170px'}}>
                    <Bottom/>
                </div>
            </div>
        );                      
    }
}

export default Notifications;