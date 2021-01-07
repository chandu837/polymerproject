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

class RechargeHistory extends PolymerElement {
  static get properties() {
        return {
            user: {
                type: Object,
                value: function() {
                    // fetch data from localstorage 
                    var userlist = JSON.parse(window.localStorage.getItem('userData'));
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

      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
        .mdl-data-table
        {
          width:100%;
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
        <h5>Recharge History</h5>
      </div>
      <div class="card">
        <div class="mdl-grid">
            <div class="table-responsive mdl-cell--12-col">
              <table class="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
                  <thead>
                    <tr>
                        <th scope="col" class="mdl-data-table__cell--non-numeric">Mobile Number</th>
                        <th scope="col" class="mdl-data-table__cell--non-numeric">Amount</th>
                        <th scope="col" class="mdl-data-table__cell--non-numeric">Operator</th>
                        <th scope="col" class="mdl-data-table__cell--non-numeric">Circle</th>
                        <th scope="col" class="mdl-data-table__cell--non-numeric">Status</th>
                    </tr>
                  </thead>
                  <!-- Binding to text content is always one-way, host-to-target. -->
                  <template is="dom-repeat" items="[[user.userlist]]" >
                    <tbody>
                        <tr class="item">
                          <td class="mdl-data-table__cell--non-numeric">[[item.0]]</td>
                          <td class="mdl-data-table__cell--non-numeric">[[item.1]]</td>
                          <td class="mdl-data-table__cell--non-numeric">[[item.2]]</td>
                          <td class="mdl-data-table__cell--non-numeric">[[item.3]]</td>
                          <td class="mdl-data-table__cell--non-numeric">Success</td>
                        </tr>
                    </tbody>
                  </template>
              </table>
            </div>
        </div>
      </div>
    `;
  }
}
// Register the recharge-history element with the browser
window.customElements.define('recharge-history', RechargeHistory);
