import React, { Component } from "react";
import EmployeeList from "./Components/EmployeeList";
import ThemeContext from "./ThemeContext";


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      theme: "light"
    };
  }


  render() {

    return (

      <ThemeContext.Provider value={this.state.theme}>

        <div>

          <h1>
            Employee Management Application
          </h1>

          <EmployeeList />

        </div>

      </ThemeContext.Provider>

    );
  }
}


export default App;
