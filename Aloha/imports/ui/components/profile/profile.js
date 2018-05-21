import React from 'react';
import {withHistory, Link} from 'react-router-dom';
import '../../../../client/main.css';
import './style_profile.css';

// <div>
//   Profile works
//   <Link to="/login"> Press here </Link>
// </div>

export const Profile = () =>
  <div>

    <section id="first_profile_section">
      <img className="burger" src="vectors/meny.svg" />
      <h2 id="rubrik">lovenberg</h2>

      <img id="profilbild_profile" src="png/profile/person1_profile.png" />

      <div className="grid-container_profile1">

        <div id="tradantal">52</div>
        <div id="tradar">trådar</div>
        <div id="34k">34 k</div>
        <div id="foljare">följare</div>
        <div id="antalfoljer">200</div>
        <div id="foljer">följer</div>
      </div>

      <button className="small_button">Följ +</button>
      <p className="info_profile">Louise Bergström</p>
      <p className="info_profile">lovenberg@gmail.com</p>
      <p className="info_profile">Louise Bergström</p>

    </section>

    <div className="bryt_profile"></div>

    <section id="second_profile_section">


    </section>

  </div>
