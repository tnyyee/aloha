import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import '../imports/startup/accounts-config.js';
import {renderRoutes} from '../imports/startup/client/routes.js';
import {default as App} from '../imports/ui/App.js';

import Profile from '../imports/ui/components/profile/profile.js';

Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});
