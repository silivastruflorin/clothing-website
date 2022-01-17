import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './pages/home/Home-Page';
import reportWebVitals from './reportWebVitals';

//Router lib import used for navigation between pages
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>       {/*by wrapping our app in BrowseRouter we can use the routing on our entire app*/}
      <HomePage />                  
    </BrowserRouter>
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
