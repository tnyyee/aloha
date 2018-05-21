import React from 'react';
import {withHistory, Link} from 'react-router-dom';
import '../../../../client/main.css';
import './style_search.css';

export const Search = () =>
  <div className="search">


      <img className="burger" src="vectors/meny.svg" />

      <h2>Alla trådar</h2>

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


  </div>
