import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css';
import store from './redux/store';
import CostumeRouter from './router';



function App() {

  return (
    <Provider store={store}>
      <CostumeRouter />
      <ToastContainer
        position="top-right"
        theme="colored"
        autoClose={4000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Provider >
  );
}

export default App;
