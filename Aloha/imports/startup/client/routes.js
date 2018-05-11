import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory';

// route components
import { Login } from '../../ui/components/login/login.js';
import { Profile } from '../../ui/components/profile/profile.js';
//import { Profile } from '../../ui/App.js';



export const renderRoutes = () =>
  <BrowserRouter>
      <div>
          <Route exact path="/" component={Profile} />
          <Route path="/login" component={Login} />
      </div>
  </BrowserRouter>;
 
