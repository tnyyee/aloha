import {withHistory, Link} from 'react-router-dom';
import React, { Component, PropTypes } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import AccountsUIWrapper from '../../AccountsUIWrapper.js';
import { Session } from 'meteor/session';
import { getUser } from '../../../api/get-user.js';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hideCompleted: false,
    };
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Welcome to ALOHA</h1>
          <h1>{this.props.email}</h1>

          <h1>{ this.props.email ?
           this.props.email : ''}</h1>

          <AccountsUIWrapper />
          {
            // this.props.currentUser ?
          //   // <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
          //   // </form> : ''
          }
        </header>
        <ul>
          {/*this.renderTasks()*/}
        </ul>
      </div>
    );
  }
}

export default withTracker(() => {
  // if (Meteor.user()) {
  //   let user = getUser(Meteor.user());
  // }
  return {
    // tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
    // incompleteCount: Tasks.find({ checked: { $ne: true } }).count(),
    currentUser: Meteor.user(),
    email: Session.get('email')
    // this.props.theData;
    //const email: Session.email;
    //const email Session.get('email');
  };
})(Login);
