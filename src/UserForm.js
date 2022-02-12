import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class UserForm extends React.Component {
  submitPlayer(event) {
    event.preventDefault();

    axios
      .post("http://localhost:4000/users", {
        firstName: this.refs.firstName.value,
        lastName: this.refs.lastName.value,
        userName: this.refs.userName.value,
        email: this.refs.email.value,
        ability: this.refs.ability.value,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    this.refs.firstName.value = "";
    this.refs.lastName.value = "";
    this.refs.userName.value = "";
    this.refs.email.value = "";
    this.refs.ability.value = "";
  }

  render() {
    return (
      <div className="row">
        <nav>
          <div class="nav-wrapper">
            <a href="#" class="brand-logo right">
              Subscriptions
            </a>
            <ul id="nav-mobile" class="left hide-on-med-and-down">
              <li>
                <Link to="/UsersManagement">Go Back</Link>
              </li>
            </ul>
          </div>
        </nav>
        <h1 className="center">Add a new user</h1>
        <form className="col s12" onSubmit={this.submitPlayer.bind(this)}>
          <div className="row">
            <div className="input-field col s2">
              <input id="firstName" ref="firstName" type="text" />
              <label htmlFor="firstName">First Name</label>
            </div>
            <div className="input-field col s2">
              <input id="lastName" ref="lastName" type="text" />
              <label htmlFor="lastName">Last Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s2">
              <input id="userName" ref="userName" type="text" />
              <label htmlFor="userName">userName</label>
            </div>
            <div className="input-field col s2">
              <input id="email" ref="email" type="text" />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-field col s2">
              <input id="ability" ref="ability" type="text" />
              <label htmlFor="ability">ability</label>
            </div>
          </div>
          <button className="btn waves-effect waves-light red" type="submit" nme="action">
            Add User
          </button>
        </form>
      </div>
    );
  }
}

export default UserForm;
