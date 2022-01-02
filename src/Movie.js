import React from "react";

function Movie(props) {
  const { name, language, status, premiered, ended, image, summary, rating } = props.movie;
  return (
    <div>
      <p>Name: {name}</p>
      <div>
        <span dangerouslySetInnerHTML={{ __html: summary }}></span>
      </div>
      <p>rating: {rating.average}</p>
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
