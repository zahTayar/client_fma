import React, { Component } from 'react'
import Navbar from "./NavbarCustomer"
import { saveItem } from "../Action/SaveItem";
import { saveUser } from "../Action/SaveUser";
import { connect } from "react-redux";
import Bottom from "../Basic/Bottom"
import SearchApartments from './SearchApartments';
import "./Style.css";
import BackgroundImage from '../img/BackgroungImage.jpg'

class Dashboard extends Component {
    constructor(props) {
        super(props);
    
        this.props.saveUser({
          user: this.props.user.user,
        });
        console.log(this.props.user.user.userId.email)
        this.props.saveItem({
          item: this.props.item.item,
        });
        console.log(this.props.item.item);
        console.log(this.props.user.user);
      }
      handleChange(event) {
        this.setState({ date: event.target.date });
        this.setState({ key1: event.target.key1 });
      }

      render() {
        return (
            <div style={{margin: '0', padding: '0', position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', backgroundImage: `url(${BackgroundImage})`}}>
                <Navbar/>
                <div style={{ justifyContent: 'center'}}>
                    <SearchApartments user={this.props.user} />
                </div>
                <div style={{marginTop: '170px'}}>
                    <Bottom/>
                </div>
            </div>

          );
      }
    
}
const mapStateToProps = (state) => {
    return {
      item: state.item,
      user: state.user
    };
  };
  function mapDispatchToProps(dispatch) {
    return {
      saveItem: (item) => dispatch(saveItem(item)),
      saveUser: (user) => dispatch(saveUser(user)),
    };
  }
  const Dash = connect(mapStateToProps, mapDispatchToProps)(Dashboard);
  
  export default connect()(Dash);