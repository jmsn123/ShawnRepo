import React, { useState } from "react";

function InputCheckbox({ name, options }) {
  const [selected, setSelected] = useState("");

  return (
    <select
      className="form-select"
      defaultValue={selected}
      aria-label="Default select example"
    >
      <option defaultValue>Open this select menu</option>
      {options.map((option) => (
        <option value={option}>{option}</option>
      ))}
    </select>
  );
}

export default InputCheckbox;
