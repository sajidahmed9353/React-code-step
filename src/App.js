import React, { Component } from "react";

export class App extends Component {
  constructor() {
    super();
    console.log("constructor");
    this.state = {
      name: "sajid",
    };
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }

  render() {
    console.log("render");
    return (
      <div>
        <h1>Hello {this.state.name}</h1>
        <button onClick={() => this.setState({ name: "kadir" })}>Click</button>
      </div>
    );
  }
}

export default App;
