import React from 'react';
import {withHistory, Link} from 'react-router-dom';
import '../../../../client/main.css';

// function myFunction () {
//   console.log ("Hello world!")
// }

export const Thread = () =>

    <div>

      <section id="firstSection" className="thread_sections">
        <img className="burger" src="vectors/meny.svg" />
        <h2 className="rubrik">Sälja eller inte sälja?</h2>
        <p id="skapadtradav">Tråd skapad av</p>
        <h2 id="lovenbergText">lovenberg</h2>

        <img className="person1" src="vectors/thread/person1_thread.svg" />
        <button className="small_button">Följ +</button>
        <p id="question">
        Jag har pengar sparade i en fond sedan länge. Jag har hela
        tiden tänkt att jag vill använda pengarna som en del i en
        kontantinsats till en lägenhet. Det betyder att jag vill
        använda pengarna inom ca 4 år.<br/><br/>

        Fonden har gått väldigt bra och jag undrar därför om jag
        borde sälja andelarna nu, innan börsen eventuellt går ner,
        eftersom vi befinner oss i en högkonjuntur?
        </p>

      </section>

      <div className="bryt"></div>

      <section id="secondSection" className="thread_sections">
        <img className="thread_people_photo" src="vectors/thread/person3_thread.svg"/>
        <p className="namn">Alice</p><br/>
        <p className="stad">Umeå Sverige</p>

        <img className="check" src="vectors/thread/green_check.svg"/><br/>
        <p className="betyg">2</p><br/><br/>
        <img className="cross" src="vectors/thread/red_cross.svg"/>

        <p className="svar">
          Om det är en aktiefond så skulle jag rekommendera att du
          börjar ta ut pengarna, det kan du göra bitvis istället för
          i en klumpsumma också.
        </p>

      </section>

      <div className="bryt"></div>

      <section id="thirdSection" className="thread_sections">
        <img className="thread_people_photo" src="vectors/thread/person4_thread.svg"/>
        <p className="namn">Elijah</p><br/>
        <p className="stad">Stockholm Sverige</p>

        <img className="check" src="vectors/thread/green_check.svg"/><br/>
        <p className="betyg">0</p><br/><br/>
        <img className="cross" src="vectors/thread/red_cross.svg"/>

        <p className="svar">
          Just aktier/aktierfonder rekommenderas för lång sikt
          dvs 5+ år pga risken så du tänker rätt.
        </p>

      </section>

      <div className="bryt"></div>

      <section id="fourthSection" className="thread_sections">
        <img className="thread_people_photo" src="vectors/thread/person5_thread.svg"/>
        <p className="namn">AnnaVest</p><br/>
        <p className="stad">Gävle Sverige</p>

        <img className="check" src="vectors/thread/green_check.svg"/><br/>
        <p className="betyg">0</p><br/><br/>
        <img className="cross" src="vectors/thread/red_cross.svg"/>

        <p className="svar">
          Du skulle kunna placera dessa pengar i en räntefond
          eller på ett sparkonto med insättningsgaranti inför köpet,
          lägre risk och så får man en liten tillväxt i alla fall.
          På Compricer kan du jämföra sparkonton och se var det är bäst ränta.
        </p>

      </section>

      <div className="bryt"></div>

      <section id="fifthSection" className="thread_sections">
        <img className="thread_people_photo" src="vectors/thread/person6_thread.svg"/>
        <p className="namn">Tanja</p><br/>
        <p className="stad">Malmö Sverige</p>

        <img className="check" src="vectors/thread/green_check.svg"/><br/>
        <p className="betyg">-1</p><br/><br/>
        <img className="cross" src="vectors/thread/red_cross.svg"/>

        <p className="svar">
          Just aktier/aktierfonder rekommenderas för
          lång sikt dvs 5+ år pga risken så du tänker rätt.
        </p>

      </section>


      <img className="pineapple" src="vectors/pineapple.svg" />


    </div>
