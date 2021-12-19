import { configureStore } from '@reduxjs/toolkit';
import { pokemonApi } from './pokemon/pokemonSlice';
import { todoApi } from './todos/todoSlice';

const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [todoApi.reducerPath]: todoApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(pokemonApi.middleware)
      .concat(todoApi.middleware),
});

export default store;
