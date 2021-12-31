import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    console.log(this.state.term);

    return (
      // <div className="ui segment">
      //   <div className="ui massive icon input">
      //     <input
      //       type="text"
      //       value={this.state.term}
      //       onChange={(e) => this.setState({ term: e.target.value })}
      //       placeholder="Search for TV Show..."
      //     />
      //     <i className="search icon"></i>
      //   </div>
      // </div>
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
    );
  }
}

export default SearchBar;
