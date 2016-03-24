window.jQuery = $ = require('jquery');
var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('underscore');
var Backbone = require('backbone');
require('backbone-react-component');
var Parse = require('parse');

Parse.initialize("tiygvl");
Parse.serverURL = "http://tiny-parse-server.herokuapp.com/"

$.ajaxSetup({
  beforeSend: function(xhr){
    xhr.setRequestHeader("X-Parse-Application-Id", "tiygvl");
    xhr.setRequestHeader("X-Parse-REST-API-Key", "slumber");
    xhr.setRequestHeader("Content-Type", "application/json")
  }
})

// var TestObject = Parse.Object.extend("TestObject");
// var testObject = new TestObject();
// testObject.save({grayson: "hicks"}).then(function(object) {
//   alert("yay! it worked");
// });

$("#signupform").on('submit', function(e){
  e.preventDefault();
  var username = $('#signupusername').val();
  var email = $('#signupemail').val();
  var password = $('#signuppassword').val();

  var user = new Parse.User();
  user.set({
    "username": username,
    "password": password,
    "email": email
  });

  user.signUp(null, {
  success: function(user) {
    console.log("success");
    console.log(user);
  },
  error: function(user, error) {
    // Show the error message somewhere and let the user try again.
    alert("Error: " + error.code + " " + error.message);
  }
});
});

$("#loginform").on('submit', function(e){
  e.preventDefault();
  var username = $('#loginusername').val();
  var password = $('#loginpassword').val();

  Parse.User.logIn(username, password, {
    success: function(user) {
      console.log(user);
      console.log("Hello ",  user);
    },
    error: function(user, error) {
      // The login failed. Check error to see why.
      console.log(error);
    }
  });
});
