import React from 'react';
import {withHistory, Link} from 'react-router-dom';
import '../../../../client/main.css';
import './style_search-result.css';
import Hamburger from '../hamburger/hamburger.js';

export const SearchResult = () =>
<div className="search_result">
  <Hamburger/>

  <main id="page-wrap">
      <section id="searchresult_first_section" className ="searchresult_section">

        <h2>Alla trådar</h2>

        <div className="searchresult_wrapper">
          <button className="searchresult_large_button">Ekonomi</button>
        </div>
      </section>

      <section id="searchresult_second_section" className ="searchresult_section">

        <div className="searchresult-grid">
          <div className="searchresult-grid-box"><img className="profile_img" src="png/search_result/person1_search_result.png"/></div>
          <div className="searchresult-grid-box"><p>Hur klarar man sig utan matlådor?</p><p id="p2">Ekonomi</p></div>
          <div className="searchresult-grid-box"><img className="arrow" src="vectors/arrow.svg"/></div>
          <Link className="searchResult_link" to="/thread"><div className="searchresult-grid-box"><img className="profile_img" src="png/search_result/person2_search_result.png"/></div></Link>
          <Link className="searchResult_link" to="/thread"><div className="searchresult-grid-box"><p>Sälja eller inte sälja?</p><p id="p2">Ekonomi</p></div></Link>
          <Link className="searchResult_link" to="/thread"><div className="searchresult-grid-box"><img className="arrow" src="vectors/arrow.svg"/></div></Link>
        </div>
      </section>
      

    <div className="search_footer">
      <img className="pineapple" src="vectors/pineapple.svg" />
    </div>

  </main>

</div>
