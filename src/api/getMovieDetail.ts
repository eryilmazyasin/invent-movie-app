import axios from "axios";

// Detay almak için IMDb ID kullanıyoruz
export interface IMovieDetailParams {
  imdbID: string; // Filmin IMDb ID'si
}

export const getMovieDetail = async (params: IMovieDetailParams) => {
  const { imdbID } = params;

  const response = await axios.get("/", {
    params: {
      i: imdbID,
    },
  });

  return response.data;
};
