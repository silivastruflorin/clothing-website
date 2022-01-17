import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HeaderComponent } from './components/header/header.component';

//used for routing / navigation between pages
import HomePage from './pages/home/Home-Page';
import MensPage from './pages/shop/mens-page/Mens-Page';
import WomensPage from './pages/shop/women-page/Women-Page';

//Router lib import used for navigation between pages
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

//Import used for Redux
import { Provider } from 'react-redux';
import store from './redux/store';

import reportWebVitals from './reportWebVitals'; 



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>      {/* The store lays here so all the children inside will have access to the store */}

      <HeaderComponent />
      <BrowserRouter>       {/*by wrapping our app in BrowseRouter we can use the routing on our entire app*/}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="MensPage" element={<MensPage />} />
          <Route path="WomensPage" element={<WomensPage />} />
        </Routes>
      </BrowserRouter>
    
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
