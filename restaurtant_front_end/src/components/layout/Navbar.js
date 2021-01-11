import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "black" }}>
      <div className="container">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">

            <li className="nav-item">
              {/* home button in navbar */}
              <NavLink className="nav-link" exact to="/">
                <h3 style={{
                  width: "300px",
                  color: "black",
                  backgroundColor: "white",
                  marginTop: "7px",
                }} class="btn btn-default mr-2" ><b>Home</b></h3>
              </NavLink>
            </li>
            {/* restaurent name in navbar  */}
            <Link className="navbar-brand" href="/">
              <h1 style={{ color: "red", border: "solid black 5px", backgroundColor: "lightblue", borderRadius: "20px", width: "500px", left: "5px" }}> Zonions Restaurant</h1>
            </Link>
            {/* login  button in navbar */}
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/Admin">
                <h3 style={{
                  width: "300px",
                  color: "black",
                  backgroundColor: "white",
                  marginTop: "7px",
                }} class="btn btn-default mr-2" ><b>Admin</b></h3>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
