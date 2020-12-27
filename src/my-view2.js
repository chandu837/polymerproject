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

class MyView2 extends PolymerElement {
  static get template() {
    return html`
    <link rel="stylesheet" href="/node_modules/material-design-lite/material.min.css">
    <script src="/node_modules/material-design-lite/material.min.js"></script>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
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
      </style>

      <div class="card">
        <h4>Mobile Recharge</h4>
        <h6> RECHARGE YOUR MOBILE </h6>
        <p>Tell us your number and we will figure out the rest</p>
        <div class="mdl-grid ">
          <div class="mdl-cell mdl-cell--6-col">
            <div class="mdl-textfield mdl-js-textfield">
              <input class="mdl-textfield__input" type="text" id="user" pattern="[A-Z,a-z, ]*" placeholder="Enter Mobile Number"> 
            </div>
          </div>
          <div class="mdl-cell mdl-cell--6-col">
            <div class="mdl-textfield mdl-js-textfield">
              <input class="mdl-textfield__input" type="text" id="amount" placeholder="Enter recharge Amount">
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
            <!-- Simple Select 
            <div class="mdl-textfield mdl-js-textfield getmdl-select">
                <input type="text" value="" class="mdl-textfield__input" id="sample1" readonly>
                <input type="hidden" value="" name="sample1">
                <label for="sample1" class="mdl-textfield__label">Operator</label>
                <ul for="sample1" class="mdl-menu mdl-menu--bottom-left mdl-js-menu">
                    <li class="mdl-menu__item" data-val="AIRTEL">AIRTEL</li>
                    <li class="mdl-menu__item" data-val="JIO">JIO</li>
                    <li class="mdl-menu__item" data-val="BSNL">BSNL</li>
                </ul>
            </div> -->
            <div class="mdl-textfield mdl-js-textfield">
              <input class="mdl-textfield__input" type="text" name="operator" id="operator" placeholder="Enter Operator">
            </div>
          </div>
          <div class="mdl-cell mdl-cell--6-col">
            <!-- Simple Select 
            <div class="mdl-textfield mdl-js-textfield getmdl-select">
                <input type="text" value="" class="mdl-textfield__input" id="sample1" readonly>
                <input type="hidden" value="" name="sample1">
                <label for="sample1" class="mdl-textfield__label">Circle</label>
                <ul for="sample1" class="mdl-menu mdl-menu--bottom-left mdl-js-menu">
                    <li class="mdl-menu__item" data-val="AIRTEL">AIRTEL</li>
                    <li class="mdl-menu__item" data-val="JIO">JIO</li>
                    <li class="mdl-menu__item" data-val="BSNL">BSNL</li>
                </ul>
            </div> -->
            <div class="mdl-textfield mdl-js-textfield">
              <input class="mdl-textfield__input" type="text" name="circle" id="circle"  placeholder="Enter Circle">
            </div>
          </div>
            <!-- Colored raised button -->
            <a name="view3" href="[[rootPath]]view3"><button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
              Proceed
            </button></a>
        </div>
    `;
  }
}

window.customElements.define('my-view2', MyView2);
