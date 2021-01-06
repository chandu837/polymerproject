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
import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-selector/iron-selector.js';
import '@polymer/paper-button/paper-button.js';



// Gesture events like tap and track generated from touch will not be
// preventable, allowing for better scrolling performance.
setPassiveTouchGestures(true);

// Set Polymer's root path to the same value we passed to our service worker
// in `index.html`.
setRootPath(MyAppGlobals.rootPath);

class MyApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          --app-primary-color: #4285f4;
          --app-secondary-color: black;
          display: block;
        }

        app-drawer-layout:not([narrow]) [drawer-toggle] {
          display: none;
        }

        app-header {
          color: #fff;
          background-color: var(--app-primary-color);
          display:none;
        }

        app-header paper-icon-button {
          --paper-icon-button-ink-color: white;
        }

        .drawer-list {
          margin: 0 20px;
        }

        .drawer-list a {
          display: block;
          padding: 0 16px;
          text-decoration: none;
          color: var(--app-secondary-color);
          line-height: 40px;
        }

        .drawer-list a.iron-selected {
          color: black;
          font-weight: bold;
        }
        #contentContainer , #contentContainer[opened]{
          background: #17a2b8 !important;
        }
        #contentContainer[opened] {
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
          background: #17a2b8 !important;
          opacity: 0.5;
          color: #fff;
          font-weight: 600;
      }
      </style>
      <!--- application location component starts here -->
      <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>
      <!--- application location component ends here -->

      <!--- application routing component starts here-->
      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}"></app-route>
      <!--- application routing component ends here -->

      <!--- application drawer layout component start -->
      <app-drawer-layout fullbleed="" narrow="{{narrow}}">
        <!-- drawer content code starts here for navigations screens -->
        <app-drawer id="drawer" slot="drawer" swipe-open="[[narrow]]">
          <app-toolbar>Welcome Admin</app-toolbar>

          <!-- iron selector code starts here -->
          <iron-selector selected="[[page]]" attr-for-selected="name" class="drawer-list" role="navigation">
            <a name="accountsummary" href="[[rootPath]]accountsummary">Account Summary</a>
            <a name="rechargepage" href="[[rootPath]]rechargepage">Mobile Recharge</a>
            <a name="rechargesuccess" href="[[rootPath]]rechargesuccess"> Recharge confirmation </a>
            <a name="rechargehistory" href="[[rootPath]]rechargehistory">Recharge History</a>
            <a name="loginnew" href="[[rootPath]]loginnew">LogOut</a>
          </iron-selector>

          <!-- iron selector code ends here -->
        </app-drawer>
        <!-- app drawer code ends here -->

        <!-- Main content -->
        <app-header-layout has-scrolling-region="">
        <!-- app header code starts here -->
          <app-header id="header" slot="header" condenses="" reveals="" effects="waterfall">
            <app-toolbar>
              <paper-icon-button icon="my-icons:menu" drawer-toggle=""></paper-icon-button>
              <div main-title="">User Dashboard</div>
            </app-toolbar>
          </app-header>
          <!-- app header code ends here -->

          <!-- iron pages code starts here -->
          <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
            <account-summary name="accountsummary"></account-summary>
            <recharge-page name="rechargepage"></recharge-page>
            <recharge-success name="rechargesuccess"></recharge-success>
            <recharge-history name="rechargehistory"></recharge-history>
            <login-new name="loginnew"></login-new>
            <my-view404 name="view404"></my-view404>
          </iron-pages>
          <!-- iron pages code ends here -->

        </app-header-layout>
        <!-- app header code ends here -->

      </app-drawer-layout>
      <!-- app drawer code ends here -->
    `;
  }

  static get properties() {
    return {
      page: {
        type: String,
        reflectToAttribute: true,
        //If page has changed import the appropiate page
        observer: '_pageChanged'
      },
      routeData: Object,
      subroute: Object
    };
  }

  static get observers() {
    // To the routing data changes if we send the page nage based on that we need to navigate appropiate page
    return [
      '_routePageChanged(routeData.page)'
    ];
  }

  _routePageChanged(page) {
     // Show the corresponding page according to the route.
     //
     // If no page was found in the route data, page will be an empty string.
     // Show 'loginpage' in that case. And if the page doesn't exist, show 'view404'.
    if (!page) {
      this.page = 'loginnew';      
    } else if (['loginnew','accountsummary', 'rechargepage','rechargesuccess', 'rechargehistory'].indexOf(page) !== -1) {
      this.page = page;
    }else {
      this.page = 'view404';
    }

    // Close a non-persistent drawer when the page & route are changed.
    if (!this.$.drawer.persistent) {
      this.$.drawer.close();
    }
  }

  _pageChanged(page) {
    // Import the page component on demand.
    //
    // Note: `polymer build` doesn't like string concatenation in the import
    // statement, so break it up.
    switch (page) {
      case 'loginnew':
        import('./login-new.js');
        this.$.drawer.style.display = 'none';
        this.$.header.style.display = 'none';
        break;
      case 'accountsummary':
        import('./account-summary.js');
        break;
      case 'rechargepage':
        import('./recharge-page.js');
        break;
      case 'rechargesuccess':
      import('./recharge-success.js');
      break;
      case 'rechargehistory':
        import('./recharge-history.js');
        break;      
      case 'view404':
        import('./my-view404.js');
        break;
    }
  }
}

window.customElements.define('my-app', MyApp);
