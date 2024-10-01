import React from "react";

import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import "./MovieItem.scss";

import { IMovie } from "@/interfaces/common";

interface MovieItemProps {
  movie: IMovie;
}

const MovieItem: React.FC<MovieItemProps> = ({ movie }) => {
  return (
    <Card className="movie-card-item">
      <CardMedia
        component="img"
        height="350"
        image={movie.Poster !== "N/A" ? movie.Poster : "/no-image.jpg"}
        alt={movie.Title}
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {movie.Title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Year: {movie.Year}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Type: {movie.Type}
        </Typography>
        <Typography className="imdbid-text">imdbID: {movie.imdbID}</Typography>
      </CardContent>
    </Card>
  );
};

export default MovieItem;
