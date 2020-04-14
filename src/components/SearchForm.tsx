import React, { useState, FormEvent } from "react";
import { IMovie } from "../models/IMovie";
import { API_KEY } from "../config";

interface Props {
  onResults: (results: IMovie[]) => void;
}

const SearchForm: React.FC<Props> = ({ onResults }) => {
  const [movie, setMovie] = useState("");

  const handleChange = (e: any) => {
    setMovie(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${movie}`)
      .then((res) => res.json())
      .then((data) => {
        const { Search = [] } = data;
        onResults(Search);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="field has-addons">
        <div className="control">
          <input
            onChange={handleChange}
            type="text"
            className="input"
            placeholder="Movie to see"
          />
        </div>
        <div className="control">
          <button className="button is-info">Search</button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
