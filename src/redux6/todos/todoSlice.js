import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://61bea5632a1dd4001708a355.mockapi.io',
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
