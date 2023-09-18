import { configureStore } from '@reduxjs/toolkit';
import greetingsReducer from './greetings/greetingsSlice';

const store = configureStore({
  reducer: {
    greetings: greetingsReducer,
  },
});

const selectGreetings = (store) => store.greetings;

export { selectGreetings };

export default store;
