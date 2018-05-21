import React from 'react';
import {withHistory, Link} from 'react-router-dom';
import '../../../../client/main.css';
import './style_dashboard.css';
export const Dashboard = () =>

<div id="dashboard_div">
  <section id="first_section_dashboard" className ="dashboard_section">
    <img className="burger" src="vectors/meny.svg"/>
    <h1>ALOHA!</h1>
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
</div>
