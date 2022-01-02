import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import tvmaze from "./api/tvmaze";
import Movie from "./Movie";

function MovieInfo(props) {
  const params = useParams();
  const [data, setData] = useState();
  console.log(params.id);

  useEffect(() => {
    const getMovieData = async () => {
      try {
        const response = await tvmaze.get(`shows/${params.id}`);

        setData(response.data);
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    getMovieData();
  }, []);

  if (!data) return "loading movie";

  return (
    <>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <main>
        <Movie movie={data} />
        <div>{/* <p>{this.state.data.name}</p> */}</div>
      </main>
    </>
  );
}

//     this.state = {
//       isLoading: false,
//       data: [],
//       id: this.props.id,
//       // index: this.props.imdb,
//     };
//   }

//   componentDidMount() {
//     this.setState({ isLoading: true });
//     // https://api.tvmaze.com/lookup/shows?tvrage=24493
//     // https://api.tvmaze.com/lookup/shows?tvrage=${this.state.index}
//     console.log("imbd", this.props.id);
//     fetch(` https://api.tvmaze.com/shows/${this.state.id}`)
//       .then((response) => response.json())
//       .then((response) => {
//         this.setState({
//           data: response,
//           isLoading: false,
//         });
//         console.log(this.state.data);
//       });
//   }

// render() {
//   return (

//   );
// }
// }

export default MovieInfo;
