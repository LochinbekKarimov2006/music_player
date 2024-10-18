// src/features/counter/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    words: {
      word1: '', // Birinchi so'z
      word2: '', // Ikkinchi so'z
    },
  },
  reducers: {
    setWords: (state, action) => {
      // Yangi so'zlarni saqlash
      state.words = action.payload; // Eski so'zlarni o'chirib, yangi so'zlarni saqlash
    },
  },
});

// Action'ni eksport qilish
export const { setWords } = counterSlice.actions;

// Reducerni eksport qilish
export default counterSlice.reducer;
