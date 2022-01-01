import * as React from "react";
import { Link } from "react-router-dom";

class MovieInfo extends React.Component {
  constructor(props) {
    super(props);

    // this.imageRef = React.createRef();
  }

  render() {
    // const { description, urls } = this.props.image;

    return (
      <>
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <main>
          <h2>What tvShow we like to save?</h2>
          <p>That feels like there is many tv-show</p>
        </main>
      </>
    );
  }
}

export default MovieInfo;
