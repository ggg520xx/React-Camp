// 環境設定區塊 import區塊 類似集中引入cdn套件js的script 及引入必要元件 (目前只有一個 App.js)
// css 範圍大約是body

import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import 'flowbite';

import './style/index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";

import axios from 'axios';



// eslint-disable-next-line
import "swiper/css/bundle";
// import "./styles.css";


import ScrollToTop from "./hooks/useScrollTop.jsx";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </BrowserRouter>
  // </React.StrictMode>
);


// 暫時關閉嚴格模式 減少次數


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
