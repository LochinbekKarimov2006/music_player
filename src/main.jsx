// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './readx/store'; // Store ni import qilish
import App from './App';
import './index.css';
import "./App.css";
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
    <ToastContainer />
  </Provider>
);
