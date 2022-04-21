import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HeaderComponent } from './components/header/header.component';

//used for routing / navigation between pages
import HomePage from './pages/home/Home-Page';
import MensPage from './pages/shop/mens-page/Mens-Page';
import WomensPage from './pages/shop/women-page/Women-Page';
import ErrorPage  from './pages/error-page/ErrorPage';
import LogInPage  from './pages/user/Login-Page';
import SignUp  from './pages/user/signUp';
import Dashboard from './pages/dashboard/dashboard';


//Import used for Redux
import { Provider } from 'react-redux';
import store, { history } from './redux/store/store';

import reportWebVitals from './reportWebVitals'; 
//Connected Router
import { Route, Switch } from 'react-router' // react-router v4/v5
import { ConnectedRouter } from 'connected-react-router'
import Casual from './pages/shop/casual/casual';
import StreetWear from './pages/shop/street-wear/street-wear';
import Boots from './pages/shop/boots/boots';
import { PrivateRoute } from './components/_Private-Route/private-route-component';



ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}> { /* place ConnectedRouter under Provider */ }
      <> { /* your usual react-router v4/v5 routing */ }
      <HeaderComponent />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route  path="/shop/MensPage" component={MensPage} />
          <Route  path="/shop/WomensPage" component={WomensPage} />
          <Route  path="/user/SignIn" component={LogInPage} />
          <Route  path="/user/SignUp" component={SignUp} />
          <Route  path="/shop/Boots" component={Boots} />
          <Route  path="/shop/StreetWear" component={StreetWear} />
          <Route  path="/shop/Casual" component={Casual} />
          {/* Private Routes*/}
          <PrivateRoute path="/Dashboard" component={Dashboard} redirectPath="/user/SignIn" roles={"not used"} />
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
