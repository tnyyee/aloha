// Import client startup through a single index entry point

import './routes.js';

import React from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';
// import 'bootstrap/dist/css/bootstrap.min.css';
import App from '../../ui/App.js';

Bert.defaults.style = 'growl-top-right';

Meteor.startup(() => {
  render(<App />, document.getElementById('react-root'));
});
