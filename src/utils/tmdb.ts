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
  genre: number[];
};

const tmdbConfig = {
  api: "554bf125275f0d7cab9423f8446408c6",
  baseUrl: "https://api.themoviedb.org/3",
  image: "https://image.tmdb.org/t/p/original",
};

export const { api, baseUrl, image } = tmdbConfig;
export const extendedUrl = `?api_key=${api}&languages=en-US`;

export const MOVIE_REQUESTS = {
  POPULAR: `movie/popular${extendedUrl}&page=1&region=ID`,
  TRENDING: `trending/all/day${extendedUrl}`,
  INDONESIAN: `discover/movie${extendedUrl}&with_original_language=id`,
  KOREAN: `discover/movie${extendedUrl}&with_original_language=ko`,
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
