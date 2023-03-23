import React from "react";

function Test(props) {
  return (
    <div>
      <h1>Hello {props.name}</h1>
      <h1> {props.details.phone}</h1>
      <h1> {props.details.pass}</h1>
    </div>
  );
}

export default Test;
