import React from "react";
import SearchBar from "./SearchBar";
import tvmaze from "./api/tvmaze";
import ShowList from "./ShowList";
import "./App.css";

class App extends React.Component {
  state = { showes: [] };

  onSearchSubmit = async (term) => {
    console.log("hi");
    const response = await tvmaze.get("/search/shows", {
      params: { q: term },
    });
    // console.log(response);
    this.setState({ showes: response.data });
  };

  // https://api.tvmaze.com/search/shows?q=girls

  render() {
    console.log(this.state.showes);
    return (
      <div className="App">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ShowList showes={this.state.showes} />
      </div>
    );
  }
}

export default App;
