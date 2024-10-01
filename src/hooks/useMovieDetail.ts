import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { getMovieDetail, IMovieDetailParams } from "@/api/getMovieDetail";
import { IMovieDetail } from "@/interfaces/common";

export const useMovieDetail = (
  params: IMovieDetailParams
): UseQueryResult<IMovieDetail, AxiosError> => {
  return useQuery({
    queryKey: ["movieDetail", params.imdbID],
    queryFn: () => getMovieDetail(params),
    enabled: !!params.imdbID,
  });
};
