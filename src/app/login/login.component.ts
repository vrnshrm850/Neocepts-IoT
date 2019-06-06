import { Component, OnInit } from "@angular/core";
// import { RecaptchaComponent } from "ng-recaptcha";
// import { ViewChild } from "@angular/core";
import { environment } from "../../environments/environment";
import { SBM_GLOBAL_VARIABLE } from "../../api.config";
import { Router } from "@angular/router";
// import {TdMediaService} from "@covalent/core";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  // @ViewChild(RecaptchaComponent)
  // captcha: ReCaptchaComponent;
  // myRecaptcha: boolean = false;
  // siteKey: string = environment.siteKey;
  viewObj: any = { isLogin: true, isForgotPassword: false };
  globalVariable: any = SBM_GLOBAL_VARIABLE;
  emailId: string;
  password: string;
  currentUser: any;
  signUpSuccessfull: any = false;
  errorInSignUp: any = false;
  errorMessageInSignUp: any = "";
  errorMessageInForgotPassword: string = "";
  errorInForgotPassword: any = false;
  passwordLinkSentMessage: any = false;
  email: string;
  obj: Object;
  signUpForm: any;
  hideFormTOReset: any = false;

  // copyViewObj: any = this._commonFunction.copy(this.viewObj);
  isGstnAlreadyExist: any = false;
  isEmailAlreadyExist: any = false;
  resendActivationLinkShow: any = false;
  isHavingGstn: any = true;
  countryId: string;
  states: any;
  stateId: any;
  PANNumber: any;
  isSignUpScreen: any = false;
  isSignUpAllowed: any = false;
  myRecaptchaForgotPassword: any = false;
  disableLoginButton: boolean = false;
  siteKey: string = environment.siteKey;
  isuserLoggedOut: any;
  signUpObjectModel: any = {
    companyGSTIN: "",
    companyName: "",
    emailId: "",
    password: "",
    confirmPassword: "",
    contactPersonName: "",
    mobileNumber: "",
    contactPersonDesignation: "",
    isHavingGstn: "true"
  };

  constructor(private _router: Router) {}

  ngOnInit() {}

  login() {
    this._router.navigate(["layout"]);
  }
}
