import React, { Component } from "react";
import "./Style.css";
import Navbar from "./NavbarManager";
import Divider from "@material-ui/core/Divider";
import AddTableForm from "./AddTableForm";
import { saveItem } from "../Action/SaveItem";
import { connect } from "react-redux";
import { saveUser } from "../Action/SaveUser";
import Table from "./Table";
import Bottom from "./Bottom";

class TableMap extends Component {
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
    const handleButtonClick = async (Name, Capacity) => {
      console.log(Name);
      console.log(Capacity);

      const newItem = {
        name: Name,
        type: "Table",
        itemAttributes: {
          capacity: Capacity,
        },
      };

      console.log(email);
      console.log(space);

      const dataJson = JSON.stringify(newItem);
      await fetch("http://localhost:8041/twins/items/" + space + "/" + email, {
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
              this.setState({ error: "השולחן נוסף בהצלחה" });
              console.log("200ok");
              console.log(d);
            });
          } else {
            response.json().then((x) => {
              this.setState({
                error: "המשתמש אינו רשאי לעשות פעולה זו",
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
      window.location.reload(true);
    };

    return (
      <div>
        <Navbar />
        <h1
          className="regular"
          style={{
            color: "black",
            textAlign: "center",
            marginTop: "100px",
            fontWeight: "bolder",
          }}>
          הוספת שולחן
        </h1>
        <AddTableForm
          onButtonClick={handleButtonClick}
          error={this.state.error}></AddTableForm>
        <div style={{ width: "900px", marginLeft: "300px" }}>
          <Divider variant="middle" style={{ marginTop: "60px" }} />
          <h1
            className="regular"
            style={{
              color: "black",
              textAlign: "center",
              marginTop: "60px",
              fontWeight: "bolder",
              zIndex: 2,
            }}>
            צפייה בשולחנות המסעדה
          </h1>
          <Table user={this.props.user}></Table>
        </div>
        <div style={{ marginTop: "900px", zIndex: 2 }}>
          <Bottom></Bottom>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    item: state.item,
    user: state.user,
  };
};
function mapDispatchToProps(dispatch) {
  return {
    saveItem: (item) => dispatch(saveItem(item)),
    saveUser: (user) => dispatch(saveUser(user)),
  };
}
const Map = connect(mapStateToProps, mapDispatchToProps)(TableMap);

export default Map;
