import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import '../../../../client/main.css';
import './hamburger_style.css';

export default class Hamburger extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
      <Menu width={170} customBurgerIcon={ <img src="vectors/meny.svg" /> } pageWrapId={ "page-wrap" } >

        <a id="home" className="menu-item" href="/">Hem</a>

        <a id="profile" className="menu-item" href="/profile">Profil</a>

        <a id="search" className="menu-item" href="/search">Alla trådar</a>

        <a id="login" className="menu-item" href="/login">Logga ut</a>
      </Menu>
    );
  }
}
