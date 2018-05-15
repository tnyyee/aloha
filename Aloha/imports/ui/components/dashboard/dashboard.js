import React from 'react';
import {withHistory, Link} from 'react-router-dom';
import '../../../../client/main.css';

export const Dashboard = () =>

<div>


  <section id="first_section" className ="dashboard_section">
    <h1>ALOHA!</h1>
    <button className="large_button">Alla trådar</button>
    <h2>Aktuella trådar</h2>

  <div className="row">
      <div className="column">
        <img src="vectors/dashboard/cam_ana_skandal.svg"/>
        <img src="vectors/dashboard/knytblus.svg" id="second_img"/>
        <img src=""></img>
      </div>
      <div className="column">
        <img src="vectors/dashboard/stora_traden_om_aktier.svg"/>
        <img src="vectors/dashboard/stora_traden_om_java.svg"/>
        <img src=""></img>
      </div>
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
