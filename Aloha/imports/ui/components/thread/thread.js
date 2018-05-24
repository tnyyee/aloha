import React, { Component, PropTypes } from 'react';
import {withHistory, Link} from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import { HTTP } from 'meteor/http';
import { Session } from 'meteor/session';
import ReactDOM from 'react-dom';
import App from '../../App.js';
import { Tasks } from '../../../api/tasks.js';
import Task from '../../Task.js';


import '../../../../client/main.css';
import './style_thread.css';
import Hamburger from '../hamburger/hamburger.js';

export class Thread extends Component{
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
    //window.location = 'http://unnderbar.se/';
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

    return (

      <div>
        <Hamburger/>
        <main id="page-wrap">
          <section id="firstSection" className="thread_sections">
            <h2 className="rubrik_thread">Sälja eller inte sälja?</h2>
            <p id="skapadtradav">Tråd skapad av</p>
            <h2 id="lovenbergText">lovenberg</h2>

            <img className="person1" src="png/thread/person1_thread.png" />
            <button className="small_button">Följ +</button>
            <p id="fraga">
            Jag har pengar sparade i en fond sedan länge. Jag har hela
            tiden tänkt att jag vill använda pengarna som en del i en
            kontantinsats till en lägenhet. Det betyder att jag vill
            använda pengarna inom ca 4 år.<br/><br/>

            Fonden har gått väldigt bra och jag undrar därför om jag
            borde sälja andelarna nu, innan börsen eventuellt går ner,
            eftersom vi befinner oss i en högkonjunktur?
            </p>

          </section>

          <div className="bryt"></div>

          <section id="secondSection" className="thread_sections">
            <img className="thread_people_photo" src="png/thread/person2_thread.png"/>

            <div className="grid-container1">
              <div className="namn">Alice</div>
              <div className="stad">Umeå Sverige</div>
            </div>

            <img className="check" src="png/thread/green_check_thread.png"/><br/>
            <p className="betyg">2</p><br/><br/>
            <img className="cross" src="png/thread/red_cross_thread.png"/>

            <p className="svar">
              Om det är en aktiefond så skulle jag rekommendera att du
              börjar ta ut pengarna, det kan du göra bitvis istället för
              i en klumpsumma också.
            </p>

              <img className="like" src="png/thread/like_thread.png"/>
              <img className="comment" src="png/thread/comment_thread.png"/>
          </section>

          <div className="bryt"></div>

          <section id="thirdSection" className="thread_sections">
            <img className="thread_people_photo" src="png/thread/person3_thread.png"/>

            <div className="grid-container1">
              <div className="namn">Elijah</div>
              <div className="stad">Stockholm Sverige</div>
            </div>

            <img className="check" src="png/thread/green_check_thread.png"/><br/>
            <p className="betyg">0</p><br/><br/>
            <img className="cross" src="png/thread/red_cross_thread.png"/>

            <p className="svar">
              Just aktier/aktierfonder rekommenderas för lång sikt
              dvs 5+ år pga risken så du tänker rätt.
            </p>

            <img className="like" src="png/thread/like_thread.png"/>
            <img className="comment" src="png/thread/comment_thread.png"/>
          </section>

          <div className="bryt"></div>

          <section id="fourthSection" className="thread_sections">
            <img className="thread_people_photo" src="png/thread/person4_thread.png"/>

            <div className="grid-container1">
              <div className="namn">AnnaVest</div>
              <div className="stad">Göteborg Sverige</div>
            </div>

            <img className="check" src="png/thread/green_check_thread.png"/><br/>
            <p className="betyg">0</p><br/><br/>
            <img className="cross" src="png/thread/red_cross_thread.png"/>

            <p className="svar">
              Du skulle kunna placera dessa pengar i en räntefond
              eller på ett sparkonto med insättningsgaranti inför köpet,
              lägre risk och så får man en liten tillväxt i alla fall.
              På Compricer kan du jämföra sparkonton och se var det är bäst ränta.
            </p>

            <img className="like" src="png/thread/like_thread.png"/>
            <img className="comment" src="png/thread/comment_thread.png"/>
          </section>

          <div className="bryt"></div>

          <section id="fifthSection" className="thread_sections">
            <img className="thread_people_photo" src="png/thread/person5_thread.png"/>

            <div className="grid-container1">
              <div className="namn">Tanja</div>
              <div className="stad">Malmö Sverige</div>
            </div>

            <img className="check" src="png/thread/green_check_thread.png"/><br/>
            <p className="betyg">-1</p><br/><br/>
            <img className="cross" src="png/thread/red_cross_thread.png"/>

            <p className="svar">
              Just aktier/aktiefonder rekommenderas för
              lång sikt dvs 5+ år pga risken så du tänker rätt.
            </p>

            <img className="like" src="png/thread/like_thread.png"/>
            <img className="comment" src="png/thread/comment_thread.png"/>
          </section>

          <button className="small_button">+</button>

          <form className="new-resolution" onSubmit={this.addComments.bind(this)}>
            <input
              type="text"
              ref="comment"
              placeholder="Skriv en kommentar" />
              <button type="submit">Skicka</button>
          </form>

            {comments}

          <img className="pineapple" src="vectors/pineapple.svg" />
        </main>
      </div>
    );
  }
}
// export default withTracker(() => {
//   //const handle = Meteor.subscribe();
//   return {
//
//   };
// })(Dashboard);
