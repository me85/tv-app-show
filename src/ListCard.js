import React from "react";
import { Link } from "react-router-dom";

class ListCard extends React.Component {
  constructor(props) {
    super(props);

    // this.imageRef = React.createRef();
  }

  //   componentDidMount() {
  //     this.imageRef.current.addEventListener('load', this.setSpans);
  //   }

  //   setSpans = () => {
  //     console.log(this.imageRef.current.clientHeight);
  //   };

  render() {
    // const { description, urls } = this.props.image;

    return (
      <div class="ui relaxed divided list">
        <div class="item">
          <div class="content">
            <a class="header">{this.props.show}</a>
            <div class="description"> {this.props.showGenres}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListCard;

// <Link to={`/movies/${show.show.id}`}>
//           <Movie key={show.show.id} movie={show} />
//           </Link>
