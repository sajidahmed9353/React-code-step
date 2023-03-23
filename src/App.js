import React, { Component } from "react";
import Test from "./components/Test";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "sajid",
    };
  }
  render() {
    return (
      <div>
        <Test name={this.state.name} />
        <button
          onClick={() => {
            this.setState({ name: "fahim" });
          }}
        >
          Click me
        </button>
      </div>
    );
  }
}

export default App;
