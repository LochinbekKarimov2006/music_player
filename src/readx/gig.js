// src/features/counter/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice2 = createSlice({
  name: 'counter2',
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
export const { setMalumod } = counterSlice2.actions;

// Reducerni eksport qilish
export default counterSlice2.reducer;
