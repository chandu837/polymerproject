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

class MyView3 extends PolymerElement {
  static get template() {
    return html`
    <link rel="stylesheet" href="/node_modules/material-design-lite/material.min.css">
    <script src="/node_modules/material-design-lite/material.min.js"></script>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">

      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div class="card">
      <h6>Recharge History</h6>
        <table class="mdl-data-table mdl-js-data-table">
        <thead>
          <tr>
            <th class="mdl-data-table__cell--non-numeric">Mobile Number</th>
            <th class="mdl-data-table__cell--non-numeric">Amount</th>
            <th class="mdl-data-table__cell--non-numeric">Operator</th>
            <th class="mdl-data-table__cell--non-numeric">Circle</th>
            <th class="mdl-data-table__cell--non-numeric">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="mdl-data-table__cell--non-numeric">9071351777</td>
            <td class="mdl-data-table__cell--non-numeric">100</td>
            <td class="mdl-data-table__cell--non-numeric">JIO</td>
            <td class="mdl-data-table__cell--non-numeric">Karnataka</td>
            <td class="mdl-data-table__cell--non-numeric">Success</td>
          </tr>
          <tr>
            <td class="mdl-data-table__cell--non-numeric">9071350777</td>
            <td class="mdl-data-table__cell--non-numeric">100</td>
            <td class="mdl-data-table__cell--non-numeric">JIO</td>
            <td class="mdl-data-table__cell--non-numeric">Tamilnadu</td>
            <td class="mdl-data-table__cell--non-numeric">Success</td>
          </tr>
          <tr>
            <td class="mdl-data-table__cell--non-numeric">9071381777</td>
            <td class="mdl-data-table__cell--non-numeric">100</td>
            <td class="mdl-data-table__cell--non-numeric">JIO</td>
            <td class="mdl-data-table__cell--non-numeric">Karnataka</td>
            <td class="mdl-data-table__cell--non-numeric">Success</td>
          </tr>
          <tr>
            <td class="mdl-data-table__cell--non-numeric">9603480580</td>
            <td class="mdl-data-table__cell--non-numeric">399</td>
            <td class="mdl-data-table__cell--non-numeric">JIO</td>
            <td class="mdl-data-table__cell--non-numeric">Andhra Pradesh</td>
            <td class="mdl-data-table__cell--non-numeric">Failed</td>
          </tr>
          <tr>
            <td class="mdl-data-table__cell--non-numeric">9949094845</td>
            <td class="mdl-data-table__cell--non-numeric">99</td>
            <td class="mdl-data-table__cell--non-numeric">AIRTEL</td>
            <td class="mdl-data-table__cell--non-numeric">Andhra Pradesh</td>
            <td class="mdl-data-table__cell--non-numeric">Success</td>
          </tr>
          <tr>
            <td class="mdl-data-table__cell--non-numeric">8500829730</td>
            <td class="mdl-data-table__cell--non-numeric">399</td>
            <td class="mdl-data-table__cell--non-numeric">VI</td>
            <td class="mdl-data-table__cell--non-numeric">Karnataka</td>
            <td class="mdl-data-table__cell--non-numeric">Success</td>
          </tr>
          <tr>
            <td class="mdl-data-table__cell--non-numeric">8500089423</td>
            <td class="mdl-data-table__cell--non-numeric">99</td>
            <td class="mdl-data-table__cell--non-numeric">BSNL</td>
            <td class="mdl-data-table__cell--non-numeric">Andhra Pradesh</td>
            <td class="mdl-data-table__cell--non-numeric">Success</td>
          </tr>
          <tr>
            <td class="mdl-data-table__cell--non-numeric">9949094846</td>
            <td class="mdl-data-table__cell--non-numeric">199</td>
            <td class="mdl-data-table__cell--non-numeric">BSNL</td>
            <td class="mdl-data-table__cell--non-numeric">Karnataka</td>
            <td class="mdl-data-table__cell--non-numeric">Success</td>
          </tr>
          <tr>
            <td class="mdl-data-table__cell--non-numeric">9071341777</td>
            <td class="mdl-data-table__cell--non-numeric">399</td>
            <td class="mdl-data-table__cell--non-numeric">JIO</td>
            <td class="mdl-data-table__cell--non-numeric">Karnataka</td>
            <td class="mdl-data-table__cell--non-numeric">Success</td>
          </tr>
         
        </tbody>
      </table>
      </div>
    `;
  }
}

window.customElements.define('my-view3', MyView3);
