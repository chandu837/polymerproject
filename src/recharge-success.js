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

class RechargeSuccess extends PolymerElement {
  
  static get properties() {
      return {
          user: {
              type: Object,
              value: function() {
                  // fetch data from localstorage 
                  var userlist = JSON.parse(window.localStorage.getItem('Current-Entry-List'));
                  return {
                      userlist
                  };
              }
          }
      };
  }
  static get template() {
    return html`
    <link rel="stylesheet" href="/node_modules/material-design-lite/material.min.css">
    <script src="/node_modules/material-design-lite/material.min.js"></script>
    <!-- Wide card with share menu button -->
    
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
        .card {
          margin: 24px;
          padding: 16px;
          color: #757575;
          border-radius: 5px;
          background-color: #fff;
          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
      }
      .mdl-button--raised.mdl-button--colored{
        background: #17a2b8 !important;
        font-weight: 600;
      }
      </style>
      <div class="card">
        <h5>Recharge Success</h5>
      </div>
      <template is="dom-repeat" items="{{user}}" >
        <div class="card">
          <div class="mdl-grid ">
            <div class="mdl-cell mdl-cell--6-col">
              <div class="mdl-textfield mdl-js-textfield">

                <paper-input type="text" name="rechargedMobileNumber" label="Mobile Number" id="rechargedMobileNumber" required auto-validate value="{{user.userlist.0}}" readonly></paper-input>
              </div>
            </div>
            <div class="mdl-cell mdl-cell--6-col">
              <div class="mdl-textfield mdl-js-textfield">

                <paper-input type="text" name="rechagedAmount" label="Amount" id="rechagedAmount" required auto-validate value="{{user.userlist.1}}" readonly></paper-input>
              </div>
            </div>  
            <div class="mdl-cell mdl-cell--6-col">
              <!-- Colored raised button -->
              <button id="submitBtn" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"" on-click="generateOTP">
                Click to get OTP
              </button>
            </div> 
            <div class="mdl-cell mdl-cell--4-col">
              <paper-input type="text" name="otp" label="OTP" id="otp" required auto-validate value="{{OTP}}" readonly></paper-input>
            </div>  
            <div class="mdl-cell mdl-cell--8-col center-align">
              <!-- Colored raised button --><br/><br/>
              <button id="submitBtn" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" on-click="navigateToHistory">
                SUBMIT
              </button>
            </div>  
          </div>
        </template>
    `;
  }
  generateOTP() { 
            
    // Declare a digits variable  
    // which stores all digits 
    var digits = '0123456789'; 
    let OTP = ''; 
    for (let i = 0; i < 4; i++ ) { 
        OTP += digits[Math.floor(Math.random() * 10)]; 
    }  
    // this.$.otpField.value =  OTP ;
    this.OTP = OTP;
  } 
  navigateToHistory() {
    // var otp = this.$.otp.value;
    // if(otp == "" || otp == "null"){
    //   alert("Enter Valid otp..!");
    //   this.$.otp.focus();
    //   return false;
    // }else{
    //   alert("Recharge completed successfully...!");
    //   window.location = "/rechargehistory";
    // }
      alert("Recharge successfully completed...!");
      window.location = "/rechargehistory";
  }  
}
 
window.customElements.define('recharge-success', RechargeSuccess);
