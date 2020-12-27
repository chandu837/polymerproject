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
import './shared-styles.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-selector/iron-selector.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import './my-icons.js';
import '@polymer/paper-input/paper-input.js';



class MyLogin extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
        body {
            color: #fff;
            background: #dee2e6;
        }
        /* Custom styles added on 07-12-2020 at 9:20pm */
      
      </style>
      <div class="login-form">
        <form  onsubmit="return validateForm()">
        <div class="avatar">
          <img src="./images/avatar.png" alt="Avatar">
        </div>
            <h2 class="text-center">User Login</h2>   
            <div class="form-group">
                <input type="text" class="form-control" name="username" id="username" placeholder="Username">
                <div id="userDiv"></div>
            </div>
        <div class="form-group">
                <input type="password" class="form-control" name="password" id="password" placeholder="Password">
                <div id="passwordDiv"></div>
            </div>        
            <div class="form-group">
                <button type="submit" class="btn btn-info btn-lg btn-block" id="submit">Sign in</button>
                <div id="successDiv"></div>
            </div>
        <!-- <div class="bottom-action clearfix">
                <label class="float-left form-check-label"><input type="checkbox"> Remember me</label>
                <a href="#" class="float-right">Forgot Password?</a>
            </div> -->
        </form>
        <!-- <p class="text-center small">Don't have an account? <a href="#">Sign up here!</a></p> -->
    </div>
    `;
  }
}

window.customElements.define('my-login', MyLogin);

