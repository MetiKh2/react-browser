import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  "./global.css";
import { BrowserRouter } from 'react-router-dom';
import { StateContextProvider } from './context/StateContextProvider';
ReactDOM.render(
  <BrowserRouter>
  <StateContextProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </StateContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
