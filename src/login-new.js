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

class LoginNew extends PolymerElement {
	static get template() {
		return html`
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
.submitBtn{
	background: #17a2b8;
   color: #fff;
   font-weight: 500;
   padding: 10px 30px;
}
</style>
	<div class="login-form">
		<iron-form id="form3">
			<form name="userForm" id="userForm">
					<div class="avatar">
							<img src="images/avatar.png" alt="Avatar">
					</div>
					<h2 class="text-center">User Login</h2> 
					<paper-input type="text" name="name" label="User Name" id="username" required error-message="Please enter valid user name ...!" auto-validate maxlength="10" pattern="[A-Za-z]*"></paper-input>
					<paper-input type="password" id="password" label="Password"  required error-message="Please enter valid password" auto-validate maxlength="5"></paper-input><br>
					<!-- Raised button -->
               <paper-button raised class="submitBtn" on-click="userValidation">Submit</paper-button>
			</form>
		</iron-form>
	</div>`;
	}
	userValidation() {
		// username validations
		var username = this.$.username.value;
		if(username == "" || username== "null"){
			alert("Enter Valid username..!");
			this.$.username.focus();
			return false;
		}
		//password validations
		var password = this.$.password.value;
		if(password == "" || password == "null"){
			alert("Enter Valid password..!");
			this.$.password.focus();
			return false;
		}
		// if entered credentials correct then redirect to Account Summery page
		if(username == "admin" && password == "pass"){
			alert("Login Success");
			window.location = 'accountsummary';
		}
		else{
			alert("wrong Credentials");
			//Need to force a change on value to trigger the notify to `paper input` field focused
			this.$.password.focus();
		}
	};
}

window.customElements.define('login-new', LoginNew);
