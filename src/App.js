import React from "react";
import SearchBar from "./SearchBar";
import tvmaze from "./api/tvmaze";
import ShowList from "./ShowList";
import About from "./About";
import MovieInfo from "./MovieInfo";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

class App extends React.Component {
  state = { showes: [] };

  onSearchSubmit = async (term) => {
    console.log("hi");
    const response = await tvmaze.get("/search/shows", {
      params: { q: term },
    });
    this.setState({ showes: response.data });
  };

  render() {
    console.log(this.state.showes);
    return (
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ShowList showes={this.state.showes} />
              </>
            }
          />
          <Route path="about" element={<About />} />
          <Route path="movieInfo" element={<MovieInfo data={this.state} />} />
        </Routes>
      </div>
    );
  }
}

export default App;
