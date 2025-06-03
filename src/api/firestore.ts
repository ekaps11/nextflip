import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  doc,
  setDoc,
  deleteDoc,
  getDocs,
  collection,
  getDoc,
  DocumentData,
} from "firebase/firestore";
import { auth, db } from "../utils/firebase/firebase.utils";
import { Movie } from "./tmdb";

export const firestore = createApi({
  reducerPath: "firestoreApi",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["MyList"],
  endpoints: (builder) => ({
    addToList: builder.mutation<void, Movie>({
      async queryFn(movie) {
        const user = auth.currentUser;
        if (!user) return { error: { message: "Not logged in" } };

        await setDoc(
          doc(db, "users", user.uid, "myList", movie.id.toString()),
          movie
        );

        return { data: undefined };
      },
      invalidatesTags: () => {
        const uid = auth.currentUser?.uid;
        return uid ? [{ type: "MyList", id: uid }] : [];
      },
    }),

    removeFromList: builder.mutation<void, string>({
      async queryFn(movieId) {
        const user = auth.currentUser;
        if (!user) return { error: { message: "Not logged in" } };

        await deleteDoc(doc(db, "users", user.uid, "myList", movieId));

        return { data: undefined };
      },
      invalidatesTags: () => {
        const uid = auth.currentUser?.uid;
        return uid ? [{ type: "MyList", id: uid }] : [];
      },
    }),

    getMyList: builder.query<Movie[], string>({
      async queryFn(uid) {
        if (!uid) return { data: [] };

        try {
          const snapshot = await getDocs(
            collection(db, "users", uid, "myList")
          );

          const data = snapshot.docs.map((doc): Movie => {
            const raw = doc.data() as DocumentData;

            return {
              id: Number(doc.id),
              title: raw.title || "",
              name: raw.name || "",
              release_date: raw.release_date || "",
              backdrop_path: raw.backdrop_path || "",
              poster_path: raw.poster_path || "",
              overview: raw.overview || "",
              media_type: raw.media_type || "",
              original_language: raw.original_language || "",
              file_path: raw.file_path || "",
              runtime: raw.runtime || 0,
              known_for: raw.known_for || ({} as Movie),
              known_for_department: raw.known_for_department || "",
              genres: raw.genres || [],
              genre_ids: raw.genre_ids || [],
            };
          });

          return { data };
        } catch (e) {
          return { error: { message: (e as Error).message } };
        }
      },
      providesTags: (_result, _error, uid) => [{ type: "MyList", id: uid }],
    }),

    checkIsInList: builder.query<boolean, string>({
      async queryFn(movieId) {
        const user = auth.currentUser;
        if (!user) return { data: false };

        const ref = doc(db, "users", user.uid, "myList", movieId);
        const snapshot = await getDoc(ref);

        return { data: snapshot.exists() };
      },
      providesTags: () => {
        const uid = auth.currentUser?.uid;
        return uid ? [{ type: "MyList", id: uid }] : [];
      },
    }),
  }),
});

export const {
  useGetMyListQuery,
  useAddToListMutation,
  useRemoveFromListMutation,
  useCheckIsInListQuery,
} = firestore;
