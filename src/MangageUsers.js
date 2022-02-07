import * as React from "react";
import { Link } from "react-router-dom";

function MangageUsers() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <br></br>
      <main>
        <h2>Users Management </h2>
        <h5>Visible only to the Admins</h5>
        <button>Add User</button>
      </main>
    </>
  );
}

export default MangageUsers;
