import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';
import reportWebVitals from './reportWebVitals';

import "./assets/css/boxicons.min.css";
import "./scss/index.scss";



ReactDOM.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
