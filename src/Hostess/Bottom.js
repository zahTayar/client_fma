import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import "./Style.css";

class Botton extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            backgroundColor: "black",
            height: "100px",
            marginTop: "116px",
          }}>
          <div
            className="brand-logo"
            style={{
              marginLeft: "300px",
              fontSize: "40px",
              color: "rgba(106, 196, 255)",
              marginTop: "15px",
              position: "absolute",
              zIndex: "1",
              textDecoration: "none",
            }}>
            Tableing
          </div>
          <Button
            className="regular"
            variant="dark"
            style={{
              borderColor: "white",
              backgroundColor: "black",
              color: "white",
              fontSize: "17px",
              borderRadius: "30px",
              width: "200px",
              height: "45px",
              fontWeight: "bolder",
              marginLeft: "1000px",
              marginTop: "20px",
            }}>
            צריכים עזרה? לחצו כאן
          </Button>{" "}
        </div>
      </div>
    );
  }
}
export default Botton;
