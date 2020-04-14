import React from "react";
import { IMovie } from "../../models/IMovie";
import Movie from "../Movie";
import style from "./MoviesList.css";

interface Props {
  movies: IMovie[];
}

const MoviesList: React.FC<Props> = ({ movies }) => {
  return (
    <div className={style.moviesList}>
      {movies.map((movie) => (
        <div key={movie.imdbID} className={style.movieItem}>
          <Movie
            id={movie.imdbID}
            title={movie.Title}
            year={movie.Year}
            poster={movie.Poster}
          />
        </div>
      ))}
    </div>
  );
};

export default MoviesList;
