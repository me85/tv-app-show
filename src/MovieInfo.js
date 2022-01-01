import * as React from "react";
import { Link } from "react-router-dom";
import Movie from "./Movie";

class MovieInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      data: [],
      // index: this.props.show,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    // https://api.tvmaze.com/lookup/shows?tvrage=24493
    // https://api.tvmaze.com/lookup/shows?tvrage=${this.state.index}
    // console.log("imbd", this.props);
    fetch(`https://api.tvmaze.com/lookup/shows?imdb=tt0944947`)
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          data: response,
          isLoading: false,
        });
        console.log(this.state.data);
      });
  }

  render() {
    return (
      <>
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <main>
          <Movie movie={this.state.data} />
          <div>{/* <p>{this.state.data.name}</p> */}</div>
        </main>
      </>
    );
  }
}

export default MovieInfo;
