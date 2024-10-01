import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { getMovies, IMoviesParams } from "@/api/getMovies";
import { IMoviesResponseResult } from "@/interfaces/common";

const useMovies = () => {
  const queryClient = useQueryClient();

  return useMutation<IMoviesResponseResult, AxiosError, IMoviesParams>({
    mutationFn: (params: IMoviesParams) => {
      return getMovies(params);
    },
    onSuccess: (data, variables) => {
      // const { searchTerm, type, year, page } = variables;
      // const queryKey = ["movies", searchTerm, type, year, page];
      // queryClient.setQueryData(queryKey, data);
      // console.log("Data successfully updated in the cache for:", queryKey);
    },
    onError: (error) => {
      console.error("Error fetching movies:", error);
    },
  });
};

export default useMovies;
