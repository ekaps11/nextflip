import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type Movie = {
  id: number;
  title: string;
  name: string;
  backdrop_path: string;
  poster_path: string;
  overview: string;
  iso_639_1: string;
  file_path: string;
  genre_ids: number[];
  media_type: string;
};

const tmdbConfig = {
  api: import.meta.env.VITE_TMDB,
  baseUrl: "https://api.themoviedb.org/3",
  banner: "https://image.tmdb.org/t/p/original",
  image: "https://image.tmdb.org/t/p/w500",
};

export const { api, baseUrl, banner, image } = tmdbConfig;
export const extendedUrl = `?api_key=${api}&languages=en-US`;

export const MOVIE_REQUESTS = {
  POPULAR: `movie/popular${extendedUrl}&page=1`,
  UPCOMING: `movie/upcoming${extendedUrl}&page=1`,
  INDONESIAN: `discover/movie${extendedUrl}&with_original_language=id`,
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
