import React, { useEffect, useState } from "react";

import { IMoviesParams } from "@/api/getMovies";
import MovieItem from "@/components/MovieItem";
import { initialSearchTermValue, initialTypeValue } from "@/constants";
import useMovies from "@/hooks/useMovies";

type IType = "movie" | "series" | "episode";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState(
    initialSearchTermValue || "Pokemon"
  ); // Varsayılan arama terimi "Pokemon"
  const [type, setType] = useState<IType>(initialTypeValue);
  const [year, setYear] = useState<string | undefined>(undefined);
  const [page, setPage] = useState(1);

  // useMovies hook'u ile mutate fonksiyonunu alıyoruz
  const { mutate, data, isPending, error } = useMovies();

  // Uygulama ilk yüklendiğinde "Pokemon" araması yapılacak
  useEffect(() => {
    const params: IMoviesParams = {
      searchTerm: "Pokemon",
      type,
      year,
      page,
    };
    mutate(params); // İlk yükleme sırasında Pokemon araması tetikleniyor
  }, []); // Boş dependency array, sadece component mount olduğunda çalışır

  // Arama ve filtreleri uygulamak için fonksiyon
  const applyFilters = () => {
    const params: IMoviesParams = {
      searchTerm,
      type,
      year,
      page,
    };
    mutate(params); // mutate fonksiyonuyla istek tetiklenir
  };

  // Yükleniyor durumunu kontrol et
  if (isPending) return <div>Loading...</div>;

  // Hata durumunu kontrol et
  if (error) return <div>Error loading movies</div>;

  return (
    <div>
      <h1>Movie List</h1>
      <div style={{ marginBottom: "20px" }}>
        {/* Arama alanı */}
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Arama terimini güncelleme
          placeholder="Search for movies"
        />

        {/* Tür seçme */}
        <select
          value={type}
          onChange={(e) =>
            setType(e.target.value as "movie" | "series" | "episode")
          }
        >
          <option value="movie">Movies</option>
          <option value="series">TV Series</option>
          <option value="episode">Episodes</option>
        </select>

        {/* Yıl filtresi */}
        <input
          type="number"
          value={year || ""}
          onChange={(e) => setYear(e.target.value || undefined)} // Yıl filtresi
          placeholder="Year (optional)"
        />

        {/* Filtreleri uygulama düğmesi */}
        <button onClick={applyFilters}>Apply Filters</button>
      </div>

      {/* Sayfa gezintisi */}
      <div style={{ marginBottom: "20px" }}>
        <button
          onClick={() => {
            setPage((prev) => Math.max(prev - 1, 1));
            applyFilters(); // Sayfa değiştiğinde tekrar filtre uygula
          }}
          disabled={page === 1}
        >
          Previous Page
        </button>
        <button
          onClick={() => {
            setPage((prev) => prev + 1);
            applyFilters(); // Sayfa değiştiğinde tekrar filtre uygula
          }}
          disabled={!data?.Search}
        >
          Next Page
        </button>
      </div>

      {/* Filmleri listeleme */}
      {data?.Search ? (
        <MovieItem movies={data.Search} />
      ) : (
        <div>No movies found</div>
      )}
    </div>
  );
};

export default Home;
