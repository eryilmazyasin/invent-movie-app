import React from "react";

import SendIcon from "@mui/icons-material/Send";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import "./FiltersSection.scss";

import { IType } from "@/interfaces/common";

interface IProps {
  searchTerm: string;
  year: string;
  type: IType;
  onSearchTermChange: (value: string) => void;
  onYearChange: (value: string) => void;
  onTypeChange: (value: string) => void;
  onApplyFilters: () => void;
}

const FiltersSection = (props: IProps) => {
  const {
    searchTerm,
    year,
    type,
    onSearchTermChange,
    onYearChange,
    onApplyFilters,
    onTypeChange,
  } = props;
  return (
    <Box className="movie-filters-wrapper">
      {/* Search Term */}
      <TextField
        label="Search Movies"
        value={searchTerm}
        onChange={(e) => onSearchTermChange(e.target.value)}
      />
      {/* Year Filter */}
      <TextField
        label="Year"
        value={year || ""}
        onChange={(e) => {
          if (/^\d*$/.test(e.target.value)) {
            onYearChange(e.target.value);
          }
        }}
        type="number"
      />
      {/* Type Filter */}
      <FormControl className="type-filter">
        <InputLabel id="type-label">Type</InputLabel>
        <Select
          labelId="type-label"
          value={type}
          label="Type"
          onChange={(e) => onTypeChange(e.target.value)}
        >
          <MenuItem value="movie">Movies</MenuItem>
          <MenuItem value="series">TV Series</MenuItem>
          <MenuItem value="episode">Episodes</MenuItem>
        </Select>
      </FormControl>
      {/* Apply Filters Button */}
      <Button
        variant="contained"
        onClick={onApplyFilters}
        endIcon={<SendIcon />}
      >
        Apply Filters
      </Button>
    </Box>
  );
};

export default FiltersSection;
