import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const tmdbConfig = {
  api: import.meta.env.VITE_TMDB,
  baseUrl: "https://api.themoviedb.org/3",
  image: "https://image.tmdb.org/t/p/original",
};

export const { api, baseUrl, image } = tmdbConfig;
export const extendedUrl = `?api_key=${api}&languages=en-US`;

export const MOVIE_REQUESTS = {
  TRENDING_OF_THE_DAY: `trending/all/day${extendedUrl}`,
  TRENDING_OF_THE_WEEK: `trending/all/week${extendedUrl}`,
  NEXTFLIP_ORIGIN: `discover/tv${extendedUrl}`,
  TOP_RATED: `movie/top_rated${extendedUrl}`,
  ACTION: `discover/movie${extendedUrl}&with_genre=28`,
  COMEDY: `discover/movie${extendedUrl}with_genre=35`,
  HORROR: `discover/movie${extendedUrl}&with_genre=27`,
  ROMANCE: `discover/movie${extendedUrl}&with_genre=10749`,
  DOCUMENTARY: `discover/movie${extendedUrl}&with_genre=99`,
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
