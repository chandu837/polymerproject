/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
class LoginNew extends PolymerElement {
  static get template() {
    return html`
    <link rel="stylesheet" href="//fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Roboto:300,400,500,700" type="text/css">

    <link rel="stylesheet" href="//storage.googleapis.com/code.getmdl.io/1.0.1/material.teal-red.min.css" />
    <script src="//storage.googleapis.com/code.getmdl.io/1.0.1/material.min.js"></script>

      <style>
        :host {
          display: block;
          padding: 10px;
        }
        body {
          color: #fff;
          background: #dee2e6 !important;
      }
        .login-form {
          width: 350px;
          margin: 0 auto;
          padding: 100px 0 30px;
          margin-left:250px;
      }
      .login-form form {
        color: #7a7a7a;
        border-radius: 2px;
        margin-bottom: 15px;
        font-size: 13px;
        background: #ececec;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
        padding: 30px;
        position: relative;
    }
    .login-form .avatar {
      position: absolute;
      margin: 0 auto;
      left: 0;
      right: 0;
      top: -50px;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: #17a2b8;
      padding: 15px;
      box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  }
  .form-group {
    margin-bottom: 1rem;
}
  .login-form .avatar img {
    width: 82%;
    margin-left: 5px;
    margin-top: 5px;
}
.login-form h2 {
  font-size: 22px;
  margin: 35px 0 25px;
  text-align: center;
}
.mdl-button--raised.mdl-button--colored {
  background: #17a2b8 !important;
  color: #fff;
}
      </style>
      <div class="mdl-layout__content ">
        <div class="mdl-grid content-grid">
          <div class="login-form">
              <form name="userForm" >
                  <div class="avatar">
                      <img src="images/avatar.png" alt="Avatar">
                  </div>
                  <h2 class="text-center">User Login</h2>   
                  <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <input class="mdl-textfield__input" type="text" id="username"/>
                    <label class="mdl-textfield__label" for="username">Username</label>
                  </div>

                  <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <input class="mdl-textfield__input" type="password" name="password" id="password" />
                    <label class="mdl-textfield__label" for="password">Password</label>
                    <span class="mdl-textfield__error">Only alphabet and no spaces, please!</span>
                  </div>        
                  <!-- Raised button -->
                  <a name="accountsummary" href="[[rootPath]]accountsummary"><button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" on-click="userValidation">
                  Sign In
                  </button></a>
              </form>
          </div>
        </div>
      </div>`;
  }
  userValidation() {
    // username validations
    var username = this.$.username.value;
    if(username == "" || username== "null"){
      alert("Enter Valid username..!");
      return false;
    }
    //password validations
    var password = this.$.password.value;
    if(password == "" || password == "null"){
      alert("Enter Valid password..!");
      return false;
    }
    // if entered credentials correct then redirect to Account Summery page
    if(username == "admin" && password == "pass"){
      alert("Login Success");
      window.location = 'accountsummary';
    }
    else{
      alert("wrong Credentials");
      window.location.reload();
    }
  };
}

window.customElements.define('login-new', LoginNew);
