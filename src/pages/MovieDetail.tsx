import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import "@/styles/movieDetail.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Button, IconButton, Typography } from "@mui/material";

import Loading from "@/components/Loading";
import ResultMessage from "@/components/ResultMessage";
import { noImageUrl } from "@/constants";
import { useMovieDetail } from "@/hooks/useMovieDetail";

const MovieDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const {
    data: movieDetail,
    isLoading,
    error,
  } = useMovieDetail({ imdbID: id || "" });

  if (isLoading) {
    return <Loading />;
  }

  if (error || !movieDetail) {
    return (
      <ResultMessage text="Error loading movie details or movie not found." />
    );
  }

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <Box className="movie-detail-wrapper">
      <IconButton onClick={handleGoBack} sx={{ marginBottom: "16px" }}>
        <ArrowBackIcon />
      </IconButton>

      <Typography variant="h4" sx={{ marginBottom: "20px" }}>
        {movieDetail.Title}
      </Typography>

      <Box className="movie-detail-img">
        <img
          src={movieDetail.Poster !== "N/A" ? movieDetail.Poster : noImageUrl}
          alt={movieDetail.Title}
          style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
        />
      </Box>

      <Typography variant="body1" gutterBottom>
        <strong>Year:</strong> {movieDetail.Year}
      </Typography>
      <Typography variant="body1" gutterBottom>
        <strong>Genre:</strong> {movieDetail.Genre}
      </Typography>
      <Typography variant="body1" gutterBottom>
        <strong>Director:</strong> {movieDetail.Director}
      </Typography>
      <Typography variant="body1" gutterBottom>
        <strong>Actors:</strong> {movieDetail.Actors}
      </Typography>
      <Typography variant="body1" gutterBottom>
        <strong>Plot:</strong> {movieDetail.Plot}
      </Typography>
      <Typography variant="body1" gutterBottom>
        <strong>IMDb Rating:</strong> {movieDetail.imdbRating}
      </Typography>

      <Button
        variant="contained"
        onClick={handleGoBack}
        sx={{ marginTop: "20px" }}
      >
        Back to Home
      </Button>
    </Box>
  );
};

export default MovieDetail;
