import React from 'react';
import { Component, PropTypes } from 'react';
import {withHistory, Link} from 'react-router-dom';
import '../../../../client/main.css';
import './style_profile.css';
import Hamburger from '../hamburger/hamburger.js';

export class Profile extends Component{

  constructor(props) {
    super(props);
    this.state = {
      hideCompleted: false
    };
  }




  render() {

    let profileName =this.props.currentUser.profile.name;
    let email =this.props.currentUser.profile.email;

    return(
      <div>
        <Hamburger/>
        <main id="page-wrap">
          <section id="first_profile_section">

            <h2 id="rubrik_profile">{profileName}</h2>

            <img id="profilbild_profile" src="vectors/thread/pineapple.gif" />

            <div className="grid-container_profile1">

              <h3 className="tradantal">52</h3>
              <p className="tradar">trådar</p>
              <h3 className="trefyra">34 k</h3>
              <p className="foljare">följare</p>
              <h3 className="antalfoljer">200</h3>
              <p className="foljer">följer</p>
            </div>

            <button className="small_button_profile">Följ +</button>

            <div id="profile_info">
              <p className="profile_info_text">{profileName}</p>
              <p id="mitten" className="profile_info_text">{email}</p>
              <p id="mitten" className="profile_info_text">lovenberg&#64;gmail.com</p>
              <p id="mitten" className="profile_info_text">lovenberg.com</p>
              <img id="plupp" src="png/profile/red_pin.png" />
              <p id="sthlm">Stockholm</p>

            </div>

          </section>

          <div className="bryt_profile"></div>

          <section id="second_profile_section">

            <h2 id="publtrad">Publicerade trådar</h2>

            <div className="tradar">
              <p className="profamne">Fick Löneförhöjning</p>
              <p className="profkategori">Karriär</p>
              <img className="prof_arrow" src="vectors/arrow.svg"/>
            </div>

            <div className="tradar">
              <p className="profamne">Hur orkar man springa mer än 3 km?</p>
              <p className="profkategori">Träning</p>
              <img className="prof_arrow" src="vectors/arrow.svg"/>
            </div>


            <Link className="profile_link" to="/thread">

              <div className="tradar">
                <p className="profamne">Sälja eller inte sälja?</p>
                <p className="profkategori">Ekonomi</p>
                <img className="prof_arrow" src="vectors/arrow.svg"/>
              </div>

            </Link>
          </section>

          <div className="bryt_profile"></div>

          <section id="third_profile_section">

            <h2 id="publtrad">Kommenterade trådar</h2>

            <div className="tradar">
              <p className="profamne">SD, för eller emot?</p>
              <p className="profkategori">Politik</p>
              <img className="prof_arrow" src="vectors/arrow.svg"/>
            </div>

          </section>

          <div className="search_footer">
            <img className="pineapple" src="vectors/pineapple.svg" />
          </div>
        </main>
      </div>
    );
  }
}
