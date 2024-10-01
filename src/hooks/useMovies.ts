import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { getMovies, IMoviesParams } from "@/api/getMovies";
import { IMoviesResponseResult } from "@/interfaces/common";

// useMutation ile getMovies fonksiyonunu çalıştırıyoruz
const useMovies = () => {
  const queryClient = useQueryClient(); // React Query'nin queryClient'ını alıyoruz

  return useMutation<IMoviesResponseResult, AxiosError, IMoviesParams>({
    mutationFn: (params: IMoviesParams) => {
      return getMovies(params); // API çağrısını yap
    },
    onSuccess: (data, variables) => {
      // Parametreleri kullanarak benzersiz queryKey oluşturuyoruz
      const { searchTerm, type, year, page } = variables;
      const queryKey = ["movies", searchTerm, type, year, page];

      // Mutation başarılı olunca veriyi React Query cache'ine kaydediyoruz
      queryClient.setQueryData(queryKey, data);

      console.log("Data successfully updated in the cache for:", queryKey);
    },
    onError: (error) => {
      console.error("Error fetching movies:", error);
    },
  });
};

export default useMovies;
