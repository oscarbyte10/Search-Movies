import React, { useState } from "react";
import Title from "../components/Title";
import SeachForm from "../components/SearchForm";
import { IMovie } from "../models/IMovie";
import MoviesList from "../components/MoviesList/MoviesList";

const Home: React.FC = () => {
  const [usedSearch, setUsedSearch] = useState(false);
  const [results, setResults] = useState<IMovie[]>([]);

  const handleResults = (results: IMovie[]): void => {
    setResults(results);
    setUsedSearch(true);
  };

  const renderResults = () =>
    results.length === 0 ? (
      <p>
        Sorry!
        <span role="img" aria-label="sorry">
          🥺
        </span>
        Results not found
      </p>
    ) : (
      <MoviesList movies={results} />
    );

  return (
    <>
      <Title>Search Movies</Title>
      <div className="SearchForm-wrapper">
        <SeachForm onResults={handleResults} />
      </div>
      {usedSearch ? (
        renderResults()
      ) : (
        <small>Use the form to search a movie</small>
      )}
    </>
  );
};

export default Home;
