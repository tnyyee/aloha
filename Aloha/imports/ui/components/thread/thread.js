import React from 'react';
import {withHistory, Link} from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../../../../client/main.css';

// function myFunction () {
//   console.log ("Hello world!")
// }

export const Thread = () =>

      <div>

        <img id="burger" src="vectors/meny.svg" />
        <h1 className="rubrik">Hej</h1>

        <div>
          <section className="first">
            <h5>Hej</h5>
          </section>
        </div>


      </div>


// -------------------------------------

// import React, { Component, PropTypes } from 'react';
// import ReactDOM from 'react-dom';
// import { Meteor } from 'meteor/meteor';
// import { withTracker } from 'meteor/react-meteor-data';
// import { HTTP } from 'meteor/http';
// import { Session } from 'meteor/session';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//
// // App component - represents the whole app
// // import {BrowserRoute as Router, Route, Link} from 'react-router-dom';
//
//
// class Thread extends Component {
//
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       hideCompleted: false,
//     };
//   }
//
//
//   handleSubmit(event) {
//     event.preventDefault();
//
//     // Find the text field via the React ref
//     const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
//
//
//
//     // Clear form
//     ReactDOM.findDOMNode(this.refs.textInput).value = '';
//   }
//
//   renderTasks() {
//
//   }
//
//   render() {
//     console.log("Hi")
//     return (
//
//           <div className="container">
//                 <header>
//                   <h1>Welcome to ALOHA</h1>
//                 </header>
//           </div>
//
//     );
//   }
// }


// export default withTracker(() => {
//
// }
//   return {
//
//   }
// })(Thread);
