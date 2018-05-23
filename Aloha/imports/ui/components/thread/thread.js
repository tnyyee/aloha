import React from 'react';
import {withHistory, Link} from 'react-router-dom';
import '../../../../client/main.css';
import './style_thread.css';
import Hamburger from '../hamburger/hamburger.js';

// componentWillMount() {
//   this.state = {
//       persons: [
//         {
//           name: 'hej',
//           city: 'Umeå'
//         },
//         {
//           name: 'hej2',
//           city: 'Umeå'
//         },
//       ]
//   }
// }

export const Thread = () =>
  //
  // (
  //   this.state.persons
  //   ... iterera ut..
  // )

    <div>
    <Hamburger/>
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


      <img className="pineapple" src="vectors/pineapple.svg" />


    </div>
