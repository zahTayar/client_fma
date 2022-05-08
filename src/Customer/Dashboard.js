import React, { Component } from 'react'
import Navbar from "./NavbarCustomer"
import { saveItem } from "../Action/SaveItem";
import { saveUser } from "../Action/SaveUser";
import { connect } from "react-redux";
import Bottom from "../Basic/Bottom"
import SearchApartments from './SearchApartments';
import PersonalInfo from './PersonalInfo';
import History from './History';
import Calculate from './CalaulateSearchForm';
import "./Style.css";
import BackgroundImage from '../img/BackgroungImage.jpg';
import { BrowserRouter, Switch, Route } from "react-router-dom";

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
                  <div style={{position: 'fixed',  width: '100%', height: '100%', backgroundImage: `url(${BackgroundImage})`, right: 0, left: 0, top: 0, bottom: 0, overflowY: 'auto'}}>
                    <Navbar/>
                    <Route path="/search" exact component={SearchApartments}/>
                    <Route path="/history" component={History}/>
                    <Route path="/dashboard/PersonalInfo" component={PersonalInfo}/>
                    <Route path="/calculate" component={Calculate}/>
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