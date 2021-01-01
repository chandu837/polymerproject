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
import '@polymer/paper-input/paper-input.js';

class AccountSummary extends PolymerElement {
  static get template() {
    return html`
    <link rel="stylesheet" href="/node_modules/material-design-lite/material.min.css">
    <script src="/node_modules/material-design-lite/material.min.js"></script>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <!-- Wide card with share menu button -->
    <style>
        .card {
          margin: 24px;
          padding: 16px;
          color: #757575;
          border-radius: 5px;
          background-color: #fff;
          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
      }
      
    </style>

    <div class="card">
        <h4>Account Summary</h4>
        <div class="mdl-grid ">
          <div class="mdl-cell mdl-cell--12-col">
          </div>
            <div class="mdl-cell mdl-cell--6-col">
              <div class="mdl-textfield mdl-js-textfield">
                <paper-input type="text" label="Account Holder Name" value="Chandra Sekhar" readonly></paper-input>
              </div>
            </div>
            <div class="mdl-cell mdl-cell--6-col">
              <div class="mdl-textfield mdl-js-textfield">
                  <paper-input type="text" label="Account Number" value="055201534625" readonly></paper-input>
              </div>
            </div>
            <div class="mdl-cell mdl-cell--6-col">
               <div class="mdl-textfield mdl-js-textfield">
                  <paper-input type="text" label="Location" value="Infosys Bangalore" readonly></paper-input>
              </div>
            </div>
            <div class="mdl-cell mdl-cell--6-col">
               <div class="mdl-textfield mdl-js-textfield">
                  <paper-input type="text" label="IFSC Code" value="ICICI0000525" readonly></paper-input>
              </div>
            </div>
            <div class="mdl-cell mdl-cell--6-col">
               <div class="mdl-textfield mdl-js-textfield">
                  <paper-input type="text" label="Mobile Number" value="+91-9071351777" readonly></paper-input>
              </div>
            </div>
            <div class="mdl-cell mdl-cell--6-col">
               <div class="mdl-textfield mdl-js-textfield">
                  <paper-input type="text" label="Email Id" value="chandu837@gmail.com" readonly></paper-input>
              </div>
            </div>
            <div class="mdl-cell mdl-cell--6-col">
               <div class="mdl-textfield mdl-js-textfield">
                  <paper-input type="text" label="Aadhaar Number" value="258628233734" readonly></paper-input>
              </div>
            </div>
             <div class="mdl-cell mdl-cell--6-col">
               <div class="mdl-textfield mdl-js-textfield">
                  <paper-input type="text" label="PAN Number" value="ALTPY1250R" readonly></paper-input>
              </div>
            </div>
          </div>
    </div>
    
    `;
  }
}

window.customElements.define('account-summary', AccountSummary);
