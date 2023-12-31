import InputBox from "./inputBox";
import InputCheckbox from "./inputCheckbox";
import React from "react";

function IssueInputForm() {
  function submitHandler(event) {
    event.preventDefault();
    const { Issue, name, priority, status } = event.target;
    console.log(status.value);
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="row justify-content-center align-items-center g-3 mt-3">
        <div className="col-auto d-flex align-items-center justify-content-center">
          <InputBox name="Issue" label={"Issue"} options={["hello"]} />
        </div>
        <div className="col-auto d-flex align-items-baseline">
          <InputBox name="status" label={"status"} />
        </div>
        <div className="col-auto d-flex align-items-center">
          <InputBox name="priority" label={"priority"} options={["hello"]} />
        </div>
        <div className="col-auto d-flex align-items-center">
          <InputCheckbox
            name="assignedTo"
            label="assined to "
            options={[1, 2, 3, 4]}
          />
        </div>
        <div className="input-group w-50">
          <span className="input-group-text">description</span>
          <textarea
            className="form-control"
            name="Desc"
            aria-label="With textarea"
          ></textarea>
        </div>

        <div className="col-auto">
          <button type="submit" className="btn btn-primary">
            submit{" "}
          </button>
        </div>
      </div>
    </form>
  );
}

export default IssueInputForm;
