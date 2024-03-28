import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type Movie = {
  id: number;
  title: string;
  name: string;
  backdrop_path: string;
  poster_path: string;
  overview: string;
  file_path: string;
};

const tmdbConfig = {
  apiKey: import.meta.env.VITE_TMDB,
  baseUrl: "https://api.themoviedb.org/3",
  banner: "https://image.tmdb.org/t/p/original",
  image: "https://image.tmdb.org/t/p/w500",
};

export const { apiKey, baseUrl, banner, image } = tmdbConfig;
export const extendedUrl = `?api_key=${apiKey}`;

export const MOVIE_REQUESTS = {
  POPULAR: `discover/movie${extendedUrl}&with_original_language=en&without_genres=16%2C27&page=1`,
  INDONESIAN: `discover/movie${extendedUrl}&include_adult=false&with_original_language=id&without_genres=27%2C18%2C99`,
  KOREAN: `discover/movie${extendedUrl}&with_original_language=ko`,
  TOP_RATED: `movie/top_rated${extendedUrl}&page=1`,
  ANIMATION: `discover/movie${extendedUrl}&with_genres=16&page=1`,
};

// Define a service using a base URL and expected endpoints
export const tmdb = createApi({
  reducerPath: "tmdb",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["Get"],
  endpoints: ({ query }) => ({
    getMovie: query({
      query: (name: string) => name,
    }),
  }),
});

export const { useGetMovieQuery } = tmdb;
