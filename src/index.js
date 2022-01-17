import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HeaderComponent } from './components/header/header.component';

import HomePage from './pages/home/Home-Page';
import MensPage from './pages/shop/mens-page/Mens-Page';
import WomensPage from './pages/shop/women-page/Women-Page';
import reportWebVitals from './reportWebVitals';

//Router lib import used for navigation between pages
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <HeaderComponent />
    <BrowserRouter>       {/*by wrapping our app in BrowseRouter we can use the routing on our entire app*/}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="MensPage" element={<MensPage />} />
        <Route path="WomensPage" element={<WomensPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
