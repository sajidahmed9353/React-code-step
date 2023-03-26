import React, { Component } from "react";
import Test from "./components/Test";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }

  render() {
    return (
      <div>
        {this.state.show ? <Test /> : null}
        <button onClick={() => this.setState({ show: !this.state.show })}>
          Click
        </button>
      </div>
    );
  }
}

export default App;
