import InputCheckbox from "./inputCheckbox";
import React from "react";

function IssueInputForm() {
  function submitHandler(event) {
    event.preventDefault;
    const {} = event.target;
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="row justify-content-center align-items-center g-3 mt-3">
        <div className="col-auto d-flex align-items-center">
          <label className="m-2" for="inputPassword">
            Issue
          </label>
          <input
            type="password"
            className="form-control"
            id="inputPassword"
            placeholder="Issue"
          />
        </div>
        <div className="col-auto d-flex align-items-center">
          <label className="m-2" for="inputPassword">
            Status
          </label>
          <InputCheckbox />
        </div>
        <div className="col-auto d-flex align-items-center">
          <label className="m-2" for="inputPassword">
            Priority
          </label>
          <InputCheckbox />
        </div>
        <div className="col-auto d-flex align-items-center">
          <label className=" w-50" for="inputPassword">
            Assign to
          </label>
          <InputCheckbox />
        </div>
        <div class="input-group w-50">
          <span class="input-group-text">description</span>
          <textarea class="form-control" aria-label="With textarea"></textarea>
        </div>

        <div className="col-auto">
          <button type="submit" class="btn btn-primary">
            submit{" "}
          </button>
        </div>
      </div>
    </form>
  );
}

export default IssueInputForm;
