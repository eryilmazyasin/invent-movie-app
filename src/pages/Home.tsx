import React, { useEffect, useMemo, useState } from "react";

import "@/styles/home.scss";
import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

import Loading from "@/components/Loading";
import MovieItem from "@/components/MovieItem";
import Pagination from "@/components/Pagination";
import useMovies from "@/hooks/useMovies";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("Pokemon");
  const [type, setType] = useState("movie");
  const [year, setYear] = useState<string | undefined>(undefined);
  const [page, setPage] = useState(1);
  const { mutate, data, isPending, error } = useMovies();

  useEffect(() => {
    mutate({ searchTerm, type, year, page });
  }, [searchTerm, type, year, page]);

  const applyFilters = () => {
    setPage(1);
    mutate({ searchTerm, type, year, page });
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const renderMovieItems = useMemo(() => {
    if (!data) return;

    return (
      <div className="movie-list-wrapper">
        {data.Search.map((movie) => (
          <MovieItem key={movie.imdbID} movie={movie} />
        ))}
      </div>
    );
  }, [data]);

  const renderError = useMemo(() => {
    if (!error) return;

    return (
      <Typography variant="h3" component="h2">
        Error fetching movies
      </Typography>
    );
  }, [error]);

  const renderLoading = useMemo(() => {
    if (!isPending) return;

    return <Loading />;
  }, [isPending]);

  return (
    <Container>
      <h1>Movie Search</h1>
      <Box className="movie-filters-wrapper">
        {/* Search Term */}
        <TextField
          label="Search Movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Year Filter */}
        <TextField
          label="Year"
          value={year || ""}
          onChange={(e) => setYear(e.target.value)}
          type="number"
        />

        {/* Type Filter */}
        <FormControl className="type-filter">
          <InputLabel id="type-label">Type</InputLabel>
          <Select
            labelId="type-label"
            value={type}
            label="Type"
            onChange={(e) => setType(e.target.value)}
          >
            <MenuItem value="movie">Movies</MenuItem>
            <MenuItem value="series">TV Series</MenuItem>
            <MenuItem value="episode">Episodes</MenuItem>
          </Select>
        </FormControl>

        {/* Apply Filters Button */}
        <Button
          variant="contained"
          onClick={applyFilters}
          endIcon={<SendIcon />}
        >
          Apply Filters
        </Button>
      </Box>

      {renderLoading}
      {renderError}
      {renderMovieItems}
      <Pagination
        page={page}
        data={data}
        onPreviousPage={handlePreviousPage}
        onNextPage={handleNextPage}
      />
    </Container>
  );
};

export default Home;
