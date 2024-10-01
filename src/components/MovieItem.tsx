import React from "react";
import { useNavigate } from "react-router-dom";

import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import "./MovieItem.scss";

import { noImageUrl } from "@/constants";
import { IMovie } from "@/interfaces/common";

interface MovieItemProps {
  movie: IMovie;
}

const MovieItem: React.FC<MovieItemProps> = ({ movie }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/movie/${movie.imdbID}`);
  };

  return (
    <Card className="movie-card-item" onClick={handleCardClick}>
      <CardMedia
        component="img"
        height="350"
        image={movie.Poster !== "N/A" ? movie.Poster : noImageUrl}
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
