import React, { useState } from "react";

function Test() {
  const [text, setText] = useState("");
  const [visible, setVisible] = useState(true);
  return (
    <div>
      <h1>Form</h1>
      <label>Email</label>
      <input
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <br />
      <button onClick={() => setVisible(!visible)}>Toggle</button>
      {visible ? <h3>{text}</h3> : null}
    </div>
  );
}

export default Test;
