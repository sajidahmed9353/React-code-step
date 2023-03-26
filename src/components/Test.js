import React, { Component } from "react";

export class Test extends Component {
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  render() {
    return (
      <div>
        <h1>Hello sajid</h1>
      </div>
    );
  }
}

export default Test;
