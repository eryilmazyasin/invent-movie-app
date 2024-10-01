import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { getMovies, IMoviesParams } from "@/api/getMovies";
import { IMoviesResponseResult } from "@/interfaces/common";

// useMutation ile getMovies fonksiyonunu çalıştırıyoruz
const useMovies = (): UseMutationResult<
  IMoviesResponseResult,
  AxiosError,
  IMoviesParams
> => {
  return useMutation({
    mutationFn: (params: IMoviesParams) => {
      return getMovies(params);
    },
    onSuccess: (data) => {
      console.log(data);
    },
  });
};

export default useMovies;
