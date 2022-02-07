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
        <h2>Users</h2>
        <button>All Users</button>
        <button>Add User</button>
      </main>
    </>
  );
}

export default MangageUsers;
