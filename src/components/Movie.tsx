import React from "react";
import { Link } from "react-router-dom";

interface Props {
  id: string;
  title: string;
  year: string;
  poster: string;
}

const Movie: React.FC<Props> = ({ id, title, year, poster }) => (
  <>
    <Link to={`/detail/${id}`} className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={poster} alt={title} />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{title}</p>
            <p className="subtitle is-6">{year}</p>
          </div>
        </div>
      </div>
    </Link>
  </>
);

export default Movie;
