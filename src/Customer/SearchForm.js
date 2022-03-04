import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Select from "react-select";
import axios from "../axios";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      numberOfPeople: "Number Of",
      day: "Day",
      hour: "Hour",
      wrongInput: false,
      error: false,
      errorMsg: "",
      emptyTables: [],
      showModal: false,
      chosenTable: "",
    };
  }

  findTable = (e) => {
    e.preventDefault();
    if (
      !this.state.wrongInput &&
      this.state.numberOfPeople !== "Number Of" &&
      this.state.day !== "Day"
    ) {
      const operation = {
        type: "reserveTable",
        invokedBy: {
          userId: {
            space: this.props.user.user.userId.space,
            email: this.props.user.user.userId.email,
          },
        },
        item: {
          itemId: {
            space: "2021b.lidar.ben.david",
            id: "99",
          },
        },
        operationAttributes: {
          time:
            this.state.hour +
            "-" +
            (parseInt(this.state.hour, 10) + 2).toString() +
            "-" +
            this.state.day,
          capacity: this.state.numberOfPeople,
          customerName: this.props.user.user.username,
          chosenTable: "",
        },
      };
      console.log(operation);
      axios
        .post("operations", operation)
        .then((response) => {
          console.log(response);
          let tables = response.data.operationAttributes.emptyTables;
          if (tables.length === 0) {
            this.setState({
              errorMsg: "There are no empty table for this details",
              error: true,
            });
          } else {
            this.setState({ emptyTables: tables });
          }
        })
        .catch((error) => {
          this.setState({ error: true, errorMsg: error.response.data.message });
        });
    } else {
      this.setState({ errorMsg: "You must fill all details", error: true });
    }
  };

  handleChooseTable = (tableNum) => {
    console.log(tableNum);
    this.setState({ showModal: true, chosenTable: tableNum });
  };
  handleReserve = () => {
    const operation = {
      type: "reserveTable",
      invokedBy: {
        userId: {
          space: this.props.user.user.userId.space,
          email: this.props.user.user.userId.email,
        },
      },
      item: {
        itemId: {
          space: "2021b.lidar.ben.david",
          id: "99",
        },
      },
      operationAttributes: {
        time:
          this.state.hour +
          "-" +
          (parseInt(this.state.hour, 10) + 2).toString() +
          "-" +
          this.state.day,
        capacity: this.state.numberOfPeople,
        customerName: this.props.user.user.username,
        chosenTable: this.state.chosenTable,
      },
    };
    axios
      .post("operations", operation)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        this.setState({ error: true, errorMsg: error.response.data.message });
      });
    window.location.reload(false);
  };

  handleChangeNumOfPeople = (e) => {
    this.setState({ numberOfPeople: e.value, error: false, emptyTables: [] });
  };
  handleChangeDay = (e) => {
    this.setState({ day: e.value, error: false, emptyTables: [] });
  };
  handleClose = () => {
    this.setState({ showModal: false });
  };
  handleChangeHour = (e) => {
    const d = new Date();
    if (
      (this.state.day.split("-")[0] === d.getDate().toString() &&
        this.state.day.split("-")[1] === d.getMonth().toString() &&
        parseInt(e.value, 10) <= d.getHours()) ||
      this.state.day === "Day"
    ) {
      this.setState({ hour: "Wrong Input", wrongInput: true, emptyTables: [] });
    } else {
      this.setState({
        hour: e.value,
        error: false,
        wrongInput: false,
        emptyTables: [],
      });
    }
  };

  render() {
    let chooseTables = null;
    let error = null;
    if (this.state.error) {
      error = (
        <div className="alert alert-danger alert-sm">
          <span className="fw-semi-bold">Error:</span> {this.state.errorMsg}.
        </div>
      );
    }
    if (this.state.emptyTables.length > 0) {
      chooseTables = this.state.emptyTables.map((table) => (
        <ListItem
          onClick={() => this.handleChooseTable(table)}
          divider
          style={{
            marginLeft: ".7rem",
            marginBottom: ".7rem",
            backgroundColor: "rgba(106, 196, 255)",
            width: "100px",
            paddingRight: "5px",
            borderRadius: "20px",
          }}
          button
          key={table}>
          <ListItemText
            primary={
              <Typography style={{ color: "white" }}>
                Table Number {table}{" "}
              </Typography>
            }
          />
        </ListItem>
      ));
    }
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const hours = ["10", "12", "14", "16", "18", "20", "22"];
    const numberOfPeopleOptions = [];
    const daysOptions = [];
    const hoursOptions = [];
    for (let j = 0; j < hours.length; j++) {
      hoursOptions.push({
        label: `${hours[j]}:00`,
        value: hours[j],
      });
    }
    const today = new Date();
    const tomorrow = new Date(today);
    for (let i = 2; i < 15; i += 1) {
      numberOfPeopleOptions.push({
        label: `${i} People`,
        value: i.toString(),
      });
      daysOptions.push({
        label:
          days[tomorrow.getDay()] +
          ", " +
          tomorrow.getDate().toString() +
          " " +
          months[tomorrow.getMonth()],
        value:
          tomorrow.getDate().toString() +
          "-" +
          (tomorrow.getMonth() + 1).toString(),
      });
      tomorrow.setDate(tomorrow.getDate() + 1);
    }
    let modal = null;
    if (this.state.showModal) {
      console.log(this.state.numberOfPeople);
      modal = (
        <div>
          <Dialog
            open={this.state.showModal}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description">
            <DialogTitle id="alert-dialog-title">
              {"Please Confirm Your Resrevation :"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Number Of People: {this.state.numberOfPeople}
                <br></br>
                Time: {this.state.day + ", " + this.state.hour + ":00"}
                <br></br>
                Table Number: {this.state.chosenTable}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                style={{
                  borderColor: "white",
                  backgroundColor: "black",
                  color: "white",
                  borderRadius: "30px",
                  marginTop: "20px",
                }}
                onClick={this.handleClose}
                color="primary">
                Disagree
              </Button>
              <Button
                style={{
                  borderColor: "white",
                  backgroundColor: "black",
                  color: "white",
                  borderRadius: "30px",
                  marginTop: "20px",
                }}
                onClick={this.handleReserve}
                color="primary"
                autoFocus>
                Agree
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    }

    return (
      <div>
        {modal}
        <div
          style={{
            display: "flex",
            justifyContent: "left",
            alignItems: "center",
            width: "100vh",
            height: "20vh",
            padding: "80px",
          }}>
          <form
            style={{
              width: "100vh",
              height: "20vh",
              marginLeft: "100px",
            }}
            onSubmit={this.findTable}>
            {error}
            <table style={{ width: "150vh", height: "30vh" }}>
              <th style={{ padding: "5px" }}>
                <Select
                  autoFocus={true}
                  placeholder={this.state.numberOfPeople.concat(" People")}
                  value={this.state.numberOfPeople}
                  onChange={this.handleChangeNumOfPeople}
                  options={numberOfPeopleOptions}
                />
              </th>
              <th style={{ padding: "5px" }}>
                <Select
                  autoFocus={true}
                  placeholder={this.state.day}
                  value={this.state.day}
                  onChange={this.handleChangeDay}
                  options={daysOptions}
                />
              </th>
              <th style={{ padding: "5px", height: "20px" }}>
                <Select
                  placeholder={this.state.hour}
                  value={this.state.hour}
                  onChange={this.handleChangeHour}
                  options={hoursOptions}
                />
              </th>
              <th style={{ padding: "5px", marginLeft: "100px" }}>
                {/* <Button type='submit'>Find Me Table</Button> */}
                <Button
                  className="regular"
                  type="submit"
                  style={{
                    borderColor: "white",
                    backgroundColor: "rgba(106, 196, 255)",
                    color: "white",
                    fontSize: "17px",
                    borderRadius: "30px",
                    width: "200px",
                    height: "45px",
                    fontWeight: "bolder",
                    marginTop: "20px",
                  }}>
                  Find Me Table
                </Button>{" "}
              </th>
            </table>
          </form>
        </div>
        <div>
          <List
            style={{
              flexWrap: "wrap",
              display: "flex",
              justifyContent: "center",
              paddingBottom: "50px",
              marginTop: "-60px",
              marginLeft: "250px",
              position: "absolute",
            }}>
            {chooseTables}
          </List>
        </div>
      </div>
    );
  }
}
export default SearchForm;
