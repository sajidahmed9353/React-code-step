import React, { Component } from "react";

export class App extends Component {
  constructor() {
    super();
    console.log("constructor");
    this.state = {
      name: "sajid",
    };
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
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
