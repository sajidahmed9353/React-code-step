import React, { Component } from "react";

export class Test extends Component {
  constructor() {
    super();
    console.log("constructor");
    this.state = {
      name: "sajid",
    };
  }
  render() {
    console.log("render");
    return (
      <div>
        <h1>Hello {this.state.name}</h1>
      </div>
    );
  }
}

export default Test;
