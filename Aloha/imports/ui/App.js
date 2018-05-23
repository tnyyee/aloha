import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { HTTP } from 'meteor/http';
import { Session } from 'meteor/session';
import { getUser } from '../api/get-user.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { getUser as getU } from '../api/get-user.js';
import ReactTimeout from 'react-timeout';
// copy from


// components
import { Dashboard } from './components/dashboard/dashboard.js';
import { Thread } from './components/thread/thread.js';
import { SearchResult } from './components/search-result/search-result.js';
import { Search } from './components/search/search.js';
import  Login  from './components/login/login.js';
import { Profile } from './components/profile/profile.js';
import { Task } from './components/task/task.js';

import { Tasks } from '.././api/tasks.js';
// import AccountsUIWrapper from './AccountsUIWrapper.js';
// App component - represents the whole app
// import {BrowserRoute as Router, Route, Link} from 'react-router-dom';


class App extends Component {

  constructor(props) {
    super(props);
    // Session.set('email', '')
    this.state = {
      // hideCompleted: false,
      // email: Session.get('email'),
      render: false //Set render state to false
    };
  }

  componentDidMount() {
    setTimeout(function() { //Start the timer
        this.setState({render: true}) //After 0.2 seconds, set render to true
    }.bind(this), 200)
  }

  render() {

    let currentUser = this.props.currentUser;
    let tasks = this.props.currentTasks;

    if(this.state.render) {
      if(currentUser) {
        return (
          <Router>
            <div>
            {/*<Route exact path="/" component={() => <Dashboard points={this.props.points} currentUser={currentUser}/>}/>*/}
              <Route exact path="/" component={() => <Dashboard currentUser={currentUser}/>}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/profile" component={Profile}/>
              <Route path="/search" component={Search}/>
              <Route path="/searchresult" component={SearchResult}/>
            {/*<Route path="/thread" component={Thread}/>*/}
              <Route exact path="/thread" component={() => <Thread currentUser={currentUser} currentTasks={tasks}/>}/>
            </div>
          </Router>
        );
      }
      else if(!currentUser){
        return (
          <Router>
            <div>
              <Route path="/" component={Login}/>
            </div>
          </Router>
        );
      }
    }
    else {
      return (
        <div>
           <h1> </h1>
        </div>
      );
    }
  }
}

export default withTracker(() => {
  // if (Meteor.user()) {
  //   let user = getU(Meteor.user());
  // }
  const handle = Meteor.subscribe();
  return {
    // tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
    // incompleteCount: Tasks.find({ checked: { $ne: true } }).count(),
    currentUser: Meteor.user(),
    tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
    //points: Points.find({})
    // this.props.theData;
    //const email: Session.email;
    //const email Session.get('email');
  };
})(App);
