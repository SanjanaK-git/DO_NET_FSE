import React, { Component } from "react";

class EventExample extends Component {

  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      message: ""
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  sayHello = () => {
    alert("Hello! Welcome to React Events");
  };

  sayWelcome = (msg) => {
    alert(msg);
  };

  onPress = () => {
    alert("I was clicked");
  };


  render() {
    return (
      <div>

        <h1>React Event Examples</h1>

        <h2>Counter: {this.state.count}</h2>

        <button onClick={() => {
          this.increment();
          this.sayHello();
        }}>
          Increase
        </button>

        <button onClick={this.decrement}>
          Decrement
        </button>

        <br /><br />

        <button onClick={() => this.sayWelcome("Welcome")}>
          Say Welcome
        </button>

        <br /><br />

        <button onClick={this.onPress}>
          OnPress
        </button>

      </div>
    );
  }
}

export default EventExample;
