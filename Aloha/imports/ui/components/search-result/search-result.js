import React from 'react';
import {withHistory, Link} from 'react-router-dom';


export const SearchResult = () =>
<div className="search_result">
  <section id="searchresult_first_section" className ="searchresult_section">

    <img className="burger" src="vectors/meny.svg" />

    <h2>Alla trådar</h2>

    <div className="searchresult_wrapper">
      <button className="searchresult_large_button">Ekonomi</button>
    </div>
  </section>



  <section id="searchresult_second_section" className ="searchresult_section">

    <div className="searchresult_thread">

      <img className="searchresult_people_photo" src="vectors/search_result/person1_search_result.svg"/>

      <div className="searchresult_grid-container1">
        <div className="rubrik">Hur klarar man sig utan matlådor?</div>
        <div className="kategori">Ekonomi</div>
      </div>
    </div>

    <div className="searchresult_thread">
      <img className="searchresult_people_photo" src="vectors/search_result/person2_search_result.svg"/>

      <Link to="/thread">
        <div className="searchresult_grid-container1">
          <div className="rubrik">Sälja eller inte sälja?</div>
          <div className="kategori">Ekonomi</div>
        </div>
      </Link>

    </div>


    <div className="searchresult_footer">
      <img className="pineapple" src="vectors/pineapple.svg" />
    </div>

  </section>
</div>
