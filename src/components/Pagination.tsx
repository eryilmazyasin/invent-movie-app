import React from "react";

import { Box, Button, Typography } from "@mui/material";
import "./Pagination.scss";

import { IMoviesResponseResult } from "@/interfaces/common";

interface IProps {
  page: number;
  data: IMoviesResponseResult;
  onPreviousPage: () => void;
  onNextPage: () => void;
}
const Pagination = (props: IProps) => {
  const { page, data, onPreviousPage, onNextPage } = props;

  if (data && data.Error) return;

  return (
    <Box className="pagination-wrapper">
      <Button variant="outlined" onClick={onPreviousPage} disabled={page === 1}>
        Previous Page
      </Button>

      <Typography variant="body1">Page {page}</Typography>

      <Button
        variant="outlined"
        onClick={onNextPage}
        disabled={!data || data?.Search?.length === 0}
      >
        Next Page
      </Button>
    </Box>
  );
};

export default Pagination;
