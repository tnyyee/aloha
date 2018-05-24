import {withHistory, Link} from 'react-router-dom';
import React, { Component, PropTypes } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import '../../App.js';
import { Tasks } from '../../../api/tasks.js';
import { Mongo } from 'meteor/mongo';

import Hamburger from '../hamburger/hamburger.js';

import Popup from "reactjs-popup";

import './style_dashboard.css';
import '../../../../client/main.css';





export class Dashboard extends Component{
  constructor(props) {
    super(props);
    this.state = {
      hideCompleted: false,

    };
    this.deleteComment = this.deleteComment.bind(this)
  }
  addComments(event){
     //Gör så att denna funktion inte körs hela tiden.
    event.preventDefault();
    var text = this.refs.comment.value.trim();
    var currentUser = this.props.currentUser.profile.name
    Meteor.call('addComments', text, currentUser);

    console.log(text);

  }
  deleteComment(event){

    Meteor.call('deleteComment', event.target.id);
  }
  handleClick() {
    window.location = 'http://unnderbar.se/';
  }

  render() {
    const comments = this.props.currentComments.map(comment => {
      return(
        <div>
          {/*<p key={this.props.currentUser._id}>{this.props.currentUser.profile.name}</p>*/}
          <p id={comment._id} onClick={this.deleteComment} key={comment._id}>{comment.text}</p>
        </div>
      )
    })

    console.log(this.props)
    return (
      <div id="dashboard_div">
        <Hamburger/>
        <section id="first_section_dashboard" className ="dashboard_section">
          <h1>ALOHA!</h1>
          <p>{this.props.currentUser.profile.name}</p>
          <button className="large_button">Alla trådar</button>
          <h2>Aktuella trådar</h2>
          <div className="picture-grid">
            <div className="grid-box"><img src="jpg/dashboard/cam_ana_skandal.jpg"/></div>
            <div className="grid-box"><img src="jpg/dashboard/knytblus.jpg"/></div>
            <div className="grid-box"><img src="jpg/dashboard/vart_i_sverige_hittar_man_bast_sno.jpg"/></div>
            <div className="grid-box"><img src="jpg/dashboard/riksdagsvalet_2018.jpg"/></div>
            <div className="grid-box"><img src="jpg/dashboard/stora_traden_om_java.jpg"/></div>
            <div className="grid-box"><img src="jpg/dashboard/stora_traden_om_aktier.jpg"/></div>
          </div>
        </section>
        <div className="page_break"></div>
        <section id="second_section_dashboard" className ="dashboard_section">
          <h2>Senaste trådar</h2>
          <div className="thread-grid">
            <div className="thread-grid-box"><img className="profile_img" src="png/dashboard/person1_dashboard.png"/></div>
            <div className="thread-grid-box"><p>Hur klarar man sig utan matlådor?</p><p id="p2">Ekonomi</p></div>
            <div className="thread-grid-box"><img className="arrow" src="vectors/arrow.svg"/></div>
            <div className="thread-grid-box"><img className="profile_img" src="png/dashboard/person2_dashboard.png"/></div>
            <div className="thread-grid-box"><p>Jag vann en miljon på lotto!!</p><p id="p2">Skryt</p></div>
            <div className="thread-grid-box"><img className="arrow" src="vectors/arrow.svg"/></div>
            <div className="thread-grid-box"><img className="profile_img" src="png/dashboard/person3_dashboard.png"/></div>
            <div className="thread-grid-box"><p>Tips för en som vill sluta röka</p><p id="p2">Hälsa</p></div>
            <div className="thread-grid-box"><img className="arrow" src="vectors/arrow.svg"/></div>
            <div className="thread-grid-box"><img className="profile_img" src="png/dashboard/person4_dashboard.png"/></div>
            <div className="thread-grid-box"><p>Vilka skidor är bäst just nu för puderåkning</p><p id="p2">Alpint</p></div>
            <div className="thread-grid-box"><img className="arrow" src="vectors/arrow.svg"/></div>
            <div className="thread-grid-box"><img className="profile_img" src="png/dashboard/person2_dashboard.png"/></div>
            <div className="thread-grid-box"><p>Maxfactor eller smink från H&M?</p><p id="p2">Smink</p></div>
            <div className="thread-grid-box"><img className="arrow" src="vectors/arrow.svg"/></div>
          </div>
        </section>
        <div className="page_break"></div>
        <section id="third_section_dashboard" className ="dashboard_section">
          <h2>Upptäck nya personer</h2>
          <div className="container">
            <p>isabellewe</p>
            <p>juliiie</p>
            <p>lovenberg</p>
            <img src="png/dashboard/person6_dashboard.png"/>
            <img src="png/dashboard/person7_dashboard.png"/>
            <Link to="/profile"><img src="png/dashboard/person8_dashboard.png"/></Link>
            <button className="small_button">Följ + </button>
            <button className="small_button">Följ + </button>
            <button className="small_button">Följ + </button>
          </div>
        </section>
        <div className="page_break"></div>
        <section id="fourth_section_dashboard" className ="dashboard_section">
          <h2>Women crush wednesday</h2>
          <img src="png/dashboard/personUnn_dashboard.png"/>
          <div className="textbox">
            <p>Unn Swanström är en inspirerande kvinna som har utsetts till årets
            IT-kvinna 2015...</p>
          </div>
          <Popup trigger={<button className="small_button">Läs mer</button>}
            modal
          >
            {close => (
              <div className="outer">
                <a className="close" onClick={close}>
                  &times;
                </a>
                <div className="content">
                  <h2>Unn Swanström</h2>
                  <p>
                    {" "}
                    UX designer and meetup organizer who likes tech and horses.
                    A talkative Swedish vagabond currently based in Stockholm.
                    IT Woman of the Year 2015. For me being a user experience
                    designer means I care about making products that work
                    really, really well. I think technology should work for
                    people, not the other way around.
                    <br /><br />
                    I love being a part of almost every aspect of product
                    development; from identifying user needs and opportunities,
                    ideation, facilitation workshops, sketching, wireframing,
                    prototyping, usability testing, UI design, pair programming
                    front end to final user feedback. Then going back and doing
                    it all over in the pursuit of happy users and the dream of
                    building a something really great. I believe the best
                    products are made in close nit agile teams.
                  </p>
                  //anonym funktion
                  <button onClick={ () => this.handleClick() } className="large_button">
                    Portfolio
                  </button>
                </div>
              </div>
            )}
          </Popup>
        </section>
        <div className="page_break"></div>
        <section id="fifth_section_dashboard" className ="dashboard_section">
          <h2>my resolution</h2>
          <form className="new-resolution" onSubmit={this.addComments.bind(this)}>
            <input
              type="text"
              ref="comment"
              placeholder="Finish React Meteor Series" />
          </form>

            {comments}

        </section>
      </div>
    );
  }
}
