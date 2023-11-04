import React, { useState } from "react";

function InputSelected({ name, label, options }) {
  const [selected, setSelected] = useState("");

  return (
    <>
      <label className="m-2 text-nowrap" htmlFor={""}>
        {label}
      </label>
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
    </>
  );
}

export default InputSelected;
