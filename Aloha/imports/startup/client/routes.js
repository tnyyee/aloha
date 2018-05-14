import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory';

// route components
import { Login } from '../../ui/components/login/login.js';
import { Dashboard } from '../../ui/components/dashboard/dashboard.js';
import { Profile } from '../../ui/components/profile/profile.js';
import { Search } from '../../ui/components/search/search.js';
import { SearchResult } from '../../ui/components/search-result/search-result.js';
import { Thread } from '../../ui/components/thread/thread.js';
import { Task } from '../../ui/components/task/task.js';
//import { Profile } from '../../ui/App.js';



export const renderRoutes = () =>
  <BrowserRouter>
      <div>
          <Route exact path="/" component={Profile} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/profile" component={Profile} />
          <Route path="/search" component={Search} />
          <Route path="/searchresult" component={SearchResult} />
          <Route path="/thread" component={Thread} />
          <Route path="/task" component={Task} />
      </div>
  </BrowserRouter>;
