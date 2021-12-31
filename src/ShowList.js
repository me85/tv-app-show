// import './ImageList.css';
import React from "react";
import ListCard from "./ListCard";

const ShowList = (props) => {
  const showes = props.showes.map((show, index) => {
    return <ListCard key={index} show={show.show.name} showGenres={show.show.genres[0]} />;
  });

  return <div>{showes}</div>;
};

export default ShowList;
