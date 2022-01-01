// import './ImageList.css';
import React from "react";
import ListCard from "./ListCard";
import Movie from "./Movie";
import { Link } from "react-router-dom";

const ShowList = (props) => {
  const showes = props.showes.map((show) => {
    return (
      <Link to={`/movies/${show.show.id}`}>
        <ListCard key={show.show.id} show={show.show.name} showGenres={show.show.genres[0]} />
      </Link>
    );
  });

  return (
    <>
      <div>{showes}</div>
    </>
  );
};

export default ShowList;
