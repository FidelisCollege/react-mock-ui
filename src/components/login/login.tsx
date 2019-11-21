import * as React from 'react';
import OnboardNav from "../onBoarding/container/onBoardingContainer";
import {OnBoardingTabs} from "../onBoarding/Models/onBoardingModel";




const LoginFormComponent  = () => {


    return (
        <main className="dashboard-container student-profile">
            <div className="row d-flex justify-content-center h-100 align-items-center p-2">
                <div className="col-md-8 col-lg-7 mx-auto">
                    <div className="text-center pb-3">
                        <h1 className="text-capitalize text-dark f-30 font-weight-normal">sign in</h1>
                    </div>
                    <div className="card card-body login-in card-shadow p-3">
                        <fieldset>
                            <div className="form-group has-error">
                                <label htmlFor="validationCustom03">Email</label>
                                <input className="form-control input-lg" placeholder="E-mail Address" name="email"
                                       type="text" id="validationCustom03"/>
                                <div className="invalid-feedback d-block">Please provide a valid email.</div>
                            </div>
                            <div className="form-group has-success">
                                <label>Password</label>
                                <input className="form-control input-lg" placeholder="Password" name="password" value=""
                                       type="password"/>
                            </div>
                            <label></label>
                            <input className="btn btn-lg btn-primary btn-block" value="Sign In" type="submit"
                                   id="submitButton"/>
                            <div className="mt-3 label-heading text-center"><a
                                className="btn btn-outline-primary text-center" href=""><i
                                className="icon-google"></i><span className="ml-1">Sign in with google</span></a></div>
                            <div className="mt-1 label-heading text-center"><a
                                className="text-secondary text-center mr-2" href="forgot-password.html"
                                id="forgotPssword">Forgot Password?</a><a className="text-secondary text-center"
                                                                          href="signup.html" id="logIn">New User</a>
                            </div>
                        </fieldset>
                    </div>
                    <footer className="text-center mt-2" id="copyrightFooter"><a className="copyright-link" href="#"
                                                                                 target="_blank">Powered by
                        Fidelis &copy;<span className="copyright-year">2019</span></a></footer>
                </div>
            </div>
        </main>



    );
}


export default  LoginFormComponent;