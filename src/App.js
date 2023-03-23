import "./App.css";
import React, { useState } from "react";
import Test from "./components/Test";

function App() {
  const [text, setText] = useState("sajid");
  return (
    <>
      <Test name={text} details={{ phone: "04323", pass: "600" }} />
      <button onClick={() => setText("fahim")}>Click me</button>
    </>
  );
}

export default App;
