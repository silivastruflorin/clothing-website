import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HeaderComponent } from './components/header/header.component';

//used for routing / navigation between pages
import HomePage from './pages/home/Home-Page';
import MensPage from './pages/shop/mens-page/Mens-Page';
import WomensPage from './pages/shop/women-page/Women-Page';
import  ErrorPage  from './pages/error-page/ErrorPage';

//Import used for Redux
import { Provider } from 'react-redux';
import store, { history } from './redux/store';

import reportWebVitals from './reportWebVitals'; 

import { Route, Switch } from 'react-router' // react-router v4/v5
import { ConnectedRouter } from 'connected-react-router'

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}> { /* place ConnectedRouter under Provider */ }
      <> { /* your usual react-router v4/v5 routing */ }
      <HeaderComponent />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route  path="/shop/MensPage" component={MensPage} />
          <Route  path="/shop/WomensPage" component={WomensPage} />
          <Route path="" component={ErrorPage} />
        </Switch>
      </>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
