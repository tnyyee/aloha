import {withHistory, Link} from 'react-router-dom';
import React, { Component, PropTypes } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import AccountsUIWrapper from '../../AccountsUIWrapper.js';
import { Session } from 'meteor/session';
import { getUser } from '../../../api/get-user.js';

import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

import '../../../../client/main.css';
import './style_login.css';

class Login extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      hideCompleted: false,
    };
  }

  render() {
    return (
      <div className="login">
      <main id="page-wrap">
          <div className="container">

              <h1>ALOHA!</h1>

                <p id="welcomeText" className="login_welcomeText">
                Välkommen till en app som riktar sig till kvinnor,
                men där vem som helst kan skapa ett konto och vara aktiv i diskussioner.
                <br></br>
                <br></br>
                Här kan du diskutera, jämföra, dela och inspereras av
                kvinnor i hela världen.
                </p>

          </div>

          <div className="login_frontpage_buttons">

            <button className="user_button"><h3><AccountsUIWrapper /></h3></button>

            <div className="login_button_divider"/>

            <button className="facebook_button">
              <img className= "login_facebook_img" src="vectors/login/facebook_f.png"/>
              Logga in med Facebook
            </button>

            <h4 id="signUp_text">
            Registrera dig
            </h4>

          </div>

          <div className="search_footer">
            <img className="pineapple" src="vectors/pineapple.svg" />
          </div>
        </main>
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
