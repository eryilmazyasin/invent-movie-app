import axios from "axios";

export interface IMoviesParams {
  searchTerm: string;
  type: string;
  year: string;
  page: number;
}

export const getMovies = async (params: IMoviesParams) => {
  const { searchTerm, type = "movie", year, page = 1 } = params;

  const response = await axios.get("/", {
    params: {
      s: searchTerm,
      type: type,
      y: year,
      page: page,
    },
  });

  return response.data;
};
