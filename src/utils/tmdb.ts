import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type MovieGenre = {
  id: number;
  name: string;
};

export type Movie = {
  id: number;
  title: string;
  name: string;
  release_date: string;
  backdrop_path: string;
  poster_path: string;
  overview: string;
  media_type: string;
  original_language: string;
  file_path: string;
  runtime: number;
  known_for: Movie;
  known_for_department: string;
  genres: MovieGenre[];
  genre_ids: number[];
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
  POPULAR: `discover/movie${extendedUrl}&page=1&with_original_language=en&without_genres=16%2C27`,
  INDONESIAN: `discover/movie${extendedUrl}&page=1&with_original_language=id&without_genres=27%2C18%2C99`,
  ANIME: `discover/movie${extendedUrl}&page=1&with_original_language=ja&with_genres=16`,
  KOREAN: `discover/movie${extendedUrl}&page=1&with_original_language=ko&without_genres=10749`,
  ANIMATION: `discover/movie${extendedUrl}&page=1&with_genres=16`,
  TOP_RATED: `movie/top_rated${extendedUrl}`,
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
