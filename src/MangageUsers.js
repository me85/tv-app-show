import * as React from "react";
import { Link } from "react-router-dom";

function MangageUsers() {
  return (
    <>
      {/* <nav class="nav-wrapper">
        <Link to="/">Home</Link>
      </nav> */}
      <nav>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo right">
            Subscriptions
          </a>
          <ul id="nav-mobile" class="left hide-on-med-and-down">
            <li>
              {" "}
              <Link to="/">Home</Link>
            </li>
          </ul>
        </div>
      </nav>

      <br></br>
      <main>
        <h2>Users Management </h2>
        <h5>Visible only to the Admins</h5>
        <Link to={"/users"}>
          <button>Add User</button>
        </Link>
      </main>
    </>
  );
}

export default MangageUsers;
