import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'tw-elements';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
export const logo = require('./images/logo.png');
export const img2 = require('./images/img2.jpeg');
export const img3 = require('./images/img3.jpeg');
export const user1 = require('./images/user1.jpg');
export const user2 = require('./images/user2.jpg');
export const user3 = require('./images/user3.jpg');
export const banner1 = require('./images/banner1.jpg');
export const banner2 = require('./images/banner2.jpg');
export const banner3 = require('./images/banner3.jpg');
export const blank = require('./images/blank.png');
export const header = require('./images/header.png');
export const Google = require('./icons/google.png');
export const facebook = require('./icons/facebook.png');
export const google1 = require('./icons/google1.png');
export const youtube = require('./icons/youtube.png');
export const deleteBtn = require('./icons/delete.png');
