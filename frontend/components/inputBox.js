import React from "react";

function InputBox({ name, inputClass = "form-control", label, placeholder }) {
  return (
    <>
      <label className="m-2" htmlFor="inputPassword">
        {label}
      </label>
      <div className="input-group">
        <input
          type="text"
          className={inputClass}
          placeholder={placeholder}
          aria-label="Username"
          name={name}
          aria-describedby="basic-addon1"
        />
      </div>
    </>
  );
}

export default InputBox;
