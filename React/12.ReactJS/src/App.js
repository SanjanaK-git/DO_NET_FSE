import React, { Component } from "react";
import Guest from "./Components/Guest";
import User from "./Components/User";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false
    };
  }


  handleLogin = () => {
    this.setState({
      isLoggedIn: true
    });
  };


  handleLogout = () => {
    this.setState({
      isLoggedIn: false
    });
  };


  render() {

    let page;

    if (this.state.isLoggedIn) {
      page = <User />;
    }
    else {
      page = <Guest />;
    }


    return (
      <div>

        <h1>Flight Ticket Booking App</h1>

        {
          this.state.isLoggedIn ?

          <button onClick={this.handleLogout}>
            Logout
          </button>

          :

          <button onClick={this.handleLogin}>
            Login
          </button>
        }


        {page}

      </div>
    );
  }
}

export default App;
