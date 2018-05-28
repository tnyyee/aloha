//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var Template = Package['templating-runtime'].Template;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// packages/github-config-ui/template.github_configure.js                                      //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //

Template.__checkName("configureLoginServiceDialogForGithub");
Template["configureLoginServiceDialogForGithub"] = new Template("Template.configureLoginServiceDialogForGithub", (function() {
  var view = this;
  return [ HTML.Raw("<p>\n    First, you'll need to get a Github Client ID. Follow these steps:\n  </p>\n  "), HTML.OL("\n    ", HTML.Raw('<li>\n      Visit <a href="https://github.com/settings/applications/new" target="blank">https://github.com/settings/applications/new</a>\n    </li>'), "\n    ", HTML.LI("\n      Set Homepage URL to: ", HTML.SPAN({
    class: "url"
  }, Blaze.View("lookup:siteUrl", function() {
    return Spacebars.mustache(view.lookup("siteUrl"));
  })), "\n    "), "\n    ", HTML.LI("\n      Set Authorization callback URL to: ", HTML.SPAN({
    class: "url"
  }, Blaze.View("lookup:siteUrl", function() {
    return Spacebars.mustache(view.lookup("siteUrl"));
  }), "_oauth/github"), "\n    "), "\n  ") ];
}));

/////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// packages/github-config-ui/github_configure.js                                               //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //
Template.configureLoginServiceDialogForGithub.helpers({
  siteUrl: function () {
    return Meteor.absoluteUrl();
  }
});

Template.configureLoginServiceDialogForGithub.fields = function () {
  return [
    {property: 'clientId', label: 'Client ID'},
    {property: 'secret', label: 'Client Secret'}
  ];
};

/////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
Package._define("github-config-ui");

})();
