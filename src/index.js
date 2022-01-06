import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter } from "react-router-dom";
import { WatchListContextProvider } from "./context/watchListContext";

ReactDOM.render(
  <WatchListContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </WatchListContextProvider>,
  document.getElementById('root')
);
