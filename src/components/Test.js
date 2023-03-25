import React, { Component } from "react";

export class Test extends Component {
  // constructor() {
  //   super();
  //   console.log("constructor");
  //   this.state = {
  //     name: "sajid",
  //   };
  // }
  componentDidMount() {
    console.log("componentDidMount");
  }
  render() {
    console.log("render");
    return (
      <div>
        <h1>Hello </h1>
        {/* <button onClick={() => this.setState({ name: "kadir" })}>
          Click 2
        </button> */}
      </div>
    );
  }
}

export default Test;
