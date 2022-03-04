import React, { Component } from "react";
import "./Style.css";
import Navbar from "./NavbarHostee";
import { saveItem } from "../Action/SaveItem";
import { connect } from "react-redux";
import { saveUser } from "../Action/SaveUser";
import Bottom from "./Bottom";
import Button from "react-bootstrap/Button";
import photo from "../img/manager.jpeg";
import afeka from "../img/icon.png";

class HosteeDash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: "",
    };
    this.props.saveUser({
      user: this.props.user.user,
    });
    console.log(this.props.user.user);
  }
  handleChange(event) {
    this.setState({ name: event.target.name });
    this.setState({ capacity: event.target.capacity });
  }
  render() {
    const email = this.props.user.user.userId.email;
    const space = this.props.user.user.userId.space;

    const handleCovidClick = async (type) => {
      const operation = {
        type: "clasp",
        item: {
          itemId: {
            space: space,
            id: "ppppp",
          },
        },
        invokedBy: {
          userId: {
            space: space,
            email: email,
          },
        },
      };
      const dataJson = JSON.stringify(operation);
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
              this.setState({ error: "הפעולה בוצעה בהצלחה. כל ההזמנות בוטלו" });

              console.log("200ok");
              console.log(d);
            });
          } else {
            response.json().then((x) => {
              this.setState({
                errorMessage: x.message,
              });
            });
          }
          this.setState({ isSignup: true, error: "" });
        },
        (error) => {
          console.log(error);
          console.log("in error");
        }
      );
    };

    return (
      <div>
        <Navbar />
        <img
          alt=""
          style={{ height: "420px", width: "900px", marginLeft: "280px" }}
          src={photo}
        />

        <div
          className="regular"
          style={{
            marginTop: "40px",
            textAlign: "center",
            fontSize: "30px",
            fontWeight: "bolder",
          }}>
          מסעדת אפקה
          <img alt="" style={{ height: "100px", width: "120px" }} src={afeka} />
        </div>
        <div>
          <div
            className="regular"
            style={{
              direction: "rtl",
              fontWeight: "bold",
              marginRight: "400px",
              marginTop: "60px",
            }}>
            בלחיצה על כפתור זה כל השולחנות המוזמנים יבוטלו והמסעדה תעבור למצב
            משלוחים בלבד
          </div>
          <Button
            onClick={handleCovidClick}
            className="regular"
            variant="dark"
            style={{
              borderColor: "white",
              backgroundColor: "red",
              color: "white",
              fontSize: "17px",
              borderRadius: "30px",
              width: "100px",
              height: "45px",
              fontWeight: "bolder",
              marginLeft: "450px",
              marginTop: "-15px",
            }}>
            COVID-19
          </Button>
          <div
            className="regular"
            style={{
              color: "red",
              fontSize: "20px",
              marginTop: "20px",
              width: "500px",
              marginLeft: "500px",
            }}>
            {this.state.error}
          </div>
        </div>

        <div style={{ marginTop: "600px", zIndex: 2 }}>
          <Bottom></Bottom>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    item: state.newItem,
    user: state.user,
  };
};
function mapDispatchToProps(dispatch) {
  return {
    saveItem: (newItem) => dispatch(saveItem(newItem)),
    saveUser: (user) => dispatch(saveUser(user)),
  };
}
const Hostee = connect(mapStateToProps, mapDispatchToProps)(HosteeDash);

export default Hostee;
