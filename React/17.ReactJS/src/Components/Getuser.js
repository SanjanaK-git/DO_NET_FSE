import React, { Component } from "react";


class Getuser extends Component {


  constructor(props) {

    super(props);

    this.state = {

      user: null

    };

  }



  async componentDidMount() {


    const response = await fetch(
      "https://api.randomuser.me/"
    );


    const data = await response.json();


    this.setState({

      user: data.results[0]

    });


  }



  render() {


    if(this.state.user === null){

      return <h2>Loading...</h2>;

    }



    const user = this.state.user;



    return (

      <div>


        <h1>User Details</h1>


        <img

          src={user.picture.large}

          alt="user"

          width="200"

        />


        <h2>

          Title: {user.name.title}

        </h2>


        <h2>

          First Name: {user.name.first}

        </h2>


      </div>

    );

  }

}


export default Getuser;
