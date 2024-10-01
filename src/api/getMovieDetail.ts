import axios from "axios";

// Detay almak için IMDb ID kullanıyoruz
export interface IMovieDetailParams {
  imdbID: string; // Filmin IMDb ID'si
}

// getMovieDetail fonksiyonu IMDb ID parametresiyle film detaylarını getiriyor
export const getMovieDetail = async (params: IMovieDetailParams) => {
  const { imdbID } = params;

  // OMDb API'den IMDb ID'sine göre film detaylarını alıyoruz
  const response = await axios.get("/", {
    params: {
      i: imdbID, // IMDb ID ile sorgu yapıyoruz
      //   apikey: process.env.REACT_APP_OMDB_API_KEY, // API anahtarı
    },
  });

  return response.data;
};
