import React, { useState } from "react";

function Test() {
  const [text, setText] = useState("");
  const [select, setSelect] = useState("");
  const [checkbox, setCheckbox] = useState(false);

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
      <select
        onChange={(e) => {
          setSelect(e.target.value);
        }}
      >
        <option>Sajid</option>
        <option>fahim</option>
        <option>kadir</option>
      </select>
      <input
        type="checkbox"
        name=""
        id=""
        onChange={(e) => {
          setCheckbox(e.target.checked);
        }}
      />
      <button onClick={() => console.log(text, select, checkbox)}>
        submit
      </button>
      <h3>{text}</h3>
    </div>
  );
}

export default Test;
