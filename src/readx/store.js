// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../readx/counterSlice';
import counterReducer2 from "../readx/gig"
import counterReducer3 from "../readx/Layki"
const store = configureStore({
  reducer: {
    counter: counterReducer,
    counter2: counterReducer2,
    counter3: counterReducer3,
  },
});

export default store;
