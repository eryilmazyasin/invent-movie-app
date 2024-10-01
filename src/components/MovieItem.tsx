import React from "react";

import { IMovies } from "@/interfaces/common"; // IMovie interface'i

interface IProps {
  movies: IMovies[];
}

const MovieList = ({ movies }: IProps) => {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.imdbID}>
          <h2>{movie.Title}</h2>
          <p>{movie.Year}</p>
          <img src={movie.Poster} alt={movie.Title} />
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
