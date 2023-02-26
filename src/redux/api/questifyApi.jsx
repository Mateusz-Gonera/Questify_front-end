import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_BASE_URL = 'http://localhost:3000/';
const API_GOIT_URL = "https://questify-backend.goit.global/";

export const questifyApi = createApi({
  reducerPath: "questifyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),

  tagTypes: ["Auth", "Card"],
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (newUser) => ({
        url: "/auth/register",
        method: "POST",
        body: newUser,
      }),
      invalidatesTags: ["Auth"],
    }),

    login: builder.mutation({
      query: (userData) => ({
        url: "/auth/login",
        method: "POST",
        body: userData,
      }),
      invalidatesTags: ["Auth"],
    }),

    logout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
      invalidatesTags: ["Auth"],
    }),

    refresh: builder.mutation({
      query: (sid) => ({
        url: "/auth/refresh",
        method: "POST",
        body: sid, // sid = Session's id (needed for /auth/refresh)
      }),
      invalidatesTags: ["Auth"],
    }),

    getAllCards: builder.query({
      query: () => "/card",
      providesTags: ["Auth", "Card"],
    }),
    
    createCard: builder.mutation({
      query: (card) => ({
        url: "/card",
        method: "POST",
        body: card,
      }),
      invalidatesTags: ["Auth", "Card"],
    }),

    editCard: builder.mutation({
      query: (card) => ({
        url: `/card/${card.id}`,
        method: "PATCH",
        body: card,
      }),
      invalidatesTags: ["Auth", "Card"],
    }),

    deleteCard: builder.mutation({
      query: (id) => ({
        url: `/card/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Card"],
    }),

    completeCard: builder.mutation({
      query: (id) => ({
        url: `/card/complete/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["Auth", "Card"],
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useRefreshMutation,

  useCreateCardMutation,
  useEditCardMutation,
  useDeleteCardMutation,
  useGetAllCardsQuery,
  useCompleteCardMutation,
} = questifyApi;
