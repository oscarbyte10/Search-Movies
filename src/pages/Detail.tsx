import React, { useState, useEffect } from "react";
import { IMovie } from "../models/IMovie";
import { useParams } from "react-router";
import ButtonBackToHome from "../components/ButtonBackToHome";
import { API_KEY } from "../config";

const Detail: React.FC = () => {
  const { slug = "" } = useParams();
  const [movie, setMovie] = useState<IMovie>();
  const fetchMovie = async (id: string) => {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
      });
  };

  useEffect(() => {
    fetchMovie(slug || "");
  });

  return (
    <>
      <ButtonBackToHome />
      {movie ? (
        <>
          <h1>{movie.Title}</h1>
          <img src={movie.Poster} alt="poster" />
          <h3>{movie.Actors}</h3>
          <span>{movie.Metascore}</span>
          <p>{movie.Plot}</p>
        </>
      ) : null}
    </>
  );
};

export default Detail;
