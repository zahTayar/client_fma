import React, { Component } from "react";
import { saveUser } from "../Action/SaveUser";
import { connect } from "react-redux";
// import connect from "react-redux/lib/connect/connect";
import NavigationBar from "../Basic/navigationBar";
import LoginForm from "./LoginForm";
import Bottom from "../Basic/Bottom";
import Background from "../img/Background.jpeg";
import { useNavigate } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginSucces: false,
      isLoggedIn: false,
      succeded: false,
      submitted: false,
      error: "",
    };
    this.props.saveUser({
      isLoggedIn: false,
      user: {
        email: this.props.user.user.email,
        role: this.props.user.user.role,
        userName: this.props.user.user.userName,
        avatar: this.props.user.user.avatar,
      },
    });
  }
  handleChange(event) {
    this.setState({ email: event.target.email });
  }

  render() {
    const handleButtonClick = async (Email) => {
      // console.log(Email);

      this.setState({
        isInProgress: true,
      });

      await fetch(
        "http://localhost:5500/fma/users/login/" + Email
      )
        .then((response) => {
          
          if (response.status === 200) {
            this.setState({ succeded: true });
            response.json().then((d) => {
              const user = d;
              this.props.saveUser({
                isLoggedIn: true,
                user: {
                  email: Email,
                  role: d.role,
                  userName: d.userName,
                  avatar: d.avatar,
                },
              });
              console.log(user)
              const navigate =useNavigate();
              if (this.props.user.user.role === "MANAGER") {
                console.log()
                navigate.apply("/tableMap");
              }
              if (this.props.user.user.email === "") {
                this.props.history.push("/hostess");
              }
              if (this.props.user.user.role === "PLAYER") {
                this.props.history.push("/dashboard");
              }

              this.setState({ isLoggedIn: true, error: "" });
            });
          } else {
            if (Email === "" ) {
              this.setState({
                isLoggedIn: false,
                error: "על מנת להתחבר למערכת עליך להזין נתונים מתאימים",
              });
            } else {
              response.json().then((x) => {
                this.setState({
                  isLoginSucces: false,
                  error: "אחד או יותר מהנתונים שהוזנות אינם נכונים",
                });
              });
            }
          }
        })
        .catch((error) => {
          console.error("Error:", error.data);
        });
    };
    // console.log(this.props.user.user);

    return (
      <div>
        <NavigationBar />
        <div
          style={{
            backgroundImage: `url(${Background})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            marginTop: "-10px",
          }}>
          <div
            style={{
              width: "400px",
              height: "500px",
              borderColor: "rgba(106, 196, 255)",
            }}>
            <br></br>
            <br></br>
            <br></br>
            <LoginForm
              onButtonClick={handleButtonClick}
              error={this.state.error}></LoginForm>
          </div>
          <Bottom />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
function mapDispatchToProps(dispatch) {
  return {
    saveUser: (user) => dispatch(saveUser(user)),
  };
}

const SignIn = connect(mapStateToProps, mapDispatchToProps)(Login);
export default connect()(SignIn);
// export default Login;
