import React from "react";
import Test from "./components/Test";

function App() {
  const [name, setName] = React.useState("");
  return (
    <div className="App">
      <Test name={name} />
      <button onClick={() => setName("fahim")}>Click</button>
    </div>
  );
}

export default App;
