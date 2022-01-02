import React from "react";

function Movie(props) {
  const { name, language, status, premiered, ended, image, summary, rating } = props.movie;
  return (
    <div>
      <p>Name: {name}</p>
      <p>rating: {rating.average}</p>

      <p>summary: {summary}</p>

      <p>language: {language}</p>
      <p>status: {status}</p>
      <p>premiered: {premiered}</p>
      <p>ended: {ended}</p>
      <p>
        <img src={image.medium} className="tv-image" alt="tv-image" />
      </p>
    </div>
  );
}
export default Movie;
