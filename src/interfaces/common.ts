export interface IMovie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

interface Rating {
  Source: string;
  Value: string;
}

export interface IMoviesResponseResult {
  Response: string;
  Search: IMovie[];
  totalResults: string;
  Error: string;
}
