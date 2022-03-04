import React, { Component } from "react";
import { saveUser } from "../Action/SaveUser";
import { connect } from "react-redux";
import NavigationBar from "../Basic/navigationBar";
import LoginForm from "./LoginForm";
import Bottom from "../Basic/Bottom";
import Background from "../img/Background.jpeg";

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
        userId: {
          space: this.props.user.user.space,
          email: this.props.user.user.email,
        },
        role: this.props.user.user.role,
        userName: this.props.user.user.userName,
        avatar: this.props.user.user.avatar,
      },
    });
    console.log(this.props.user.user);
  }
  handleChange(event) {
    this.setState({ email: event.target.email });
    this.setState({ space: event.target.space });
  }

  render() {
    const handleButtonClick = async (Email, Space) => {
      console.log(Email);
      console.log(Space);

      this.setState({
        isInProgress: true,
      });

      await fetch(
        "http://localhost:8041/twins/users/login/" + Space + "/" + Email
      )
        .then((response) => {
          if (response.status === 200) {
            this.setState({ succeded: true });
            response.json().then((d) => {
              const user = d;

              this.props.saveUser({
                isLoggedIn: true,
                user: {
                  userId: {
                    space: Space,
                    email: Email,
                  },
                  role: d.role,
                  userName: d.userName,
                  avatar: d.avatar,
                },
              });

              if (this.props.user.user.role === "MANAGER") {
                this.props.history.push("/tableMap");
              }
              if (this.props.user.user.userId.email == "lidar602@gmail.com") {
                this.props.history.push("/hostess");
              }
              if (this.props.user.user.role === "Player") {
                this.props.history.push("/dashboard");
              }

              this.setState({ isLoggedIn: true, error: "" });
            });
          } else {
            if (Email === "" && Space === "") {
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
    console.log(this.props.user.user);

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
