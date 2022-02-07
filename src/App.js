import React from "react";
import SearchBar from "./SearchBar";
import tvmaze from "./api/tvmaze";
import ShowList from "./ShowList";
import UserList from "./UserList";
import UserSingle from "./UserSingle";

import MangageUsers from "./MangageUsers";
import MovieInfo from "./MovieInfo";
import "./App.css";
import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";

class App extends React.Component {
  // state = { showes: [] };

  constructor(props) {
    super(props);
    this.state = {
      showes: [],
      players: [],
      currentPlayer: {},
    };

    this.updateCurrentPlayer = this.updateCurrentPlayer.bind(this);
  }

  componentDidMount() {
    const url = "http://localhost:4000/users";

    axios
      .get(url)
      .then((Response) => {
        this.setState({
          players: Response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  updateCurrentPlayer(item) {
    this.setState({
      currentPlayer: item,
    });
    // console.log(item);
  }

  onSearchSubmit = async (term) => {
    // console.log("hi");
    const response = await tvmaze.get("/search/shows", {
      params: { q: term },
    });
    this.setState({ showes: response.data });
  };

  render() {
    // console.log(this.state.showes);
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
          <Route path="/movies/:id" element={<MovieInfo />} />

          <Route
            path="about"
            element={
              <>
                <MangageUsers />
                <div className="col s3">
                  <UserList
                    players={this.state.players}
                    updateCurrentPlayer={this.updateCurrentPlayer}
                  />
                </div>

                <div>
                  <UserSingle player={this.state.currentPlayer} />
                </div>
              </>
            }
          />
        </Routes>
      </div>
    );
  }
}

export default App;
