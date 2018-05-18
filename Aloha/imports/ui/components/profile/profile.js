import React from 'react';
import {withHistory, Link} from 'react-router-dom';
import '../../../../client/main.css';

// <div>
//   Profile works
//   <Link to="/login"> Press here </Link>
// </div>

export const Profile = () =>
  <div>

    <section id="first_profile_section">
      <img className="burger" src="vectors/meny.svg" />
      <h2 id="rubrik">lovenberg</h2>

      <img id="profilbild_profile" src="vectors/profile/person1_profile.svg" />

      <div className="grid-container_profile1">

        <div id="tradantal">52</div>
        <div id="tradar">trådar</div>
        <div id="34k">34 k</div>
        <div id="foljare">följare</div>
        <div id="antalfoljer">200</div>
        <div id="foljer">följer</div>
      </div>

    </section>

    <div className="bryt_profile"></div>

    <section id="second_profile_section">
      <p>Hej</p>

    </section>

  </div>
