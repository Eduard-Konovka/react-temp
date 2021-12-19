import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_URL,
  }),
  tagTypes: ['Todo'],
  endpoints: builder => ({
    fetchTodos: builder.query({
      query: () => `/contacts`,
      providesTags: ['Todo'],
    }),
    createTodo: builder.mutation({
      query: todoContent => ({
        url: `/contacts`,
        method: 'POST',
        body: {
          name: todoContent.name,
          number: todoContent.number,
        },
      }),
      invalidatesTags: ['Todo'],
    }),
    deleteTodo: builder.mutation({
      query: todoId => ({
        url: `/contacts/${todoId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Todo'],
    }),
  }),
});

export const {
  useFetchTodosQuery,
  useCreateTodoMutation,
  useDeleteTodoMutation,
} = todoApi;
