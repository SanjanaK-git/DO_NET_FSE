import React, { Component } from "react";

class Register extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      error: ""
    };
  }


  handleChange = (event) => {

    this.setState({
      [event.target.name]: event.target.value
    });

  };


  handleSubmit = (event) => {

    event.preventDefault();


    const { name, email, password } = this.state;


    if (name.length < 5) {

      this.setState({
        error: "Name should have at least 5 characters"
      });

      return;

    }


    if (!email.includes("@") || !email.includes(".")) {

      this.setState({
        error: "Enter valid email address"
      });

      return;

    }


    if (password.length < 8) {

      this.setState({
        error: "Password should have at least 8 characters"
      });

      return;

    }


    alert("Registration Successful");


    this.setState({
      name:"",
      email:"",
      password:"",
      error:""
    });

  };


  render() {

    return (

      <div>

        <h1>Mail Registration Form</h1>


        <form onSubmit={this.handleSubmit}>


          <label>Name:</label>

          <br />

          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />


          <br /><br />


          <label>Email:</label>

          <br />

          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />


          <br /><br />


          <label>Password:</label>

          <br />

          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />


          <br /><br />


          <button type="submit">
            Register
          </button>


        </form>


        <p style={{color:"red"}}>
          {this.state.error}
        </p>


      </div>

    );

  }

}


export default Register;
