import axios from "axios";

export interface IMoviesParams {
  searchTerm: string;
  type: string;
  year: string;
  page: number;
}

// getMovies fonksiyonunu parametreli hale getiriyoruz
export const getMovies = async (params: IMoviesParams) => {
  const { searchTerm, type = "movie", year, page = 1 } = params;

  console.log({ params });

  const response = await axios.get("/", {
    params: {
      s: searchTerm, // Arama terimi
      type: type, // Film, dizi veya bölüm
      y: year, // Yıl (isteğe bağlı)
      page: page, // Sayfa numarası
    },
  });

  return response.data;
};
