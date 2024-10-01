// create a .env file and enter your values
// REACT_APP_OMDB_API_KEY = e5805ab9
// REACT_APP_OMDB_BASE_URL=https://www.omdbapi.com/

export const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
export const BASE_URL = process.env.REACT_APP_OMDB_BASE_URL;

export const initialSearchTermValue = "Pokemon";
export const initialTypeValue = "movie";
export const noImageUrl =
  "https://dummyimage.com/400x600/000/fff&text=No+Image";
