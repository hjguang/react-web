import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import 'antd/dist/antd.css';
import MainRouter from "./MainRouter";

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <MainRouter/>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
