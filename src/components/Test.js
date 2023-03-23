import React, { Component } from "react";

export class Test extends Component {
  constructor() {
    super();
    this.state = {
      data: 1,
    };
  }
  clickHandler() {
    this.setState({ data: this.state.data + 1 });
  }
  render() {
    return (
      <div>
        <h1>Hello{this.state.data}</h1>
        <button onClick={() => this.clickHandler()}>Click Me</button>
      </div>
    );
  }
}

export default Test;
