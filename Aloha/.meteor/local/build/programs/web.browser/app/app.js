var require = meteorInstall({"client":{"template.main.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/template.main.js                                                                                            //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //

Template.body.addContent((function() {
  var view = this;
  return HTML.Raw('<div id="render-target"></div>');
}));
Meteor.startup(Template.body.renderToDocument);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.css":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/main.css                                                                                                    //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
// These styles have already been applied to the document.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/main.js                                                                                                     //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var React;
module.watch(require("react"), {
  "default": function (v) {
    React = v;
  }
}, 0);
var BrowserRouter, Route, Switch;
module.watch(require("react-router-dom"), {
  BrowserRouter: function (v) {
    BrowserRouter = v;
  },
  Route: function (v) {
    Route = v;
  },
  Switch: function (v) {
    Switch = v;
  }
}, 1);
var Meteor;
module.watch(require("meteor/meteor"), {
  Meteor: function (v) {
    Meteor = v;
  }
}, 2);
var render;
module.watch(require("react-dom"), {
  render: function (v) {
    render = v;
  }
}, 3);
module.watch(require("../imports/startup/accounts-config.js"));
var renderRoutes;
module.watch(require("../imports/startup/client/routes.js"), {
  renderRoutes: function (v) {
    renderRoutes = v;
  }
}, 4);
var App;
module.watch(require("../imports/ui/App.js"), {
  "default": function (v) {
    App = v;
  }
}, 5);
var Profile;
module.watch(require("../imports/ui/components/profile/profile.js"), {
  "default": function (v) {
    Profile = v;
  }
}, 6);
Meteor.startup(function () {
  render(React.createElement(App, null), document.getElementById('render-target'));
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"imports":{"ui":{"components":{"dashboard":{"dashboard.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/ui/components/dashboard/dashboard.js                                                                       //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

module.export({
  Dashboard: function () {
    return Dashboard;
  }
});
var withHistory, Link;
module.watch(require("react-router-dom"), {
  withHistory: function (v) {
    withHistory = v;
  },
  Link: function (v) {
    Link = v;
  }
}, 0);
var React, Component, PropTypes;
module.watch(require("react"), {
  "default": function (v) {
    React = v;
  },
  Component: function (v) {
    Component = v;
  },
  PropTypes: function (v) {
    PropTypes = v;
  }
}, 1);
var withTracker;
module.watch(require("meteor/react-meteor-data"), {
  withTracker: function (v) {
    withTracker = v;
  }
}, 2);
var ReactDOM;
module.watch(require("react-dom"), {
  "default": function (v) {
    ReactDOM = v;
  }
}, 3);
var Modal;
module.watch(require("react-responsive-modal"), {
  "default": function (v) {
    Modal = v;
  }
}, 4);
module.watch(require("../../App.js"));
var Tasks;
module.watch(require("../../../api/tasks.js"), {
  Tasks: function (v) {
    Tasks = v;
  }
}, 5);
var Hamburger;
module.watch(require("../hamburger/hamburger.js"), {
  "default": function (v) {
    Hamburger = v;
  }
}, 6);
var Popup;
module.watch(require("./popupinfo.js"), {
  "default": function (v) {
    Popup = v;
  }
}, 7);
var ReactVote;
module.watch(require("react-vote"), {
  "default": function (v) {
    ReactVote = v;
  }
}, 8);
module.watch(require("./style_dashboard.css"));
module.watch(require("../../../../client/main.css"));

var Dashboard =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2.default)(Dashboard, _Component);

  function Dashboard(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this.onOpenModal = function () {
      _this.setState({
        open: true
      });
    };

    _this.onCloseModal = function () {
      _this.setState({
        open: false
      });
    };

    _this.state = {
      hideCompleted: false,
      open: false
    };
    return _this;
  }

  var _proto = Dashboard.prototype;

  _proto.onCreate = function () {
    function onCreate(data, diff) {
      // Save data into the  databasehere!
      console.log(data); // { title: 'title of this vote', items: [{ title: 'option1', count: 5, voters: ['a', 'b', 'c', 'd', 'e'] }, { title: 'option2', count: 3, voters: ['f', 'g', 'h'] }], closed: false, multiple: false, expansion: false, voters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'] }
    }

    return onCreate;
  }();

  _proto.render = function () {
    function render() {
      console.log(this.props);
      var open = this.state.open;
      return React.createElement("div", {
        id: "dashboard_div"
      }, React.createElement(Hamburger, null), React.createElement("section", {
        id: "first_section_dashboard",
        className: "dashboard_section"
      }, React.createElement("h1", null, "ALOHA!"), React.createElement(Link, {
        to: "/search"
      }, React.createElement("button", {
        className: "large_button"
      }, "Alla tr\xE5dar")), React.createElement("h2", null, "Aktuella tr\xE5dar"), React.createElement("div", {
        className: "picture-grid"
      }, React.createElement("div", {
        className: "grid-box"
      }, React.createElement("img", {
        src: "jpg/dashboard/cam_ana_skandal.jpg"
      })), React.createElement("div", {
        className: "grid-box"
      }, React.createElement("img", {
        src: "jpg/dashboard/knytblus.jpg"
      })), React.createElement("div", {
        className: "grid-box"
      }, React.createElement("img", {
        src: "jpg/dashboard/vart_i_sverige_hittar_man_bast_sno.jpg"
      })), React.createElement("div", {
        className: "grid-box"
      }, React.createElement("img", {
        src: "jpg/dashboard/riksdagsvalet_2018.jpg"
      })), React.createElement("div", {
        className: "grid-box"
      }, React.createElement("img", {
        src: "jpg/dashboard/stora_traden_om_java.jpg"
      })), React.createElement("div", {
        className: "grid-box"
      }, React.createElement("img", {
        src: "jpg/dashboard/stora_traden_om_aktier.jpg"
      })))), React.createElement("div", {
        className: "page_break"
      }), React.createElement("section", {
        id: "second_section_dashboard",
        className: "dashboard_section"
      }, React.createElement("h2", null, "Senaste tr\xE5dar"), React.createElement("div", {
        className: "thread-grid"
      }, React.createElement("div", {
        className: "thread-grid-box"
      }, React.createElement("img", {
        className: "profile_img",
        src: "png/dashboard/person1_dashboard.png"
      })), React.createElement("div", {
        className: "thread-grid-box"
      }, React.createElement("p", null, "Hur klarar man sig utan matl\xE5dor?"), React.createElement("p", {
        id: "p2"
      }, "Ekonomi")), React.createElement("div", {
        className: "thread-grid-box"
      }, React.createElement("img", {
        className: "arrow",
        src: "vectors/arrow.svg"
      })), React.createElement("div", {
        className: "thread-grid-box"
      }, React.createElement("img", {
        className: "profile_img",
        src: "png/dashboard/person2_dashboard.png"
      })), React.createElement("div", {
        className: "thread-grid-box"
      }, React.createElement("p", null, "Jag vann en miljon p\xE5 lotto!!"), React.createElement("p", {
        id: "p2"
      }, "Skryt")), React.createElement("div", {
        className: "thread-grid-box"
      }, React.createElement("img", {
        className: "arrow",
        src: "vectors/arrow.svg"
      })), React.createElement("div", {
        className: "thread-grid-box"
      }, React.createElement("img", {
        className: "profile_img",
        src: "png/dashboard/person3_dashboard.png"
      })), React.createElement("div", {
        className: "thread-grid-box"
      }, React.createElement("p", null, "Tips f\xF6r en som vill sluta r\xF6ka"), React.createElement("p", {
        id: "p2"
      }, "H\xE4lsa")), React.createElement("div", {
        className: "thread-grid-box"
      }, React.createElement("img", {
        className: "arrow",
        src: "vectors/arrow.svg"
      })), React.createElement("div", {
        className: "thread-grid-box"
      }, React.createElement("img", {
        className: "profile_img",
        src: "png/dashboard/person4_dashboard.png"
      })), React.createElement("div", {
        className: "thread-grid-box"
      }, React.createElement("p", null, "Vilka skidor \xE4r b\xE4st just nu f\xF6r puder\xE5kning"), React.createElement("p", {
        id: "p2"
      }, "Alpint")), React.createElement("div", {
        className: "thread-grid-box"
      }, React.createElement("img", {
        className: "arrow",
        src: "vectors/arrow.svg"
      })), React.createElement("div", {
        className: "thread-grid-box"
      }, React.createElement("img", {
        className: "profile_img",
        src: "png/dashboard/person2_dashboard.png"
      })), React.createElement("div", {
        className: "thread-grid-box"
      }, React.createElement("p", null, "Maxfactor eller smink fr\xE5n H&M?"), React.createElement("p", {
        id: "p2"
      }, "Smink")), React.createElement("div", {
        className: "thread-grid-box"
      }, React.createElement("img", {
        className: "arrow",
        src: "vectors/arrow.svg"
      })))), React.createElement("div", {
        className: "page_break"
      }), React.createElement("section", {
        id: "third_section_dashboard",
        className: "dashboard_section"
      }, React.createElement("h2", null, "Uppt\xE4ck nya personer"), React.createElement("div", {
        className: "container"
      }, React.createElement("p", null, "isabellewe"), React.createElement("p", null, "juliiie"), React.createElement("p", null, "lovenberg"), React.createElement("img", {
        src: "png/dashboard/person6_dashboard.png"
      }), React.createElement("img", {
        src: "png/dashboard/person7_dashboard.png"
      }), React.createElement(Link, {
        to: "/profile"
      }, React.createElement("img", {
        src: "png/dashboard/person8_dashboard.png"
      })), React.createElement("button", {
        className: "small_button"
      }, "F\xF6lj + "), React.createElement("button", {
        className: "small_button"
      }, "F\xF6lj + "), React.createElement("button", {
        className: "small_button"
      }, "F\xF6lj + "))), React.createElement("div", {
        className: "page_break"
      }), React.createElement("section", {
        id: "fourth_section_dashboard",
        className: "dashboard_section"
      }, React.createElement("h2", null, "Women crush wednesday"), React.createElement("img", {
        src: "png/dashboard/personUnn_dashboard.png"
      }), React.createElement("div", {
        className: "textbox"
      }, React.createElement("p", null, "Unn Swanstr\xF6m \xE4r en inspirerande kvinna som har utsetts till \xE5rets IT-kvinna 2015...")), React.createElement(Popup, null), React.createElement("img", {
        className: "pineapple",
        src: "vectors/pineapple.svg"
      })));
    }

    return render;
  }();

  return Dashboard;
}(Component);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"popupinfo.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/ui/components/dashboard/popupinfo.js                                                                       //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

module.export({
  "default": function () {
    return Popup;
  }
});
var React;
module.watch(require("react"), {
  "default": function (v) {
    React = v;
  }
}, 0);
var ReactDOM;
module.watch(require("react-dom"), {
  "default": function (v) {
    ReactDOM = v;
  }
}, 1);
var Modal;
module.watch(require("react-responsive-modal"), {
  "default": function (v) {
    Modal = v;
  }
}, 2);
module.watch(require("./style_popupinfo.css"));
module.watch(require("../../../../client/main.css"));

var Popup =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Popup, _React$Component);

  function Popup() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.state = {
      open: false
    }, _this.onOpenModal = function () {
      _this.setState({
        open: true
      });
    }, _this.onCloseModal = function () {
      _this.setState({
        open: false
      });
    }, _temp) || (0, _assertThisInitialized2.default)(_this);
  }

  var _proto = Popup.prototype;

  _proto.buttonClicked = function () {
    function buttonClicked() {}

    return buttonClicked;
  }();

  _proto.render = function () {
    function render() {
      var _this2 = this;

      var open = this.state.open;
      return React.createElement("div", null, React.createElement("button", {
        className: "small_button",
        onClick: this.onOpenModal
      }, "L\xE4s mer"), React.createElement(Modal, {
        open: open,
        onClose: this.onCloseModal,
        center: true
      }, React.createElement("h2", {
        id: "heading"
      }, "Unn Swanstr\xF6m"), React.createElement("img", {
        id: "profile",
        src: "jpg/unn_profile.jpg"
      }), React.createElement("p", {
        id: "popupP"
      }, "UX designer and meetup organizer who likes tech and horses. A talkative Swedish vagabond currently based in Stockholm. IT Woman of the Year 2015. For me being a user experience designer means I care about making products that work really, really well. I think technology should work for people, not the other way around.", React.createElement("br", null), React.createElement("br", null), "I love being a part of almost every aspect of product development; from identifying user needs and opportunities, ideation, facilitation workshops, sketching, wireframing, prototyping, usability testing, UI design, pair programming front end to final user feedback."), React.createElement("div", {
        className: "button-grid"
      }, React.createElement("button", {
        className: "small_button button-grid-box",
        onClick: function () {
          _this2.buttonClicked();

          window.open('https://twitter.com/unnderbar', '_blank');
        }
      }, "Twitter"), React.createElement("button", {
        className: "small_button button-grid-box",
        onClick: function () {
          _this2.buttonClicked();

          window.open('https://www.instagram.com/unnderbar/', '_blank');
        }
      }, "Instagram"), React.createElement("button", {
        className: "small_button button-grid-box",
        onClick: function () {
          _this2.buttonClicked();

          window.open('https://www.facebook.com/unnderbar', '_blank');
        }
      }, "Facebook"), React.createElement("button", {
        className: "small_button button-grid-box",
        onClick: function () {
          _this2.buttonClicked();

          window.open('https://medium.com/@unnderbar', '_blank');
        }
      }, "Medium"))));
    }

    return render;
  }();

  return Popup;
}(React.Component);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"style_dashboard.css":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/ui/components/dashboard/style_dashboard.css                                                                //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.exports = require("meteor/modules").addStyles(
  "@media screen and (max-width: 700px) {\n  body {\n    background-color: #311631;\n    color: white;\n    margin: 0px;\n    padding: 0px;\n    width: 100%;\n    height: 100%; }\n    body .burger {\n      padding: 15px; }\n    body .pineapple {\n      display: block;\n      margin-left: auto;\n      margin-right: auto;\n      margin-bottom: 10px; }\n    body h1 {\n      text-align: center;\n      font-size: 50px;\n      font-weight: 700;\n      font-family: \"Lato\", sans-serif;\n      color: #ffffff;\n      margin: 80px; }\n    body h2 {\n      text-align: center;\n      font-family: \"Roboto\", sans-serif;\n      font-weight: 700;\n      font-size: 22px;\n      color: #ffffff;\n      letter-spacing: 0;\n      text-align: center; }\n    body h3 {\n      text-align: center;\n      font-family: \"Roboto\", sans-serif;\n      font-size: 18px;\n      color: #ffffff;\n      letter-spacing: 0;\n      text-align: center; }\n    body a:-webkit-any-link {\n      color: white;\n      text-decoration: none; }\n    body .bryt_profile {\n      background-color: #673653;\n      height: 9px;\n      -ms-flex-line-pack: left;\n      align-content: left;\n      width: 110%;\n      margin-left: -15px; } }\n\n#dashboard_div .dashboard_section {\n  width: 100%;\n  background-color: #311631; }\n\n#dashboard_div #first_section_dashboard {\n  margin-bottom: 10px; }\n  #dashboard_div #first_section_dashboard h1 {\n    margin-top: 67px;\n    margin-bottom: 0px; }\n  #dashboard_div #first_section_dashboard h2 {\n    margin-bottom: 19px;\n    margin-top: 61px; }\n  #dashboard_div #first_section_dashboard p {\n    font-size: 16px;\n    font-family: \"Lato\", sans-serif;\n    font-weight: 400;\n    text-align: center;\n    margin-bottom: 80px; }\n  #dashboard_div #first_section_dashboard .large_button {\n    border: 1px solid #ffffff;\n    border-radius: 9px;\n    width: 273px;\n    height: 52px;\n    background-color: #311631;\n    color: #ffffff;\n    font-size: 20px;\n    text-align: center;\n    margin: 0 auto;\n    margin-top: 83px;\n    margin-bottom: 80px;\n    display: block; }\n  #dashboard_div #first_section_dashboard .picture-grid {\n    margin-left: 16px;\n    margin-right: 16px;\n    display: grid;\n    grid-template-columns: 50% 50%;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    grid-column-gap: 10px;\n    grid-row-gap: 10px;\n    margin-bottom: 77px; }\n    #dashboard_div #first_section_dashboard .picture-grid .grid-box img {\n      width: 100%; }\n\n#dashboard_div .page_break {\n  background-color: #673653;\n  width: 100%;\n  height: 10px;\n  display: grid;\n  grid-template-columns: auto; }\n\n#dashboard_div #second_section_dashboard {\n  margin-bottom: 10px; }\n  #dashboard_div #second_section_dashboard h2 {\n    margin-bottom: 46px;\n    margin-top: 79px; }\n  #dashboard_div #second_section_dashboard .thread-grid {\n    margin-top: 44px;\n    margin-left: 16px;\n    margin-right: 16px;\n    display: grid;\n    grid-template-columns: 20% 75% 5%;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    grid-column-gap: 0px;\n    margin-bottom: 77px; }\n    #dashboard_div #second_section_dashboard .thread-grid .thread-grid-box {\n      margin-bottom: 20px; }\n      #dashboard_div #second_section_dashboard .thread-grid .thread-grid-box p {\n        font-size: 16px;\n        font-family: \"Lato\", sans-serif;\n        font-weight: 400;\n        margin-top: 12px;\n        margin-left: 5px;\n        margin-bottom: 0px; }\n      #dashboard_div #second_section_dashboard .thread-grid .thread-grid-box #p2 {\n        margin-top: 0px;\n        font-weight: 300; }\n      #dashboard_div #second_section_dashboard .thread-grid .thread-grid-box .arrow {\n        margin-top: 11px;\n        margin-left: 2px; }\n\n#dashboard_div #third_section_dashboard h2 {\n  margin-bottom: 46px;\n  margin-top: 79px; }\n\n#dashboard_div #third_section_dashboard p {\n  font-size: 16px;\n  font-family: \"Lato\", sans-serif;\n  font-weight: normal;\n  margin-bottom: 15px;\n  margin-top: 0px; }\n\n#dashboard_div #third_section_dashboard .container {\n  display: grid;\n  grid-template-columns: auto auto auto;\n  grid-template-rows: auto auto auto;\n  justify-items: center;\n  margin-bottom: 78px; }\n  #dashboard_div #third_section_dashboard .container .small_button {\n    font-size: 14px;\n    border: 1px solid #ffffff;\n    border-radius: 5px;\n    font-weight: 400;\n    text-align: center;\n    background-color: #311631;\n    width: 81px;\n    height: 21px;\n    color: #ffffff;\n    display: block;\n    margin: 0px; }\n  #dashboard_div #third_section_dashboard .container img {\n    margin-bottom: 27px; }\n\n#dashboard_div #fourth_section_dashboard h2 {\n  margin-bottom: 58px;\n  margin-top: 79px; }\n\n#dashboard_div #fourth_section_dashboard img {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 49px; }\n\n#dashboard_div #fourth_section_dashboard .textbox {\n  margin: auto;\n  width: 245px;\n  height: auto;\n  margin-bottom: 51px; }\n  #dashboard_div #fourth_section_dashboard .textbox p {\n    text-align: center;\n    font-size: 16px;\n    font-family: \"Lato\", sans-serif;\n    font-weight: normal; }\n\n#dashboard_div #fourth_section_dashboard .small_button {\n  margin-bottom: 60px;\n  width: 81px;\n  height: 21px; }\n\n#dashboard_div #fourth_section_dashboard .outer {\n  margin: auto;\n  margin-right: 0px; }\n  #dashboard_div #fourth_section_dashboard .outer .close {\n    color: black; }\n  #dashboard_div #fourth_section_dashboard .outer .content {\n    padding: 0px;\n    margin: auto;\n    padding: 10px 5px; }\n    #dashboard_div #fourth_section_dashboard .outer .content p {\n      margin: 0px;\n      color: #311631;\n      font-size: 16px;\n      font-family: \"Lato\", sans-serif; }\n    #dashboard_div #fourth_section_dashboard .outer .content h2 {\n      color: #311631;\n      margin-top: 20px;\n      margin-bottom: 30px; }\n    #dashboard_div #fourth_section_dashboard .outer .content .large_button {\n      border: 1px solid #ffffff;\n      border-radius: 9px;\n      width: 200px;\n      height: 40px;\n      background-color: #311631;\n      color: #ffffff;\n      font-size: 14px;\n      text-align: center;\n      margin: 0 auto;\n      margin-top: 30px;\n      margin-bottom: 10px;\n      display: block; }\n  #dashboard_div #fourth_section_dashboard .outer #id {\n    margin-bottom: 100px; }\n\n#dashboard_div #fifth_section_dashboard h2 {\n  margin-bottom: 100px; }\n"
);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"style_popupinfo.css":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/ui/components/dashboard/style_popupinfo.css                                                                //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.exports = require("meteor/modules").addStyles(
  "  .styles_modal__gNwvD{\n    background-color: white;\n    border-radius: 5px;\n  }\n  .styles_overlay__CLSq-{\n    background: rgba(49, 22, 49, 0.75);\n  }\n  #heading{\n    color: #311631;\n  }\n  #popupP{\n    color:#311631;\n    font-size: 16px;\n    font-family: 'Lato', sans-serif;\n}\n.small_button_popup{\n  font-size: 16px;\n  border:1px solid #311631;\n  border-radius: 5px;\n  font-weight: 400;\n  text-align: center;\n  background-color: white;\n  width:88px;\n  height:21px;\n  color: #311631;\n  display: block;\n  margin:0px;\n}\n.button-grid{\n  display:grid;\n  grid-template-columns: 30% 30% 30%;\n  grid-row-gap: 7px;\n  grid-template-rows: 35px;\n  justify-content: center;\n  grid-column-gap: 7px;\n  grid-row-gap: 0px;\n  margin-bottom: 15px;\n  margin-top: 35px;\n}\n\n.button-grid-box{\n  font-size:'Lato', sans-serif;\n  border:1px solid #311631;\n  border-radius: 5px;\n  font-weight: 400;\n  text-align: center;\n  background-color: white;\n  width:81px;\n  height:21px;\n  color: #311631;\n  margin:0px;\n}\n#profile{\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 40%;\n}\n"
);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"hamburger":{"hamburger.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/ui/components/hamburger/hamburger.js                                                                       //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

module.export({
  "default": function () {
    return Hamburger;
  }
});
var React, Component;
module.watch(require("react"), {
  "default": function (v) {
    React = v;
  },
  Component: function (v) {
    Component = v;
  }
}, 0);
var Menu;
module.watch(require("react-burger-menu"), {
  slide: function (v) {
    Menu = v;
  }
}, 1);
module.watch(require("../../../../client/main.css"));
module.watch(require("./hamburger_style.css"));

var Hamburger =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Hamburger, _React$Component);

  function Hamburger() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Hamburger.prototype;

  _proto.showSettings = function () {
    function showSettings(event) {
      event.preventDefault();
    }

    return showSettings;
  }();

  _proto.render = function () {
    function render() {
      return React.createElement(Menu, {
        width: 170,
        customBurgerIcon: React.createElement("img", {
          src: "vectors/meny.svg"
        }),
        pageWrapId: "page-wrap"
      }, React.createElement("a", {
        id: "home",
        className: "menu-item",
        href: "/"
      }, "Hem"), React.createElement("a", {
        id: "profile",
        className: "menu-item",
        href: "/profile"
      }, "Profil"), React.createElement("a", {
        id: "search",
        className: "menu-item",
        href: "/search"
      }, "Alla tr\xE5dar"), React.createElement("a", {
        id: "login",
        className: "menu-item",
        href: "/login"
      }, "Logga ut"));
    }

    return render;
  }();

  return Hamburger;
}(React.Component);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"hamburger_style.css":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/ui/components/hamburger/hamburger_style.css                                                                //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.exports = require("meteor/modules").addStyles(
  "/**** BURGER MENU ***/\n    /* Position and sizing of burger button */\n    .bm-burger-button {\n      position: absolute;\n      width: 26px;\n      height: 30px;\n      left: 25px;\n      top: 22px;\n      bottom: 28px;\n    }\n\n    /* Color/shape of burger icon bars */\n    .bm-burger-bars {\n      background: white;\n    }\n\n    /* Position and sizing of clickable cross button */\n    .bm-cross-button {\n      height: 24px;\n      width: 24px;\n    }\n\n    /* Color/shape of close button cross */\n    .bm-cross {\n      background: white;\n    }\n\n    /* General sidebar styles */\n    .bm-menu {\n      background: #673653;\n      padding: 2.5em 1.5em 5;\n      font-size: 22px;\n      font-family: 'Roboto', sans-serif;\n      font-weight: bold;\n\n\n    }\n    a#profile.menu-item{\n        width: 100%;\n    }\n    /* Morph shape necessary with bubble or elastic */\n    .bm-morph-shape {\n      fill: #373a47;\n    }\n\n    /* Wrapper for item list */\n    .bm-item-list {\n      color: #b8b7ad;\n      padding: .0em;\n    }\n\n\n    /* Styling of overlay */\n    .bm-overlay {\n      background: rgba(0, 0, 0, 0.3);\n    }\n\n    .menu-item {\n      padding: 8px;\n      display: block;\n      align-items: baseline;\n\n    }\n"
);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"login":{"login.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/ui/components/login/login.js                                                                               //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var withHistory, Link;
module.watch(require("react-router-dom"), {
  withHistory: function (v) {
    withHistory = v;
  },
  Link: function (v) {
    Link = v;
  }
}, 0);
var React, Component, PropTypes;
module.watch(require("react"), {
  "default": function (v) {
    React = v;
  },
  Component: function (v) {
    Component = v;
  },
  PropTypes: function (v) {
    PropTypes = v;
  }
}, 1);
var withTracker;
module.watch(require("meteor/react-meteor-data"), {
  withTracker: function (v) {
    withTracker = v;
  }
}, 2);
var ReactDOM;
module.watch(require("react-dom"), {
  "default": function (v) {
    ReactDOM = v;
  }
}, 3);
var AccountsUIWrapper;
module.watch(require("../../AccountsUIWrapper.js"), {
  "default": function (v) {
    AccountsUIWrapper = v;
  }
}, 4);
var Session;
module.watch(require("meteor/session"), {
  Session: function (v) {
    Session = v;
  }
}, 5);
var getUser;
module.watch(require("../../../api/get-user.js"), {
  getUser: function (v) {
    getUser = v;
  }
}, 6);
var Template;
module.watch(require("meteor/templating"), {
  Template: function (v) {
    Template = v;
  }
}, 7);
var Blaze;
module.watch(require("meteor/blaze"), {
  Blaze: function (v) {
    Blaze = v;
  }
}, 8);
module.watch(require("../../../../client/main.css"));
module.watch(require("./style_login.css"));

var Login =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Login, _React$Component);

  function Login(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      hideCompleted: false
    };
    return _this;
  }

  var _proto = Login.prototype;

  _proto.render = function () {
    function render() {
      return React.createElement("div", {
        className: "login"
      }, React.createElement("main", {
        id: "page-wrap"
      }, React.createElement("div", {
        className: "container"
      }, React.createElement("h1", null, "ALOHA!"), React.createElement("p", {
        id: "welcomeText",
        className: "login_welcomeText"
      }, "V\xE4lkommen till en app som riktar sig till kvinnor, men d\xE4r vem som helst kan skapa ett konto och vara aktiv i diskussioner.", React.createElement("br", null), React.createElement("br", null), "H\xE4r kan du diskutera, j\xE4mf\xF6ra, dela och inspereras av kvinnor i hela v\xE4rlden.")), React.createElement("div", {
        className: "login_frontpage_buttons"
      }, React.createElement("button", {
        className: "user_button"
      }, React.createElement("h3", null, React.createElement(AccountsUIWrapper, null))), React.createElement("div", {
        className: "login_button_divider"
      }), React.createElement("button", {
        className: "facebook_button"
      }, React.createElement("img", {
        className: "login_facebook_img",
        src: "vectors/login/facebook_f.png"
      }), "Logga in med Facebook"), React.createElement("h4", {
        id: "signUp_text"
      }, "Registrera dig")), React.createElement("img", {
        className: "pineapple",
        src: "vectors/pineapple.svg"
      })));
    }

    return render;
  }();

  return Login;
}(React.Component);

module.exportDefault(withTracker(function () {
  // if (Meteor.user()) {
  //   let user = getUser(Meteor.user());
  // }
  return {
    // tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
    // incompleteCount: Tasks.find({ checked: { $ne: true } }).count(),
    currentUser: Meteor.user(),
    email: Session.get('email') // this.props.theData;
    //const email: Session.email;
    //const email Session.get('email');

  };
})(Login));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"style_login.css":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/ui/components/login/style_login.css                                                                        //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.exports = require("meteor/modules").addStyles(
  "@media screen and (max-width: 700px) {\n  body {\n    background-color: #311631;\n    color: white;\n    margin: 0px;\n    padding: 0px;\n    width: 100%;\n    height: 100%; }\n    body .burger {\n      padding: 15px; }\n    body .pineapple {\n      display: block;\n      margin-left: auto;\n      margin-right: auto;\n      margin-bottom: 10px; }\n    body h1 {\n      text-align: center;\n      font-size: 50px;\n      font-weight: 700;\n      font-family: \"Lato\", sans-serif;\n      color: #ffffff;\n      margin: 80px; }\n    body h2 {\n      text-align: center;\n      font-family: \"Roboto\", sans-serif;\n      font-weight: 700;\n      font-size: 22px;\n      color: #ffffff;\n      letter-spacing: 0;\n      text-align: center; }\n    body h3 {\n      text-align: center;\n      font-family: \"Roboto\", sans-serif;\n      font-size: 18px;\n      color: #ffffff;\n      letter-spacing: 0;\n      text-align: center; }\n    body a:-webkit-any-link {\n      color: white;\n      text-decoration: none; }\n    body .bryt_profile {\n      background-color: #673653;\n      height: 9px;\n      -ms-flex-line-pack: left;\n      align-content: left;\n      width: 110%;\n      margin-left: -15px; } }\n\n@media screen and (max-width: 700px) {\n  .login .login_welcomeText {\n    text-align: center;\n    font-size: 16px;\n    font-family: \"Lato\", sans-serif;\n    font-weight: normal;\n    margin-left: 32px;\n    margin-right: 26px;\n    line-height: 22px;\n    margin-top: 35px;\n    margin-bottom: 30px; }\n  .login .login_frontpage_buttons {\n    text-align: center; }\n  .login .user_button {\n    background-color: #47b39c;\n    border-color: #47b39c;\n    border-radius: 9px;\n    width: 275px;\n    height: 54px;\n    font-family: Lato-Regular;\n    font-size: 20px;\n    color: #ffffff;\n    letter-spacing: 0;\n    text-align: center; }\n  .login .login-buttons-dropdown-align- {\n    text-align: center;\n    font-weight: 400;\n    font-size: 20px;\n    color: #ffffff; }\n  .login .facebook_button {\n    text-align: center;\n    font-size: 20px;\n    font-family: \"Lato\", sans-serif;\n    font-weight: normal;\n    background-color: #311631;\n    border: 1px solid #ffffff;\n    color: #ffffff;\n    border-radius: 9px;\n    width: 273px;\n    height: 52px;\n    color: #ffffff;\n    letter-spacing: 0; }\n  .login .login_facebook_img {\n    margin-top: auto;\n    margin-left: 11px;\n    float: left;\n    width: 11px;\n    height: 21px; }\n  .login .login_button_divider {\n    height: 15px; }\n  .login #signUp_text {\n    text-align: center;\n    font-size: 20px;\n    font-family: \"Lato\", sans-serif;\n    font-weight: normal;\n    color: #47b39c;\n    height: auto; }\n  .login .accounts-dialog {\n    background-color: #ffffff; }\n  .login #login-dropdown-list {\n    background-color: #311631; }\n  .login .login-close-text, .login .or-text, .login #login-username-label,\n  .login #login-password-label, .login #signup-link {\n    font-size: 16px;\n    font-family: \"Lato\", sans-serif;\n    font-weight: normal;\n    color: #ffffff; }\n  .login #login-buttons-github, .login #login-buttons-password, .login #login-buttons-logout {\n    background-color: #47b39c; }\n  .login #page-wrap form {\n    margin-top: 0px;\n    margin-left: 0px; }\n  .login .accounts-dialog input[type=text], .login .accounts-dialog input[type=email], .login .accounts-dialog input[type=password] {\n    width: 80%; }\n  .login #login-buttons button.login-button {\n    margin-left: 2px;\n    margin-top: 15px; } }\n"
);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"profile":{"profile.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/ui/components/profile/profile.js                                                                           //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

module.export({
  Profile: function () {
    return Profile;
  }
});
var React;
module.watch(require("react"), {
  "default": function (v) {
    React = v;
  }
}, 0);
var Component, PropTypes;
module.watch(require("react"), {
  Component: function (v) {
    Component = v;
  },
  PropTypes: function (v) {
    PropTypes = v;
  }
}, 1);
var withHistory, Link;
module.watch(require("react-router-dom"), {
  withHistory: function (v) {
    withHistory = v;
  },
  Link: function (v) {
    Link = v;
  }
}, 2);
module.watch(require("../../../../client/main.css"));
module.watch(require("./style_profile.css"));
var Hamburger;
module.watch(require("../hamburger/hamburger.js"), {
  "default": function (v) {
    Hamburger = v;
  }
}, 3);

var Profile =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2.default)(Profile, _Component);

  function Profile(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      hideCompleted: false
    };
    return _this;
  }

  var _proto = Profile.prototype;

  _proto.render = function () {
    function render() {
      var profileName = this.props.currentUser.profile.name;
      var email = this.props.currentUser.profile.email;
      return React.createElement("div", null, React.createElement(Hamburger, null), React.createElement("main", {
        id: "page-wrap"
      }, React.createElement("section", {
        id: "first_profile_section"
      }, React.createElement("h2", {
        id: "rubrik_profile"
      }, profileName), React.createElement("img", {
        id: "profilbild_profile",
        src: "vectors/thread/pineapple.gif"
      }), React.createElement("div", {
        className: "grid-container_profile1"
      }, React.createElement("h3", {
        className: "tradantal"
      }, "52"), React.createElement("p", {
        className: "tradar"
      }, "tr\xE5dar"), React.createElement("h3", {
        className: "trefyra"
      }, "34 k"), React.createElement("p", {
        className: "foljare"
      }, "f\xF6ljare"), React.createElement("h3", {
        className: "antalfoljer"
      }, "200"), React.createElement("p", {
        className: "foljer"
      }, "f\xF6ljer")), React.createElement("button", {
        className: "small_button_profile"
      }, "F\xF6lj +"), React.createElement("div", {
        id: "profile_info"
      }, React.createElement("p", {
        className: "profile_info_text"
      }, profileName), React.createElement("p", {
        id: "mitten",
        className: "profile_info_text"
      }, email), React.createElement("p", {
        id: "mitten",
        className: "profile_info_text"
      }, "lovenberg@gmail.com"), React.createElement("p", {
        id: "mitten",
        className: "profile_info_text"
      }, "lovenberg.com"), React.createElement("img", {
        id: "plupp",
        src: "png/profile/red_pin.png"
      }), React.createElement("p", {
        id: "sthlm"
      }, "Stockholm"))), React.createElement("div", {
        className: "bryt_profile"
      }), React.createElement("section", {
        id: "second_profile_section"
      }, React.createElement("h2", {
        id: "publtrad"
      }, "Publicerade tr\xE5dar"), React.createElement("div", {
        className: "tradar"
      }, React.createElement("p", {
        className: "profamne"
      }, "Fick L\xF6nef\xF6rh\xF6jning"), React.createElement("p", {
        className: "profkategori"
      }, "Karri\xE4r"), React.createElement("img", {
        className: "prof_arrow",
        src: "vectors/arrow.svg"
      })), React.createElement("div", {
        className: "tradar"
      }, React.createElement("p", {
        className: "profamne"
      }, "Hur orkar man springa mer \xE4n 3 km?"), React.createElement("p", {
        className: "profkategori"
      }, "Tr\xE4ning"), React.createElement("img", {
        className: "prof_arrow",
        src: "vectors/arrow.svg"
      })), React.createElement(Link, {
        className: "profile_link",
        to: "/thread"
      }, React.createElement("div", {
        className: "tradar"
      }, React.createElement("p", {
        className: "profamne"
      }, "S\xE4lja eller inte s\xE4lja?"), React.createElement("p", {
        className: "profkategori"
      }, "Ekonomi"), React.createElement("img", {
        className: "prof_arrow",
        src: "vectors/arrow.svg"
      })))), React.createElement("div", {
        className: "bryt_profile"
      }), React.createElement("section", {
        id: "third_profile_section"
      }, React.createElement("h2", {
        id: "publtrad"
      }, "Kommenterade tr\xE5dar"), React.createElement("div", {
        className: "tradar"
      }, React.createElement("p", {
        className: "profamne"
      }, "SD, f\xF6r eller emot?"), React.createElement("p", {
        className: "profkategori"
      }, "Politik"), React.createElement("img", {
        className: "prof_arrow",
        src: "vectors/arrow.svg"
      }))), React.createElement("div", {
        className: "search_footer"
      }, React.createElement("img", {
        className: "pineapple",
        src: "vectors/pineapple.svg"
      }))));
    }

    return render;
  }();

  return Profile;
}(Component);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"style_profile.css":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/ui/components/profile/style_profile.css                                                                    //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.exports = require("meteor/modules").addStyles(
  "@media screen and (max-width: 700px) {\n  body {\n    background-color: #311631;\n    color: white;\n    margin: 0px;\n    padding: 0px;\n    width: 100%;\n    height: 100%; }\n    body .burger {\n      padding: 15px; }\n    body .pineapple {\n      display: block;\n      margin-left: auto;\n      margin-right: auto;\n      margin-bottom: 10px; }\n    body h1 {\n      text-align: center;\n      font-size: 50px;\n      font-weight: 700;\n      font-family: \"Lato\", sans-serif;\n      color: #ffffff;\n      margin: 80px; }\n    body h2 {\n      text-align: center;\n      font-family: \"Roboto\", sans-serif;\n      font-weight: 700;\n      font-size: 22px;\n      color: #ffffff;\n      letter-spacing: 0;\n      text-align: center; }\n    body h3 {\n      text-align: center;\n      font-family: \"Roboto\", sans-serif;\n      font-size: 18px;\n      color: #ffffff;\n      letter-spacing: 0;\n      text-align: center; }\n    body a:-webkit-any-link {\n      color: white;\n      text-decoration: none; }\n    body .bryt_profile {\n      background-color: #673653;\n      height: 9px;\n      -ms-flex-line-pack: left;\n      align-content: left;\n      width: 110%;\n      margin-left: -15px; } }\n\n@media screen and (max-width: 700px) {\n  .bryt_profile {\n    background-color: #673653;\n    height: 9px;\n    clear: both;\n    -ms-flex-line-pack: left;\n    align-content: left;\n    width: 110%;\n    margin-left: -15px;\n    margin-top: 100px;\n    margin-bottom: 30px; }\n  #first_profile_section #rubrik_profile {\n    margin-top: 70px;\n    font-size: 20px;\n    font-weight: 300;\n    font-family: \"Roboto\", sans-serif; }\n  #first_profile_section .tradantal {\n    grid-area: tradantal; }\n  #first_profile_section .tradar {\n    grid-area: tradar; }\n  #first_profile_section .trefyra {\n    grid-area: tusen; }\n  #first_profile_section .foljare {\n    grid-area: foljare; }\n  #first_profile_section .antalfoljer {\n    grid-area: antalfoljer; }\n  #first_profile_section .foljer {\n    grid-area: foljer; }\n  #first_profile_section .grid-container_profile1 {\n    margin-top: 25px;\n    grid-gap: 0px 25px;\n    padding: 0px;\n    grid-template-rows: 25px;\n    margin-left: 40px;\n    grid-template-areas: ' tradantal tusen antalfoljer' ' tradar foljare foljer' ' tradar foljare foljer'; }\n  #first_profile_section .tradantal, #first_profile_section .trefyra, #first_profile_section .antalfoljer {\n    font-family: \"Roboto\", sans-serif;\n    font-weight: 400;\n    padding-top: -20px; }\n  #first_profile_section .tradar, #first_profile_section .foljare, #first_profile_section .foljer {\n    font-weight: 300;\n    font-family: \"Lato\", sans-serif; }\n  #first_profile_section #profilbild_profile {\n    float: left;\n    margin-left: 48px;\n    margin-top: 30px;\n    margin-bottom: 5px;\n    border: 2px solid white;\n    border-radius: 100%;\n    width: 63px;\n    height: 63px;\n    margin-top: 19px; }\n  #first_profile_section .small_button_profile {\n    font-size: 14px;\n    border: 1px solid #ffffff;\n    border-radius: 5px;\n    font-weight: 400;\n    text-align: center;\n    background-color: #311631;\n    width: 81px;\n    height: 21px;\n    color: #ffffff;\n    display: block;\n    margin-left: 40px;\n    margin-bottom: 30px;\n    clear: both; }\n  #first_profile_section #profile_info {\n    margin-left: 10px; }\n    #first_profile_section #profile_info .profile_info_text {\n      margin-left: 28px;\n      font-family: \"Lato\", sans-serif;\n      font-size: 16px;\n      font-weight: 300; }\n  #first_profile_section #sthlm {\n    float: left;\n    margin-left: 10px;\n    font-family: \"Lato\", sans-serif;\n    font-size: 16px;\n    font-weight: 300; }\n  #first_profile_section #mitten {\n    margin-top: 2px;\n    margin-bottom: 2px; }\n  #first_profile_section #plupp {\n    margin-top: 15px;\n    margin-left: 28px;\n    float: left;\n    width: 20px; }\n  #second_profile_section {\n    margin-bottom: 300px; }\n    #second_profile_section #publtrad {\n      margin-top: 50px;\n      font-family: \"Roboto\", sans-serif;\n      font-size: 22px;\n      font-weight: 700;\n      margin-bottom: 20px; }\n    #second_profile_section .tradar {\n      float: left;\n      width: 100%;\n      margin-left: 26px; }\n      #second_profile_section .tradar .profamne {\n        font-weight: 400;\n        float: left;\n        font-size: 16px;\n        font-family: \"Lato\", sans-serif;\n        margin-bottom: 0px; }\n      #second_profile_section .tradar .profkategori {\n        font-weight: 100;\n        float: left;\n        font-size: 16px;\n        font-family: \"Lato\", sans-serif;\n        margin-top: 0px;\n        clear: both; }\n      #second_profile_section .tradar .prof_arrow {\n        margin-top: -10px;\n        margin-bottom: 30px;\n        float: right;\n        margin-right: 55px; }\n  #third_profile_section {\n    margin-bottom: 230px; }\n    #third_profile_section #publtrad {\n      margin-top: 50px;\n      font-family: \"Roboto\", sans-serif;\n      font-size: 22px;\n      font-weight: 700;\n      margin-bottom: 20px; }\n    #third_profile_section .tradar {\n      float: left;\n      width: 100%;\n      margin-left: 26px; }\n      #third_profile_section .tradar .profamne {\n        font-weight: 400;\n        float: left;\n        font-size: 16px;\n        font-family: \"Lato\", sans-serif;\n        margin-bottom: 0px; }\n      #third_profile_section .tradar .profkategori {\n        font-weight: 100;\n        float: left;\n        font-size: 16px;\n        font-family: \"Lato\", sans-serif;\n        margin-top: 0px;\n        clear: both; }\n      #third_profile_section .tradar .prof_arrow {\n        margin-top: -10px;\n        margin-bottom: 30px;\n        float: right;\n        margin-right: 55px; }\n      #third_profile_section .tradar .search_footer {\n        margin-bottom: 10px;\n        width: 100%; } }\n"
);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"search":{"search.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/ui/components/search/search.js                                                                             //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.export({
  Search: function () {
    return Search;
  }
});
var React;
module.watch(require("react"), {
  "default": function (v) {
    React = v;
  }
}, 0);
var withHistory, Link;
module.watch(require("react-router-dom"), {
  withHistory: function (v) {
    withHistory = v;
  },
  Link: function (v) {
    Link = v;
  }
}, 1);
module.watch(require("../../../../client/main.css"));
module.watch(require("./style_search.css"));
var Hamburger;
module.watch(require("../hamburger/hamburger.js"), {
  "default": function (v) {
    Hamburger = v;
  }
}, 2);

var Search = function () {
  return React.createElement("div", {
    className: "search"
  }, React.createElement(Hamburger, null), React.createElement("main", {
    id: "page-wrap"
  }, React.createElement("div", {
    id: "h2"
  }, React.createElement("h2", null, "Alla tr\xE5dar")), React.createElement("div", {
    className: "search_wrapper"
  }, React.createElement(Link, {
    to: "/searchresult"
  }, React.createElement("button", {
    className: "search_large_button"
  }, "S\xF6k"))), React.createElement("div", {
    className: "search_wrapper"
  }, React.createElement("p", null, "Hitta tr\xE5dar inom kategorier som du \xE4r intresserad av, ekonomi, sport, smink, politik, studier...")), React.createElement("img", {
    className: "pineapple",
    src: "vectors/pineapple.svg"
  })));
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"style_search.css":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/ui/components/search/style_search.css                                                                      //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.exports = require("meteor/modules").addStyles(
  "@media screen and (max-width: 700px) {\n  body {\n    background-color: #311631;\n    color: white;\n    margin: 0px;\n    padding: 0px;\n    width: 100%;\n    height: 100%; }\n    body .burger {\n      padding: 15px; }\n    body .pineapple {\n      display: block;\n      margin-left: auto;\n      margin-right: auto;\n      margin-bottom: 10px; }\n    body h1 {\n      text-align: center;\n      font-size: 50px;\n      font-weight: 700;\n      font-family: \"Lato\", sans-serif;\n      color: #ffffff;\n      margin: 80px; }\n    body h2 {\n      text-align: center;\n      font-family: \"Roboto\", sans-serif;\n      font-weight: 700;\n      font-size: 22px;\n      color: #ffffff;\n      letter-spacing: 0;\n      text-align: center; }\n    body h3 {\n      text-align: center;\n      font-family: \"Roboto\", sans-serif;\n      font-size: 18px;\n      color: #ffffff;\n      letter-spacing: 0;\n      text-align: center; }\n    body a:-webkit-any-link {\n      color: white;\n      text-decoration: none; }\n    body .bryt_profile {\n      background-color: #673653;\n      height: 9px;\n      -ms-flex-line-pack: left;\n      align-content: left;\n      width: 110%;\n      margin-left: -15px; } }\n\n@media screen and (max-width: 700px) {\n  .search #page-wrap {\n    margin-top: 70px; }\n    .search #page-wrap #h2 {\n      padding-top: 50px; }\n    .search #page-wrap .search_wrapper {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n      -ms-flex-align: center;\n      align-items: center;\n      -webkit-box-pack: center;\n      -ms-flex-pack: center;\n      justify-content: center; }\n      .search #page-wrap .search_wrapper .search_large_button {\n        text-align: center;\n        background-color: #311631;\n        color: #ffffff;\n        border: 1px solid #ffffff;\n        border-radius: 9px;\n        font-size: 20px;\n        font-weight: 400;\n        width: 273px;\n        height: 52px;\n        margin-top: 83px; }\n    .search #page-wrap .search_wrapper {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n      -ms-flex-align: center;\n      align-items: center;\n      -webkit-box-pack: center;\n      -ms-flex-pack: center;\n      justify-content: center;\n      height: 200px;\n      margin-left: 50px;\n      margin-right: 50px; }\n      .search #page-wrap .search_wrapper p {\n        text-align: center;\n        margin: 0px;\n        margin-top: -10px;\n        font-family: \"Lato\", sans-serif;\n        font-size: 16px;\n        font-weight: 100; }\n    .search #page-wrap .search_footer {\n      position: fixed;\n      margin-bottom: 10px;\n      width: 100%; } }\n"
);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"search-result":{"search-result.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/ui/components/search-result/search-result.js                                                               //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.export({
  SearchResult: function () {
    return SearchResult;
  }
});
var React;
module.watch(require("react"), {
  "default": function (v) {
    React = v;
  }
}, 0);
var withHistory, Link;
module.watch(require("react-router-dom"), {
  withHistory: function (v) {
    withHistory = v;
  },
  Link: function (v) {
    Link = v;
  }
}, 1);
module.watch(require("../../../../client/main.css"));
module.watch(require("./style_search-result.css"));
var Hamburger;
module.watch(require("../hamburger/hamburger.js"), {
  "default": function (v) {
    Hamburger = v;
  }
}, 2);

var SearchResult = function () {
  return React.createElement("div", {
    className: "search_result"
  }, React.createElement(Hamburger, null), React.createElement("main", {
    id: "page-wrap"
  }, React.createElement("section", {
    id: "searchresult_first_section",
    className: "searchresult_section"
  }, React.createElement("h2", null, "Alla tr\xE5dar"), React.createElement("div", {
    className: "searchresult_wrapper"
  }, React.createElement("button", {
    className: "searchresult_large_button"
  }, "Ekonomi"))), React.createElement("section", {
    id: "searchresult_second_section",
    className: "searchresult_section"
  }, React.createElement("div", {
    className: "searchresult-grid"
  }, React.createElement("div", {
    className: "searchresult-grid-box"
  }, React.createElement("img", {
    className: "profile_img",
    src: "png/search_result/person1_search_result.png"
  })), React.createElement("div", {
    className: "searchresult-grid-box"
  }, React.createElement("p", null, "Hur klarar man sig utan matl\xE5dor?"), React.createElement("p", {
    id: "p2"
  }, "Ekonomi")), React.createElement("div", {
    className: "searchresult-grid-box"
  }, React.createElement("img", {
    className: "arrow",
    src: "vectors/arrow.svg"
  })), React.createElement(Link, {
    className: "searchResult_link",
    to: "/thread"
  }, React.createElement("div", {
    className: "searchresult-grid-box"
  }, React.createElement("img", {
    className: "profile_img",
    src: "png/search_result/person2_search_result.png"
  }))), React.createElement(Link, {
    className: "searchResult_link",
    to: "/thread"
  }, React.createElement("div", {
    className: "searchresult-grid-box"
  }, React.createElement("p", null, "S\xE4lja eller inte s\xE4lja?"), React.createElement("p", {
    id: "p2"
  }, "Ekonomi"))), React.createElement(Link, {
    className: "searchResult_link",
    to: "/thread"
  }, React.createElement("div", {
    className: "searchresult-grid-box"
  }, React.createElement("img", {
    className: "arrow",
    src: "vectors/arrow.svg"
  }))))), React.createElement("img", {
    className: "pineapple",
    src: "vectors/pineapple.svg"
  })));
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"style_search-result.css":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/ui/components/search-result/style_search-result.css                                                        //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.exports = require("meteor/modules").addStyles(
  "@media screen and (max-width: 700px) {\n  body {\n    background-color: #311631;\n    color: white;\n    margin: 0px;\n    padding: 0px;\n    width: 100%;\n    height: 100%; }\n    body .burger {\n      padding: 15px; }\n    body .pineapple {\n      display: block;\n      margin-left: auto;\n      margin-right: auto;\n      margin-bottom: 10px; }\n    body h1 {\n      text-align: center;\n      font-size: 50px;\n      font-weight: 700;\n      font-family: \"Lato\", sans-serif;\n      color: #ffffff;\n      margin: 80px; }\n    body h2 {\n      text-align: center;\n      font-family: \"Roboto\", sans-serif;\n      font-weight: 700;\n      font-size: 22px;\n      color: #ffffff;\n      letter-spacing: 0;\n      text-align: center; }\n    body h3 {\n      text-align: center;\n      font-family: \"Roboto\", sans-serif;\n      font-size: 18px;\n      color: #ffffff;\n      letter-spacing: 0;\n      text-align: center; }\n    body a:-webkit-any-link {\n      color: white;\n      text-decoration: none; }\n    body .bryt_profile {\n      background-color: #673653;\n      height: 9px;\n      -ms-flex-line-pack: left;\n      align-content: left;\n      width: 110%;\n      margin-left: -15px; } }\n\n@media screen and (max-width: 700px) {\n  .search_result .searchresult_section {\n    width: 100%; }\n  .search_result #page-wrap {\n    margin-top: 70px; }\n    .search_result #page-wrap #searchresult_first_section {\n      padding-top: 50px; }\n      .search_result #page-wrap #searchresult_first_section .searchresult_wrapper {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n        -ms-flex-align: center;\n        align-items: center;\n        -webkit-box-pack: center;\n        -ms-flex-pack: center;\n        justify-content: center; }\n        .search_result #page-wrap #searchresult_first_section .searchresult_wrapper .searchresult_large_button {\n          text-align: center;\n          background-color: #311631;\n          color: #ffffff;\n          border: 1px solid #ffffff;\n          border-radius: 9px;\n          font-size: 20px;\n          font-weight: 400;\n          width: 273px;\n          height: 52px;\n          margin-top: 83px; }\n    .search_result #page-wrap #searchresult_second_section {\n      margin-bottom: 10px; }\n      .search_result #page-wrap #searchresult_second_section .searchresult-grid {\n        margin-top: 44px;\n        margin-left: 16px;\n        margin-right: 16px;\n        display: grid;\n        grid-template-columns: 20% 75% 5%;\n        -webkit-box-pack: center;\n        -ms-flex-pack: center;\n        justify-content: center;\n        grid-column-gap: 0px;\n        grid-row-gap: 0px;\n        margin-bottom: 77px; }\n        .search_result #page-wrap #searchresult_second_section .searchresult-grid .searchresult-grid-box {\n          margin-bottom: 20px; }\n          .search_result #page-wrap #searchresult_second_section .searchresult-grid .searchresult-grid-box p {\n            font-size: 16px;\n            font-family: \"Lato\", sans-serif;\n            font-weight: 400;\n            margin-top: 12px;\n            margin-left: 5px;\n            margin-bottom: 0px; }\n          .search_result #page-wrap #searchresult_second_section .searchresult-grid .searchresult-grid-box #p2 {\n            margin-top: 0px;\n            font-weight: 300; }\n          .search_result #page-wrap #searchresult_second_section .searchresult-grid .searchresult-grid-box .arrow {\n            margin-top: 11px;\n            margin-left: 2px; } }\n"
);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"task":{"task.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/ui/components/task/task.js                                                                                 //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

module.export({
  "default": function () {
    return Task;
  }
});
var React, Component;
module.watch(require("react"), {
  "default": function (v) {
    React = v;
  },
  Component: function (v) {
    Component = v;
  }
}, 0);
var Tasks;
module.watch(require("../../../api/tasks.js"), {
  Tasks: function (v) {
    Tasks = v;
  }
}, 1);

var Task =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2.default)(Task, _Component);

  function Task() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Task.prototype;

  _proto.toggleChecked = function () {
    function toggleChecked() {
      // Set the checked property to the opposite of its current value
      Tasks.update(this.props.task._id, {
        $set: {
          checked: !this.props.task.checked
        }
      });
    }

    return toggleChecked;
  }();

  _proto.deleteThisTask = function () {
    function deleteThisTask() {
      Tasks.remove(this.props.task._id);
    }

    return deleteThisTask;
  }();

  _proto.render = function () {
    function render() {
      // Give tasks a different className when they are checked off,
      // so that we can style them nicely in CSS
      var taskClassName = this.props.task.checked ? 'checked' : '';
      return React.createElement("li", {
        className: taskClassName
      }, React.createElement("button", {
        className: "delete",
        onClick: this.deleteThisTask.bind(this)
      }, "\xD7"), React.createElement("input", {
        type: "checkbox",
        readOnly: true,
        checked: !!this.props.task.checked,
        onClick: this.toggleChecked.bind(this)
      }), React.createElement("span", {
        className: "text"
      }, React.createElement("strong", null, this.props.task.username), ": ", this.props.task.text));
    }

    return render;
  }();

  return Task;
}(Component);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"thread":{"style_thread.css":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/ui/components/thread/style_thread.css                                                                      //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.exports = require("meteor/modules").addStyles(
  "@media screen and (max-width: 700px) {\n  body {\n    background-color: #311631;\n    color: white;\n    margin: 0px;\n    padding: 0px;\n    width: 100%;\n    height: 100%; }\n    body .burger {\n      padding: 15px; }\n    body .pineapple {\n      display: block;\n      margin-left: auto;\n      margin-right: auto;\n      margin-bottom: 10px; }\n    body h1 {\n      text-align: center;\n      font-size: 50px;\n      font-weight: 700;\n      font-family: \"Lato\", sans-serif;\n      color: #ffffff;\n      margin: 80px; }\n    body h2 {\n      text-align: center;\n      font-family: \"Roboto\", sans-serif;\n      font-weight: 700;\n      font-size: 22px;\n      color: #ffffff;\n      letter-spacing: 0;\n      text-align: center; }\n    body h3 {\n      text-align: center;\n      font-family: \"Roboto\", sans-serif;\n      font-size: 18px;\n      color: #ffffff;\n      letter-spacing: 0;\n      text-align: center; }\n    body a:-webkit-any-link {\n      color: white;\n      text-decoration: none; }\n    body .bryt_profile {\n      background-color: #673653;\n      height: 9px;\n      -ms-flex-line-pack: left;\n      align-content: left;\n      width: 110%;\n      margin-left: -15px; } }\n\n@media screen and (max-width: 700px) {\n  #page-wrap {\n    margin-top: 70px; }\n    #page-wrap .small_button {\n      font-size: 14px;\n      border: 1px solid #ffffff;\n      border-radius: 5px;\n      font-weight: 400;\n      text-align: center;\n      background-color: #311631;\n      width: 81px;\n      height: 21px;\n      color: #ffffff;\n      display: block;\n      margin-top: 20px;\n      margin-left: auto;\n      margin-right: auto; }\n    #page-wrap #firstSection {\n      width: 100%;\n      margin: 0; }\n      #page-wrap #firstSection .rubrik_thread {\n        text-align: center;\n        margin-top: 30px;\n        font-family: \"Roboto\", sans-serif; }\n      #page-wrap #firstSection #skapadtradav {\n        text-align: center;\n        margin: 0px;\n        margin-top: -10px;\n        font-family: \"Lato\", sans-serif;\n        font-size: 16px;\n        font-weight: 100; }\n      #page-wrap #firstSection #lovenbergText {\n        margin-top: 40px;\n        font-weight: 400; }\n      #page-wrap #firstSection .person1 {\n        display: block;\n        margin-left: auto;\n        margin-right: auto; }\n      #page-wrap #firstSection #fraga {\n        font-family: \"Lato\", sans-serif;\n        font-size: 16px;\n        font-weight: 300;\n        text-align: left;\n        margin-left: 32px;\n        margin-right: 26px;\n        line-height: 22px;\n        margin-top: 35px;\n        margin-bottom: 30px; }\n    #page-wrap .bryt {\n      background-color: #673653;\n      height: 15px;\n      -ms-flex-line-pack: left;\n      align-content: left;\n      width: 110%;\n      margin-left: -15px;\n      margin-top: 20px; }\n    #page-wrap .thread_sections .thread_people_photo {\n      width: 63px;\n      height: 63px;\n      margin-top: 19px;\n      margin-left: 17px;\n      margin-right: 17px;\n      float: left; }\n    #page-wrap .thread_sections .namn {\n      grid-area: namn; }\n    #page-wrap .thread_sections .stad {\n      grid-area: stad; }\n    #page-wrap .thread_sections .grid-container1 {\n      display: grid;\n      float: left;\n      grid-template-areas: 'namn namn' 'stad stad'; }\n    #page-wrap .thread_sections .namn {\n      font-size: 16px;\n      font-weight: 700;\n      font-family: \"Lato\", sans-serif;\n      margin-top: 32px; }\n    #page-wrap .thread_sections .stad {\n      font-size: 14px;\n      font-weight: 400;\n      font-family: \"Lato\", sans-serif;\n      padding-top: 5px; }\n    #page-wrap .thread_sections .check {\n      float: right;\n      margin-right: 10px;\n      margin-top: 25px; }\n    #page-wrap .thread_sections .betyg {\n      font-size: 16px;\n      font-weight: 300;\n      float: right;\n      margin-top: 38px;\n      margin-right: -11px; }\n    #page-wrap .thread_sections .cross {\n      float: right;\n      margin-top: 30px;\n      margin-right: -11px; }\n    #page-wrap .thread_sections .svar {\n      font-family: \"Lato\", sans-serif;\n      font-size: 14px;\n      font-weight: 400;\n      text-align: left;\n      margin-left: 20px;\n      margin-top: 55px;\n      margin-right: 50px;\n      margin-bottom: 30px; }\n    #page-wrap .thread_sections .like {\n      margin-left: 20px;\n      margin-right: 30px; }\n    #page-wrap .new-task {\n      margin-bottom: 600px; }\n    #page-wrap form {\n      margin-top: 40px;\n      margin-left: 20%;\n      height: 20px; }\n      #page-wrap form button {\n        background-color: white;\n        /* Green */\n        border: none;\n        border-radius: 3px;\n        color: #311631;\n        padding: 3px;\n        text-align: center;\n        text-decoration: none;\n        display: inline-block;\n        font-size: 16px;\n        margin: 4px 2px 2px 10px;\n        clear: both;\n        cursor: pointer; }\n    #page-wrap .search_footer {\n      margin-bottom: 0px;\n      width: 100%; } }\n"
);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"thread.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/ui/components/thread/thread.js                                                                             //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

module.export({
  Thread: function () {
    return Thread;
  }
});
var React, Component, PropTypes;
module.watch(require("react"), {
  "default": function (v) {
    React = v;
  },
  Component: function (v) {
    Component = v;
  },
  PropTypes: function (v) {
    PropTypes = v;
  }
}, 0);
var withHistory, Link;
module.watch(require("react-router-dom"), {
  withHistory: function (v) {
    withHistory = v;
  },
  Link: function (v) {
    Link = v;
  }
}, 1);
var withTracker;
module.watch(require("meteor/react-meteor-data"), {
  withTracker: function (v) {
    withTracker = v;
  }
}, 2);
var HTTP;
module.watch(require("meteor/http"), {
  HTTP: function (v) {
    HTTP = v;
  }
}, 3);
var Session;
module.watch(require("meteor/session"), {
  Session: function (v) {
    Session = v;
  }
}, 4);
var ReactDOM;
module.watch(require("react-dom"), {
  "default": function (v) {
    ReactDOM = v;
  }
}, 5);
var App;
module.watch(require("../../App.js"), {
  "default": function (v) {
    App = v;
  }
}, 6);
var Tasks;
module.watch(require("../../../api/tasks.js"), {
  Tasks: function (v) {
    Tasks = v;
  }
}, 7);
var Task;
module.watch(require("../../Task.js"), {
  "default": function (v) {
    Task = v;
  }
}, 8);
module.watch(require("../../../../client/main.css"));
module.watch(require("./style_thread.css"));
var Hamburger;
module.watch(require("../hamburger/hamburger.js"), {
  "default": function (v) {
    Hamburger = v;
  }
}, 9);

var Thread =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2.default)(Thread, _Component);

  function Thread(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      hideCompleted: false
    };
    _this.deleteComment = _this.deleteComment.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  var _proto = Thread.prototype;

  _proto.addComments = function () {
    function addComments(event) {
      //Gör så att denna funktion inte körs hela tiden.
      event.preventDefault();
      var text = this.refs.comment.value.trim();
      var currentUser = this.props.currentUser.profile.name;
      Meteor.call('addComments', text, currentUser);
      console.log(text);
    }

    return addComments;
  }();

  _proto.deleteComment = function () {
    function deleteComment(event) {
      Meteor.call('deleteComment', event.target.id);
    }

    return deleteComment;
  }();

  _proto.render = function () {
    function render() {
      var _this2 = this;

      var comments = this.props.currentComments.map(function (comment) {
        return React.createElement("p", {
          className: "svar",
          id: comment._id,
          onClick: _this2.deleteComment,
          key: comment._id
        }, comment.text);
      });
      return React.createElement("div", null, React.createElement(Hamburger, null), React.createElement("main", {
        id: "page-wrap"
      }, React.createElement("section", {
        id: "firstSection",
        className: "thread_sections"
      }, React.createElement("h2", {
        className: "rubrik_thread"
      }, "S\xE4lja eller inte s\xE4lja?"), React.createElement("p", {
        id: "skapadtradav"
      }, "Tr\xE5d skapad av"), React.createElement("h2", {
        id: "lovenbergText"
      }, "lovenberg"), React.createElement("img", {
        className: "person1",
        src: "png/thread/person1_thread.png"
      }), React.createElement("button", {
        className: "small_button"
      }, "F\xF6lj +"), React.createElement("p", {
        id: "fraga"
      }, "Jag har pengar sparade i en fond sedan l\xE4nge. Jag har hela tiden t\xE4nkt att jag vill anv\xE4nda pengarna som en del i en kontantinsats till en l\xE4genhet. Det betyder att jag vill anv\xE4nda pengarna inom ca 4 \xE5r.", React.createElement("br", null), React.createElement("br", null), "Fonden har g\xE5tt v\xE4ldigt bra och jag undrar d\xE4rf\xF6r om jag borde s\xE4lja andelarna nu, innan b\xF6rsen eventuellt g\xE5r ner, eftersom vi befinner oss i en h\xF6gkonjunktur?")), React.createElement("div", {
        className: "bryt"
      }), React.createElement("section", {
        id: "secondSection",
        className: "thread_sections"
      }, React.createElement("img", {
        className: "thread_people_photo",
        src: "png/thread/person2_thread.png"
      }), React.createElement("div", {
        className: "grid-container1"
      }, React.createElement("div", {
        className: "namn"
      }, "Alice"), React.createElement("div", {
        className: "stad"
      }, "Ume\xE5 Sverige")), React.createElement("img", {
        className: "check",
        src: "png/thread/green_check_thread.png"
      }), React.createElement("br", null), React.createElement("p", {
        className: "betyg"
      }, "2"), React.createElement("br", null), React.createElement("br", null), React.createElement("img", {
        className: "cross",
        src: "png/thread/red_cross_thread.png"
      }), React.createElement("p", {
        className: "svar"
      }, "Om det \xE4r en aktiefond s\xE5 skulle jag rekommendera att du b\xF6rjar ta ut pengarna, det kan du g\xF6ra bitvis ist\xE4llet f\xF6r i en klumpsumma ocks\xE5."), React.createElement("img", {
        className: "like",
        src: "png/thread/like_thread.png"
      }), React.createElement("img", {
        className: "comment",
        src: "png/thread/comment_thread.png"
      })), React.createElement("div", {
        className: "bryt"
      }), React.createElement("section", {
        id: "thirdSection",
        className: "thread_sections"
      }, React.createElement("img", {
        className: "thread_people_photo",
        src: "png/thread/person3_thread.png"
      }), React.createElement("div", {
        className: "grid-container1"
      }, React.createElement("div", {
        className: "namn"
      }, "Elijah"), React.createElement("div", {
        className: "stad"
      }, "Stockholm Sverige")), React.createElement("img", {
        className: "check",
        src: "png/thread/green_check_thread.png"
      }), React.createElement("br", null), React.createElement("p", {
        className: "betyg"
      }, "0"), React.createElement("br", null), React.createElement("br", null), React.createElement("img", {
        className: "cross",
        src: "png/thread/red_cross_thread.png"
      }), React.createElement("p", {
        className: "svar"
      }, "Just aktier/aktierfonder rekommenderas f\xF6r l\xE5ng sikt dvs 5+ \xE5r pga risken s\xE5 du t\xE4nker r\xE4tt."), React.createElement("img", {
        className: "like",
        src: "png/thread/like_thread.png"
      }), React.createElement("img", {
        className: "comment",
        src: "png/thread/comment_thread.png"
      })), React.createElement("div", {
        className: "bryt"
      }), React.createElement("section", {
        id: "fourthSection",
        className: "thread_sections"
      }, React.createElement("img", {
        className: "thread_people_photo",
        src: "png/thread/person4_thread.png"
      }), React.createElement("div", {
        className: "grid-container1"
      }, React.createElement("div", {
        className: "namn"
      }, "AnnaVest"), React.createElement("div", {
        className: "stad"
      }, "G\xF6teborg Sverige")), React.createElement("img", {
        className: "check",
        src: "png/thread/green_check_thread.png"
      }), React.createElement("br", null), React.createElement("p", {
        className: "betyg"
      }, "0"), React.createElement("br", null), React.createElement("br", null), React.createElement("img", {
        className: "cross",
        src: "png/thread/red_cross_thread.png"
      }), React.createElement("p", {
        className: "svar"
      }, "Du skulle kunna placera dessa pengar i en r\xE4ntefond eller p\xE5 ett sparkonto med ins\xE4ttningsgaranti inf\xF6r k\xF6pet, l\xE4gre risk och s\xE5 f\xE5r man en liten tillv\xE4xt i alla fall. P\xE5 Compricer kan du j\xE4mf\xF6ra sparkonton och se var det \xE4r b\xE4st r\xE4nta."), React.createElement("img", {
        className: "like",
        src: "png/thread/like_thread.png"
      }), React.createElement("img", {
        className: "comment",
        src: "png/thread/comment_thread.png"
      })), React.createElement("div", {
        className: "bryt"
      }), React.createElement("section", {
        id: "fifthSection",
        className: "thread_sections"
      }, React.createElement("img", {
        className: "thread_people_photo",
        src: "png/thread/person5_thread.png"
      }), React.createElement("div", {
        className: "grid-container1"
      }, React.createElement("div", {
        className: "namn"
      }, "Tanja"), React.createElement("div", {
        className: "stad"
      }, "Malm\xF6 Sverige")), React.createElement("img", {
        className: "check",
        src: "png/thread/green_check_thread.png"
      }), React.createElement("br", null), React.createElement("p", {
        className: "betyg"
      }, "-1"), React.createElement("br", null), React.createElement("br", null), React.createElement("img", {
        className: "cross",
        src: "png/thread/red_cross_thread.png"
      }), React.createElement("p", {
        className: "svar"
      }, "Just aktier/aktiefonder rekommenderas f\xF6r l\xE5ng sikt dvs 5+ \xE5r pga risken s\xE5 du t\xE4nker r\xE4tt."), React.createElement("img", {
        className: "like",
        src: "png/thread/like_thread.png"
      }), React.createElement("img", {
        className: "comment",
        src: "png/thread/comment_thread.png"
      })), React.createElement("div", {
        className: "bryt"
      }), console.log(comments), comments.length > 1 ? React.createElement("div", null, React.createElement("section", {
        className: "thread_sections"
      }, React.createElement("img", {
        className: "thread_people_photo",
        src: "vectors/thread/pineapple.gif"
      }), React.createElement("div", {
        className: "grid-container1"
      }, React.createElement("div", {
        className: "namn"
      }, this.props.currentUser.profile.name), React.createElement("div", {
        className: "stad"
      }, "Ume\xE5 Sverige")), React.createElement("img", {
        className: "check",
        src: "png/thread/green_check_thread.png"
      }), React.createElement("br", null), React.createElement("p", {
        className: "betyg"
      }, "0"), React.createElement("br", null), React.createElement("br", null), React.createElement("img", {
        className: "cross",
        src: "png/thread/red_cross_thread.png"
      }), comments, React.createElement("img", {
        className: "like",
        src: "png/thread/like_thread.png"
      }), React.createElement("img", {
        className: "comment",
        src: "png/thread/comment_thread.png"
      }))) : '', React.createElement("form", {
        className: "new-resolution",
        onSubmit: this.addComments.bind(this)
      }, React.createElement("input", {
        type: "text",
        ref: "comment",
        placeholder: "Skriv en kommentar"
      }), React.createElement("button", {
        type: "submit"
      }, "Skicka")), React.createElement("img", {
        className: "pineapple",
        src: "vectors/pineapple.svg"
      })));
    }

    return render;
  }();

  return Thread;
}(Component);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"AccountsUIWrapper.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/ui/AccountsUIWrapper.js                                                                                    //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

module.export({
  "default": function () {
    return AccountsUIWrapper;
  }
});
var React, Component;
module.watch(require("react"), {
  "default": function (v) {
    React = v;
  },
  Component: function (v) {
    Component = v;
  }
}, 0);
var ReactDOM;
module.watch(require("react-dom"), {
  "default": function (v) {
    ReactDOM = v;
  }
}, 1);
var Template;
module.watch(require("meteor/templating"), {
  Template: function (v) {
    Template = v;
  }
}, 2);
var Blaze;
module.watch(require("meteor/blaze"), {
  Blaze: function (v) {
    Blaze = v;
  }
}, 3);

var AccountsUIWrapper =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2.default)(AccountsUIWrapper, _Component);

  function AccountsUIWrapper() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = AccountsUIWrapper.prototype;

  _proto.componentDidMount = function () {
    function componentDidMount() {
      // Use Meteor Blaze to render login buttons
      this.view = Blaze.render(Template.loginButtons, ReactDOM.findDOMNode(this.refs.container));
    }

    return componentDidMount;
  }();

  _proto.componentWillUnmount = function () {
    function componentWillUnmount() {
      // Clean up Blaze view
      Blaze.remove(this.view);
    }

    return componentWillUnmount;
  }();

  _proto.render = function () {
    function render() {
      // Just render a placeholder container that will be filled in
      return React.createElement("span", {
        ref: "container"
      });
    }

    return render;
  }();

  return AccountsUIWrapper;
}(Component);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"App.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/ui/App.js                                                                                                  //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var React, Component, PropTypes;
module.watch(require("react"), {
  "default": function (v) {
    React = v;
  },
  Component: function (v) {
    Component = v;
  },
  PropTypes: function (v) {
    PropTypes = v;
  }
}, 0);
var ReactDOM;
module.watch(require("react-dom"), {
  "default": function (v) {
    ReactDOM = v;
  }
}, 1);
var Meteor;
module.watch(require("meteor/meteor"), {
  Meteor: function (v) {
    Meteor = v;
  }
}, 2);
var withTracker;
module.watch(require("meteor/react-meteor-data"), {
  withTracker: function (v) {
    withTracker = v;
  }
}, 3);
var HTTP;
module.watch(require("meteor/http"), {
  HTTP: function (v) {
    HTTP = v;
  }
}, 4);
var Session;
module.watch(require("meteor/session"), {
  Session: function (v) {
    Session = v;
  }
}, 5);
var getUser;
module.watch(require("../api/get-user.js"), {
  getUser: function (v) {
    getUser = v;
  }
}, 6);
var Router, Switch, Route;
module.watch(require("react-router-dom"), {
  BrowserRouter: function (v) {
    Router = v;
  },
  Switch: function (v) {
    Switch = v;
  },
  Route: function (v) {
    Route = v;
  }
}, 7);
var Redirect;
module.watch(require("react-router-dom"), {
  Redirect: function (v) {
    Redirect = v;
  }
}, 8);
var getU;
module.watch(require("../api/get-user.js"), {
  getUser: function (v) {
    getU = v;
  }
}, 9);
var ReactTimeout;
module.watch(require("react-timeout"), {
  "default": function (v) {
    ReactTimeout = v;
  }
}, 10);
var Comments;
module.watch(require("../api/comments.js"), {
  Comments: function (v) {
    Comments = v;
  }
}, 11);
var Dashboard;
module.watch(require("./components/dashboard/dashboard.js"), {
  Dashboard: function (v) {
    Dashboard = v;
  }
}, 12);
var Thread;
module.watch(require("./components/thread/thread.js"), {
  Thread: function (v) {
    Thread = v;
  }
}, 13);
var SearchResult;
module.watch(require("./components/search-result/search-result.js"), {
  SearchResult: function (v) {
    SearchResult = v;
  }
}, 14);
var Search;
module.watch(require("./components/search/search.js"), {
  Search: function (v) {
    Search = v;
  }
}, 15);
var Login;
module.watch(require("./components/login/login.js"), {
  "default": function (v) {
    Login = v;
  }
}, 16);
var Profile;
module.watch(require("./components/profile/profile.js"), {
  Profile: function (v) {
    Profile = v;
  }
}, 17);
var Task;
module.watch(require("./components/task/task.js"), {
  Task: function (v) {
    Task = v;
  }
}, 18);
var Tasks;
module.watch(require(".././api/tasks.js"), {
  Tasks: function (v) {
    Tasks = v;
  }
}, 19);

// import AccountsUIWrapper from './AccountsUIWrapper.js';
// App component - represents the whole app
// import {BrowserRoute as Router, Route, Link} from 'react-router-dom';
var App =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2.default)(App, _Component);

  function App(props) {
    var _this;

    _this = _Component.call(this, props) || this; // Session.set('email', '')

    _this.state = {
      // hideCompleted: false,
      // email: Session.get('email'),
      render: false //Set render state to false

    };
    return _this;
  }

  var _proto = App.prototype;

  _proto.componentDidMount = function () {
    function componentDidMount() {
      setTimeout(function () {
        //Start the timer
        this.setState({
          render: true
        }); //After 0.2 seconds, set render to true
      }.bind(this), 200);
    }

    return componentDidMount;
  }();

  _proto.render = function () {
    function render() {
      var currentUser = this.props.currentUser;
      var currentComments = this.props.comments;
      var tasks = this.props.currentTasks;

      if (this.state.render) {
        if (currentUser) {
          return React.createElement(Router, null, React.createElement("div", null, React.createElement(Route, {
            exact: true,
            path: "/",
            component: function () {
              return React.createElement(Dashboard, {
                currentComments: currentComments,
                currentUser: currentUser
              });
            }
          }), React.createElement(Route, {
            exact: true,
            path: "/login",
            component: Login
          }), React.createElement(Route, {
            exact: true,
            path: "/profile",
            component: function () {
              return React.createElement(Profile, {
                currentUser: currentUser
              });
            }
          }), React.createElement(Route, {
            path: "/search",
            component: Search
          }), React.createElement(Route, {
            path: "/searchresult",
            component: SearchResult
          }), React.createElement(Route, {
            exact: true,
            path: "/thread",
            component: function () {
              return React.createElement(Thread, {
                currentComments: currentComments,
                currentUser: currentUser
              });
            }
          })));
        } else if (!currentUser) {
          return React.createElement(Router, null, React.createElement("div", null, React.createElement(Route, {
            path: "/",
            component: Login
          })));
        }
      } else {
        return React.createElement("div", null, React.createElement("h1", null, " "));
      }
    }

    return render;
  }();

  return App;
}(Component);

module.exportDefault(withTracker(function () {
  Meteor.subscribe('comments_publication');
  var handle = Meteor.subscribe();
  return {
    tasks: Tasks.find({}, {
      sort: {
        createdAt: -1
      }
    }).fetch(),
    incompleteCount: Tasks.find({
      checked: {
        $ne: true
      }
    }).count(),
    currentUser: Meteor.user(),
    email: Session.get('email'),
    comments: Comments.find({}).fetch()
  };
})(App));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Task.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/ui/Task.js                                                                                                 //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

module.export({
  "default": function () {
    return Task;
  }
});
var React, Component;
module.watch(require("react"), {
  "default": function (v) {
    React = v;
  },
  Component: function (v) {
    Component = v;
  }
}, 0);
var Tasks;
module.watch(require("../api/tasks.js"), {
  Tasks: function (v) {
    Tasks = v;
  }
}, 1);

var Task =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2.default)(Task, _Component);

  function Task() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Task.prototype;

  _proto.toggleChecked = function () {
    function toggleChecked() {
      // Set the checked property to the opposite of its current value
      Tasks.update(this.props.task._id, {
        $set: {
          checked: !this.props.task.checked
        }
      });
    }

    return toggleChecked;
  }();

  _proto.deleteThisTask = function () {
    function deleteThisTask() {
      Tasks.remove(this.props.task._id);
    }

    return deleteThisTask;
  }();

  _proto.render = function () {
    function render() {
      // Give tasks a different className when they are checked off,
      // so that we can style them nicely in CSS
      var taskClassName = this.props.task.checked ? 'checked' : '';
      return React.createElement("li", {
        className: taskClassName
      }, React.createElement("button", {
        className: "delete",
        onClick: this.deleteThisTask.bind(this)
      }, "\xD7"), React.createElement("input", {
        type: "checkbox",
        readOnly: true,
        checked: !!this.props.task.checked,
        onClick: this.toggleChecked.bind(this)
      }), React.createElement("span", {
        className: "text"
      }, React.createElement("strong", null, this.props.task.username), ": ", this.props.task.text));
    }

    return render;
  }();

  return Task;
}(Component);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"startup":{"client":{"routes.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/startup/client/routes.js                                                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.export({
  renderRoutes: function () {
    return renderRoutes;
  }
});
var React;
module.watch(require("react"), {
  "default": function (v) {
    React = v;
  }
}, 0);
var BrowserRouter, Route, Switch;
module.watch(require("react-router-dom"), {
  BrowserRouter: function (v) {
    BrowserRouter = v;
  },
  Route: function (v) {
    Route = v;
  },
  Switch: function (v) {
    Switch = v;
  }
}, 1);
var createBrowserHistory;
module.watch(require("history/createBrowserHistory"), {
  "default": function (v) {
    createBrowserHistory = v;
  }
}, 2);
var Login;
module.watch(require("../../ui/components/login/login.js"), {
  Login: function (v) {
    Login = v;
  }
}, 3);
var Dashboard;
module.watch(require("../../ui/components/dashboard/dashboard.js"), {
  Dashboard: function (v) {
    Dashboard = v;
  }
}, 4);
var Profile;
module.watch(require("../../ui/components/profile/profile.js"), {
  Profile: function (v) {
    Profile = v;
  }
}, 5);
var Search;
module.watch(require("../../ui/components/search/search.js"), {
  Search: function (v) {
    Search = v;
  }
}, 6);
var SearchResult;
module.watch(require("../../ui/components/search-result/search-result.js"), {
  SearchResult: function (v) {
    SearchResult = v;
  }
}, 7);
var Thread;
module.watch(require("../../ui/components/thread/thread.js"), {
  Thread: function (v) {
    Thread = v;
  }
}, 8);
var Task;
module.watch(require("../../ui/components/task/task.js"), {
  Task: function (v) {
    Task = v;
  }
}, 9);
var App;
module.watch(require("../../ui/App.js"), {
  App: function (v) {
    App = v;
  }
}, 10);

var renderRoutes = function () {
  return React.createElement(BrowserRouter, null, React.createElement(Switch, null, React.createElement(Route, {
    exact: true,
    path: "/",
    component: App
  }), React.createElement(Route, {
    path: "/login",
    component: Login
  }), React.createElement(Route, {
    path: "/profile",
    component: Profile
  }), React.createElement(Route, {
    path: "/search",
    component: Search
  }), React.createElement(Route, {
    path: "/searchresult",
    component: SearchResult
  }), React.createElement(Route, {
    path: "/thread",
    component: Thread
  }), React.createElement(Route, {
    path: "/task",
    component: Task
  })));
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"accounts-config.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/startup/accounts-config.js                                                                                 //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var Accounts;
module.watch(require("meteor/accounts-base"), {
  Accounts: function (v) {
    Accounts = v;
  }
}, 0);
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY'
}); //WHERE TO PUT THIS FILE???
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"api":{"comments.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/api/comments.js                                                                                            //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.export({
  Comments: function () {
    return Comments;
  }
});
var Mongo;
module.watch(require("meteor/mongo"), {
  Mongo: function (v) {
    Mongo = v;
  }
}, 0);
var Comments = new Mongo.Collection('comments');

if (Meteor.isServer) {
  Meteor.publish('comments_publication', function () {
    function commentPublicationFunction() {
      return Comments.find();
    }

    return commentPublicationFunction;
  }());
}

Meteor.methods({
  'addComments': function (text, currentUser) {
    Comments.insert({
      text: text,
      complete: false,
      createdAt: new Date(),
      username: currentUser
    });
  },
  'deleteComment': function (id) {
    Comments.remove(id);
  }
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"get-user.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/api/get-user.js                                                                                            //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.export({
  getUser: function () {
    return getUser;
  }
});
var HTTP;
module.watch(require("meteor/http"), {
  HTTP: function (v) {
    HTTP = v;
  }
}, 0);
var Session;
module.watch(require("meteor/session"), {
  Session: function (v) {
    Session = v;
  }
}, 1);

function getUser(user) {
  //skicka url till fetchEmail,
  var url = 'https://api.github.com/user';

  if (JSON.Stringify(user.services.github.accessToken.property) != 'undefined') {
    //hämta accesstoken
    var at = user.services.github.accessToken;
    fetchEmail(url, at);
  }
}

function fetchEmail(url, at) {
  HTTP.get(url, {
    params: {
      "access_token": at
    }
  }, function (error, res) {
    Session.set('email', res.data.email);
  });
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"tasks.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/api/tasks.js                                                                                               //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.export({
  Tasks: function () {
    return Tasks;
  }
});
var Mongo;
module.watch(require("meteor/mongo"), {
  Mongo: function (v) {
    Mongo = v;
  }
}, 0);
var Tasks = new Mongo.Collection('tasks');
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}},{
  "extensions": [
    ".js",
    ".json",
    ".html",
    ".css",
    ".jsx"
  ]
});
require("/client/template.main.js");
require("/client/main.js");