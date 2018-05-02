import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { HTTP } from 'meteor/http';
import { Session } from 'meteor/session';
import { getStuff } from '../api/getstuff.js';

import { Tasks } from '../api/tasks.js';
import Task from './Task.js';
import AccountsUIWrapper from './AccountsUIWrapper.js';
// App component - represents the whole app
import {BrowserRoute as Router, Route, Link} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hideCompleted: false,
    };

  }
  handleSubmit(event) {
    event.preventDefault();

    // Find the text field via the React ref
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

    Tasks.insert({
      text,
      createdAt: new Date(), // current time
      owner: Meteor.userId(),           // _id of logged in user
      username: Meteor.user().username,  // username of logged in user
    });

    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }

  renderTasks() {
    let filteredTasks = this.props.tasks;
    if (this.state.hideCompleted) {
      filteredTasks = filteredTasks.filter(task => !task.checked);
    }
    return filteredTasks.map((task) => (
      <Task key={task._id} task={task} />
    ));
  }

  render() {
    return (
          <div className="container">
                <header>
                  <h1>Welcome to ALOHA</h1>

                  <h1>{ this.props.email ?
                   this.props.email : ''}</h1>

                  <AccountsUIWrapper />
                  { this.props.currentUser ?
                    <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
                    </form> : ''
                  }
                </header>
                    <ul>
                      {this.renderTasks()}
                    </ul>
          </div>
    );
  }
}

export default withTracker(() => {
  if (Meteor.user()) {
    console.log('running')
    getStuff(Meteor.user());
  }
  return {
    tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
    incompleteCount: Tasks.find({ checked: { $ne: true } }).count(),
    currentUser: Meteor.user(),
    email: Session.get('email')
    // this.props.theData;
    //const email: Session.email;
    //const email Session.get('email');
  };
})(App);
