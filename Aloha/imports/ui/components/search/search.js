import React from 'react';
import {withHistory, Link} from 'react-router-dom';


export const Search = () =>
  <div>
    <section id="search_first_section" className ="search_dashboard_section">

      <img className="burger" src="vectors/meny.svg" />

      <h1>Alla trådar</h1>

      <div className="search_wrapper">
        <button className="search_large_button">Sök</button>
      </div>

      <div className="search_wrapper">
        <p>Hitta trådar inom kategorier som du är intresserad av,
            ekonomi, sport, smink, politik, studier...
        </p>
      </div>

      <div className="search_footer">
        <img className="pineapple" src="vectors/pineapple.svg" />
      </div>

    </section>
  </div>
