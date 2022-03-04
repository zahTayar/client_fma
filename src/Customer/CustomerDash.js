import React, { Component } from 'react'
import Navbar from "./NavbarCustomer"
import { saveItem } from "../Action/SaveItem";
import { saveUser } from "../Action/SaveUser";
import { connect } from "react-redux";
import Bottom from "../Basic/Bottom"
import SearchForm from './SearchForm'
import Info from "./Info"
import Restaurant from "../img/Restaurant.jpeg"
import Icon from "../img/icon.png"
import Map from "../img/map.png"
import "./Style.css";

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
    const handleButtonClick = async (date, capacity) => {
      console.log(date);
      console.log(capacity);



      const newItem = {
        email: this.props.user.user.userId.email,
        date: date,
        capacity: capacity


      };

      const dataJson = JSON.stringify(newItem);
      await fetch("http://localhost:8041/twins/operations", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
          credentials: "include",
        },
        body: dataJson,
      }).then(
        (response) => {

          if (response.status === 200) {
            response.json().then((d) => {
              console.log("200ok");
              console.log(d);
              this.setState({
                isSignup: true,

              });
            });
          } else {
            response.json().then((x) => {
              this.setState({
                errorMessage: x.message,
              });
            });
          } this.setState({ isSignup: true, error: "" });
        },
        (error) => {
          console.log(error);
          console.log("in error");
        }
      );
    };

    return (
      <div>

        <Navbar> </Navbar>

        <div style={{ width: '900px', marginLeft: '270px' }}>

          <img alt='' style={{ height: '370px', width: '900px' }} src={Restaurant} />

          <br></br>
          <br></br>
          <div style={{ marginLeft: '400px', display: 'inline-block' }}>
            <img alt='' style={{ height: '100px', width: '120px', marginLeft: '400px', display: 'inline-block' }} src={Icon} />
          </div>

          <div className="regular" style={{ direction: 'rtl', fontSize: '25px', marginRight: '90px', marginTop: '-70px', fontWeight: 'bold' }}>אפקה</div>
          <div className="regular" style={{ direction: 'rtl', fontSize: '12px', marginRight: '90px' }}>תל אביב יפו</div>


          <br></br>
          <div style={{ marginLeft: '400px' }}>
            <div className="regular" style={{ direction: 'rtl', fontSize: '25px', fontWeight: 'bolder' }}>הזמינו שולחן באפקה</div>
          </div>
          <br></br>
        </div>
        <div>
        <SearchForm user={this.props.user} onButtonClick={handleButtonClick} />
        </div>
        <br></br>
        <br></br>
        <Info/>
        <img alt='' style={{ height: '350px', width: '700px', marginLeft: '400px' }} src={Map} />
        <div>
        </div>
        <Bottom />
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


