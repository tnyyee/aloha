import React from 'react';
import {withHistory, Link} from 'react-router-dom';
import '../../../../client/main.css';

export const Dashboard = () =>

<div>


  <section id="first_section" className ="dashboard_section">
    <h1>ALOHA!</h1>
    <button className="large_button">Alla trådar</button>
    <h2>Aktuella trådar</h2>

    <div class="grid-container">
          <img src="jpg/dashboard/cam_ana_skandal.jpg"/>
          <img src="jpg/dashboard/knytblus.jpg" id="second_img"/>
          <img src=""></img>
          <img src="jpg/dashboard/stora_traden_om_aktier.jpg"/>
          <img src="jpg/dashboard/stora_traden_om_java.jpg"/>
          <img src=""></img>
    </div>

  </section>
  <section className ="dashboard_section">
  </section>
  <section className ="dashboard_section">
  </section>
  <section className ="dashboard_section">
  </section>
  <section className ="dashboard_section">
  </section>

</div>
