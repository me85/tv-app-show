import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class UserEdit extends React.Component {
  constructor(props) {
    super(props);
    this.updateUser = this.updateUser.bind(this);
  }
  updateUser(event) {
    event.preventDefault();

    let id = this.props.player._id;
    console.log(id);
    axios
      .put(`http://localhost:4000/user/${id}`, {
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
        <h1 className="center">Edit a new user</h1>
        <form className="col s12" onSubmit={this.updateUser.bind(this)}>
          <div className="row">
            <div className="input-field col s2 yellow">
              <input id="firstName" ref="firstName" type="text" />
              <label htmlFor="firstName"> {this.props.player.firstName}</label>
            </div>
            <div className="input-field col s2 yellow">
              <input id="lastName" ref="lastName" type="text" />
              <label htmlFor="lastName">{this.props.player.lastName}</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s2 yellow">
              <input id="userName" ref="userName" type="text" />
              <label htmlFor="userName">{this.props.player.userName}</label>
            </div>
            <div className="input-field col s2 yellow">
              <input id="email" ref="email" type="text" />
              <label htmlFor="email">{this.props.player.email}</label>
            </div>
            <div className="input-field col s2 yellow">
              <input id="ability" ref="ability" type="text" />
              <label htmlFor="ability"> {this.props.player.ability}</label>
            </div>
          </div>
          <button className="btn waves-effect waves-light red" type="submit" nme="action">
            Update User
          </button>
        </form>
      </div>
    );
  }
}

export default UserEdit;
