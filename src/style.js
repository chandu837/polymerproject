
class styleElement extends PolymerElement {
    static get template() {
      return html`
      <style include="shared-styles">
      /* Custom styles added on 07-12-2020 at 9:20pm */
      *{
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          font-family: Source Sans Pro,SansSerif,Helvetica;
          -webkit-font-smoothing: antialiased;
          text-shadow: 1px 1px 1px rgba(0,0,0,.004);
          outline: none;
          text-decoration: none;
      }
      .login-form {
          width: 350px;
          margin: 0 auto;
          padding: 100px 0 30px;		
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
      .login-form h2 {
          font-size: 22px;
          margin: 35px 0 25px;
      }
      .login-form .avatar {
          position: absolute;
          margin: 0 auto;
          left: 0;
          right: 0;
          top: -50px;
          width: 95px;
          height: 95px;
          border-radius: 50%;
          background: #17a2b8;
          padding: 15px;
          box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
      }
      .login-form .avatar img {
          width: 100%;
      }	
      .login-form input[type="checkbox"] {
          position: relative;
          top: 1px;
      }
      .login-form .btn, .login-form .btn:active {        
          font-size: 16px;
          font-weight: bold;
          border: none;
      }
      .login-form .btn:hover, .login-form .btn:focus {
          background: #50b8b3 !important;
      }    
      .login-form a {
          color: #70c5c0;
          text-decoration: underline;
      }
      .login-form a:hover {
          color: #fff;
          text-decoration: none;
      }
      .login-form form a {
          color: #7a7a7a;
          text-decoration: none;
      }
      .login-form form a:hover {
          text-decoration: underline;
      }
      .login-form .bottom-action {
          font-size: 14px;
      }
      .login-form p ,  .login-form p a {
          color: #17a2b8;
      }
      
      .form-control {
          min-height: 41px;
          background: #fff;
          box-shadow: none !important;
          border-color: #e3e3e3;
      }
      .form-control:focus {
          border-color: #70c5c0;
      }
      .form-control, .btn {        
          border-radius: 2px;
      }
      /* User Validations */
      #userDiv, #passwordDiv{
          color: red;
      }
      
      /* Home page Css starts here */
      .userImg{
          width: 50px;
          height: 50px;
          background-color: #17a2b8;
          border-radius: 50%;
      }
      .userImg img{
          width: 50px;
          padding: 5px;
      }
      /* Dashboard Css starts here  */
      .bg-fff{
          background-color: #fff;
      }
      .m-h-450{
          min-height: 550px;
      }
      /* footer css starts here */
      footer {
          display: block;
        }
      
        /* RechargePage Css Code Starts Here */
        .heading2{
          font-size: 18px;
          color: #7a7a79;
          font-weight: 300;
        }
        .heading1{
          font-size: 14px;
          text-transform: uppercase;
          color: #5c5c5c;
          line-height: 1.8;
          font-weight: 600;
        }
        #mobilenumber{
          padding-left: 45px;
        }
        .inputprefix{
          position: absolute;
          left: 30px;
          top: 12px;
          color: #a5a5a5;
          height: 100%;
          line-height: 1;
          display: inline-block;
          vertical-align: middle;
        }   </style>`;
    }
}

        
window.customElements.define('styleElement', styleElement);