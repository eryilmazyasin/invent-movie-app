import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import ArrowBackIcon from "@mui/icons-material/ArrowBack"; // Geri dönme ikonu
import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  Typography,
} from "@mui/material";

import ResultMessage from "@/components/ResultMessage";
import { useMovieDetail } from "@/hooks/useMovieDetail";

const MovieDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // URL'den IMDb ID alıyoruz
  const navigate = useNavigate(); // Geri yönlendirme için useNavigate hook'u

  // useMovieDetail hook'u ile film detaylarını alıyoruz
  const {
    data: movieDetail,
    isLoading,
    error,
  } = useMovieDetail({ imdbID: id || "" });

  // Yükleniyor durumu
  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  // Hata durumu
  if (error || !movieDetail) {
    return (
      <ResultMessage text="Error loading movie details or movie not found." />
    );
  }

  // Geri gitme fonksiyonu
  const handleGoBack = () => {
    navigate("/"); // Ana sayfaya yönlendir
  };

  return (
    <Box sx={{ maxWidth: 800, margin: "0 auto", padding: "20px" }}>
      {/* Geri dönme ikonu */}
      <IconButton onClick={handleGoBack} sx={{ marginBottom: "16px" }}>
        <ArrowBackIcon />
      </IconButton>

      {/* Film Başlığı */}
      <Typography variant="h4" sx={{ marginBottom: "20px" }}>
        {movieDetail.Title}
      </Typography>

      {/* Film Posteri */}
      <Box
        sx={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}
      >
        <img
          src={
            movieDetail.Poster !== "N/A" ? movieDetail.Poster : "/no-image.jpg"
          }
          alt={movieDetail.Title}
          style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
        />
      </Box>

      {/* Film Detayları */}
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

      {/* Ana sayfaya dön düğmesi */}
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
