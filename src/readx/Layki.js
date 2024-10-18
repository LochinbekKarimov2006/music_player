import { createSlice } from '@reduxjs/toolkit';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// LocalStorage'dan musiqalarni olish
const loadMusicList = () => {
  const savedMusicList = localStorage.getItem('musicList');
  return savedMusicList ? JSON.parse(savedMusicList) : [];
};

const counterSlice3 = createSlice({
  name: 'counter3',
  initialState: {
    musicList: loadMusicList(),  
  },
  reducers: {
    // Musiqani qo'shish
    addMusic: (state, action) => {
      const newMusic = action.payload;

      // Agar musiqaning nomi allaqachon mavjud bo'lmasa, uni qo'shish
      const exists = state.musicList.some((music) => music.track.id === newMusic.track.id);

      if (!exists) {
        toast.success("❤️❤️❤️");
        state.musicList.push(newMusic);
        localStorage.setItem('musicList', JSON.stringify(state.musicList)); // LocalStorage ga saqlash
      } else {
        toast.error("Bunga layk bosilagn");
        console.log('Bu musiqa allaqachon mavjud!'); // Ovoz berish, agar mavjud bo'lsa
      }
    },

    // ID bo'yicha musiqani o'chirish
    deleteMusicById: (state, action) => {
      const id = action.payload; // O'chirilishi kerak bo'lgan musiqaning ID'si
      state.musicList = state.musicList.filter((music) => music.track.id !== id);
      localStorage.setItem('musicList', JSON.stringify(state.musicList)); // O'chirgandan so'ng yangilash
    },
  },
});

// Reducerni eksport qilish
export const { addMusic, deleteMusicById } = counterSlice3.actions;
export default counterSlice3.reducer;

// ToastContainer komponenti - bu komponentni umumiy joyda (masalan, App.jsx) chaqiring
