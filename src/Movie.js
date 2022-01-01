import React from "react";

function Movie(props) {
  const { name, language, status, premiered, ended } = props.movie;
  return (
    <div>
      <p>Name: {name}</p>
      <p>language: {language}</p>
      <p>status: {status}</p>
      <p>premiered: {premiered}</p>
      <p>ended: {ended}</p>
    </div>
  );
}

export default Movie;
