import React, { useEffect, useMemo, useState } from "react";

import "@/styles/home.scss";
import { Container } from "@mui/material";

import FiltersSection from "@/components/FiltersSection";
import Loading from "@/components/Loading";
import MovieItem from "@/components/MovieItem";
import Pagination from "@/components/Pagination";
import ResultMessage from "@/components/ResultMessage";
import useMovies from "@/hooks/useMovies";
import { IType } from "@/interfaces/common";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("Pokemon");
  const [type, setType] = useState<IType>("movie");
  const [year, setYear] = useState<string | undefined>(undefined);
  const [page, setPage] = useState(1);
  const { mutate, data, isPending, error } = useMovies();

  useEffect(() => {
    mutate({ searchTerm, type, year, page });
  }, []);

  const handleApplyFilters = () => {
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
    if (!data || !data.Search) return;

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

    return <ResultMessage text="Error fetching movies" />;
  }, [error]);

  const renderLoading = useMemo(() => {
    if (!isPending) return;

    return <Loading />;
  }, [isPending]);

  const renderNoResult = () => {
    if (data && !data.Error) return;

    return <ResultMessage text="There is nothing to show." />;
  };

  return (
    <Container>
      <h1>Movie Search</h1>
      <FiltersSection
        searchTerm={searchTerm}
        year={year}
        type={type}
        onApplyFilters={handleApplyFilters}
        onSearchTermChange={(value) => setSearchTerm(value)}
        onTypeChange={(value) => setType(value as IType)}
        onYearChange={(value) => setYear(value)}
      />

      {renderLoading}
      {renderError}
      {renderNoResult()}
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
