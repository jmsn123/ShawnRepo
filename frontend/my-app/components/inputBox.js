import React from "react";

function InputBox({ name }) {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        aria-label="Username"
        name={name}
        aria-describedby="basic-addon1"
      />
    </div>
  );
}

export default InputBox;
