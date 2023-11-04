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
          <label className="m-2" htmlFor="inputPassword">
            Issue
          </label>
          <InputCheckbox name="Issue" options={["hello"]} />
        </div>
        <div className="col-auto d-flex align-items-baseline">
          <label className="m-2" htmlFor="inputPassword">
            Status
          </label>
          <InputBox name="status" />
        </div>
        <div className="col-auto d-flex align-items-center">
          <label className="m-2" htmlFor="inputPassword">
            Priority
          </label>
          <InputCheckbox name="priority" options={["hello"]} />
        </div>
        <div className="col-auto d-flex align-items-center">
          <label className=" w-50" htmlFor="inputPassword">
            Assign to
          </label>
          <InputCheckbox name="assignedTo" options={[1, 2, 3, 4]} />
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
