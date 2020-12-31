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

class RechargePage extends PolymerElement {
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
        <h5>Mobile Recharge</h5>
      </div>
      <div class="card">
        <h6> RECHARGE YOUR MOBILE </h6>
        <p>Tell us your number and we will figure out the rest</p>
        <form id="userforms">
        <div class="mdl-grid ">
          <div class="mdl-cell mdl-cell--6-col">
            <div class="mdl-textfield mdl-js-textfield">
              <input class="mdl-textfield__input" type="text" pattern="[0-9]*" name="mobilenumber" id="mobilenumber" maxlength="10"/>
              <label class="mdl-textfield__label" for="mobilenumber">Mobile Number</label>
              <span class="mdl-textfield__error">Only alphabet and no spaces, please!</span>
            </div>
          </div>
          <div class="mdl-cell mdl-cell--6-col">
            <div class="mdl-textfield mdl-js-textfield">
              <input class="mdl-textfield__input" type="text" name="amount" id="amount" placeholder="Enter recharge Amount">
            </div>
          </div>
          <div class="mdl-cell mdl-cell--8-col">
            <div class="mdl-textfield mdl-js-textfield">
              <label class = "mdl-radio mdl-js-radio" for = "prepaid">
                  <input type = "radio" id = "prepaid" name = "operator" 
                    class = "mdl-radio__button" checked>
                  <span class = "mdl-radio__label">Prepaid</span>
              </label>
              <label class = "mdl-radio mdl-js-radio" for = "postpaid">
                  <input type = "radio" id = "postpaid" name = "operator" 
                    class = "mdl-radio__button" >
                  <span class = "mdl-radio__label">Postpaid</span>
              </label>
            </div>
          </div>
          <div class="mdl-cell mdl-cell--6-col">
            <!-- Simple Select -->
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <select class="mdl-textfield__input" id="operator" name="operator">
                <option></option>
                <option value="Airtel">Airtel</option>
                <option value="VI">VI</option>
                <option value="Jio">Jio</option>
                <option value="Bsnl">Bsnl</option>
              </select>
              <label class="mdl-textfield__label" for="operator">operator</label>
            </div>
          </div>
          <div class="mdl-cell mdl-cell--6-col">
            <!-- Simple Select -->
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <select class="mdl-textfield__input" id="circle" name="circle">
                <option></option>
                <option value="Karnataka">Karnataka</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Tamilnadu">Tamilnadu</option>
              </select>
              <label class="mdl-textfield__label" for="circle">circle</label>
            </div>
          </div>
            <!-- Colored raised button -->
            <button id="submitBtn" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" on-click="rechageValidations">
              Proceed
            </button>
        </div>
        </form>
    `;
  }
  rechageValidations(){
    // Mobile Number Validations
    var mobilenumber = this.$.mobilenumber.value;
    if(mobilenumber == "" && mobilenumber =="null"){
      alert("Mobile numbershould not empty..!");
      return false;
    }
    // amount field validations
    var amount = this.$.amount.value;
    if(amount == "" && amount =="null"){
      alert("Rechage amount should not empty..!");
      return false;
    }

    // Operator field Validations
    var operator = this.$.operator.value;
    if(operator == "" && operator =="null"){
      alert("Operator field should not empty..!");
      return false;
    }

    // Circle field validations 
    var circle = this.$.circle.value;
    if(circle == "" && circle =="null"){
      alert("Circle field should not empty..!");
      return false;
    }
    if(mobilenumber != "" && amount != "" && operator != "" && circle != ""){
        localStorage.setItem("mobilenumber",mobilenumber);
        localStorage.setItem("amount",amount);
      //storing existing values into Localstorage
      var existingRecords = JSON.parse(localStorage.getItem("userData"));
      var userlist = [];
      userlist.push(mobilenumber, amount, operator, circle)
      window.localStorage.setItem('Current-Entry-List', JSON.stringify(userlist));
      existingRecords.push(userlist);
      //store data into local storage
      window.localStorage.setItem("userData", JSON.stringify(existingRecords));

      alert("Recharge done Sucessfully");
      window.location = 'rechargesuccess';
      
    }
    else{
      alert("All fields are mandatory..!");
    }
    window.location.href = 'rechargesuccess';

  }
}

window.customElements.define('recharge-page', RechargePage);
