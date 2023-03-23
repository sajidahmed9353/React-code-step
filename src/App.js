import "./App.css";
import React, { useState } from "react";
import Test from "./components/Test";

function App() {
  const [text, setText] = useState("");
  const clickHandler = () => {
    alert("Hi");
    setText("Sajid");
  };
  return (
    <>
      {/* <h1>Hello {text}</h1>
      <button onClick={clickHandler}>Click Me</button>
      <button onClick={() => alert("Hello")}>Click Me2</button> */}
      <Test/>
    </>
  );
}

export default App;
