import {withHistory, Link} from 'react-router-dom';
import React, { Component, PropTypes } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import AccountsUIWrapper from '../../AccountsUIWrapper.js';
import { Session } from 'meteor/session';
import { getUser } from '../../../api/get-user.js';

import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hideCompleted: false,
    };
  }

  render() {
    return (
      <div>
      <div className="container">

          <h1>ALOHA!</h1>

          <p id="welcomeText">
          Välkommen till en app som riktar sig till kvinnor,
          men där vem som helst kan skapa ett konto och vara aktiv i diskutioner.
          <br></br>
          <br></br>
          Här kan du diskutera, jämnföra, dela och inspereras av
          kvinnor i hela världen.
          </p>


      </div>

      {/*
        <h2>{ this.props.email ?
         this.props.email : ''}</h2>
      */}

      <p className="login_frontpage_buttons">

        <button className="user_button"><h3><AccountsUIWrapper /></h3></button>

        <div className="login_button_divider"/>

        <button className="facebook_button">
          <img className= "login_facebook_img" src="vectors/login/facebook_f.png"/>
          <h3>Logga in med Facebook</h3>
        </button>

        <h4 id="signUp_text">
        Registrera dig
        </h4>

      </p>

      {
        // this.props.currentUser ?
      //   // <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
      //   // </form> : ''
      }

      <img className= "pineapple" src="vectors/pineapple.svg"/>

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
