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
        <div>
          <Link to="/about">
            <i class="film icon"></i>
            Watchlist
          </Link>
        </div>
        <div>
          <div className="ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
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
        </div>
      </>
    );
  }
}

export default SearchBar;
