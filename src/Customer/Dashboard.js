import React, { Component } from 'react'
import Navbar from "./NavbarCustomer"
import { saveItem } from "../Action/SaveItem";
import { saveUser } from "../Action/SaveUser";
import { connect } from "react-redux";
import Bottom from "../Basic/Bottom"
import SearchApartments from './SearchApartments';
import PersonalInfo from './PersonalInfo';
import History from './History';
import "./Style.css";
import BackgroundImage from '../img/BackgroungImage.jpg';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from '../Sign/Login';

class Dashboard extends Component {
    constructor(props) {
        super(props);
    
        this.props.saveUser({
          user: this.props.user.user,
        });
        this.props.saveItem({
          item: this.props.item.item,
        });
      }
      handleChange(event) {
        this.setState({ date: event.target.date });
        this.setState({ key1: event.target.key1 });
      }

      render() {
        return (
          <>
            <BrowserRouter>
                <Switch>
                  <div style={{position: 'fixed',  width: '100%',height: '100%', backgroundImage: `url(${BackgroundImage})`}}>
                    <Navbar/>
                    <Route path="/search" exact component={SearchApartments}/>
                    <Route path="/history" component={History}/>
                    <Route path="/dashboard/PersonalInfo" component={PersonalInfo}/>
                  </div>
                </Switch>
              <Bottom/>
            </BrowserRouter>
            </>
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