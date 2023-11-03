import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a href="#" className="navbar-brand">
          Brand
        </a>
        <button
          type="button"
          class="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav">
            <a href="#" className="nav-item nav-link active">
              Home
            </a>
            <a href="#" className="nav-item nav-link">
              Profile
            </a>
            <a href="#" className="nav-item nav-link">
              Issues
            </a>
            <a href="#" className="nav-item nav-link disabled" tabindex="-1">
              New Issue
            </a>
          </div>
          <div className="navbar-nav ms-auto">
            <a href="#" className="nav-item nav-link">
              Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
