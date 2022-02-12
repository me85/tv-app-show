import React from "react";
import { Link } from "react-router-dom";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    console.log(this.state.term);

    return (
      <>
        <nav>
          <div class="nav-wrapper">
            <a href="#!" class="brand-logo center">
              MOVIES DB
            </a>
            <ul class="right hide-on-med-and-down">
              <li>
                <a class="waves-effect waves-light btn">
                  <Link to="/UsersManagement">Manage Users</Link>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <br></br>
        <div>
          <div className="ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form light">
              <div className="field">
                <label>TV Search</label>
                <input
                  type="text"
                  value={this.state.term}
                  onChange={(e) => this.setState({ term: e.target.value })}
                  placeholder="Search for TV Show..."
                />
              </div>
            </form>
          </div>
          <br />
        </div>
      </>
    );
  }
}

export default SearchBar;
