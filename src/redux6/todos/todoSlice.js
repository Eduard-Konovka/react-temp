import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://61be410f2a1dd4001708a29e.mockapi.io',
  }),
  tagTypes: ['Todo'],
  endpoints: builder => ({
    fetchTodos: builder.query({
      query: () => `/todos`,
      providesTags: ['Todo'],
    }),
    createTodo: builder.mutation({
      query: todoContent => ({
        url: `/todos`,
        method: 'POST',
        body: {
          content: todoContent,
        },
      }),
      invalidatesTags: ['Todo'],
    }),
    deleteTodo: builder.mutation({
      query: todoId => ({
        url: `/todos/${todoId}`,
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
