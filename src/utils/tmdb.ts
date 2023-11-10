import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const tmdbConfig = {
  api: "554bf125275f0d7cab9423f8446408c6",
  baseUrl: "https://api.themoviedb.org/3",
  image: "https://image.tmdb.org/t/p/original",
};

export const { api, baseUrl, image } = tmdbConfig;
export const apiKey = `?api_key=${api}&languages=en-US`;

export const MOVIE_REQUESTS = {
  TRENDING_OF_THE_DAY: `trending/all/day${apiKey}`,
  TRENDING_OF_THE_WEEK: `trending/all/week${apiKey}`,
  NEXTFLIP_ORIGIN: `discover/tv${apiKey}`,
  TOP_RATED: `movie/top_rated${apiKey}`,
  ACTION: `discover/movie${apiKey}&with_genre=28`,
  COMEDY: `discover/movie${apiKey}with_genre=35`,
  HORROR: `discover/movie${apiKey}&with_genre=27`,
  ROMANCE: `discover/movie${apiKey}&with_genre=10749`,
  DOCUMENTARY: `discover/movie${apiKey}&with_genre=99`,
};

// Define a service using a base URL and expected endpoints
export const tmdb = createApi({
  reducerPath: "tmdb",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["Get"],
  endpoints: ({ query }) => ({
    get: query({
      query: (name: string) => name + apiKey,
    }),
  }),
});

export const { useGetQuery } = tmdb;
