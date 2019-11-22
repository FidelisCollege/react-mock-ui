import * as React from 'react';
import {IconGoogle} from "../../common";
import SignUpComponent from "./signUp";




const LoginFormComponent  = () => {
    const [flag, setFlag] = React.useState(0);
    if (!flag) {
        return (
            <main className="dashboard-container student-profile">
                <div className="" id="loginForm">
                    <h1 className="login-heading">sign in</h1>
                    <div className="form-wrapper">
                        <div className="label-heading">
                            <a className=" text-center" href="">
                                <IconGoogle/>
                                <span className="ml-2 f-14 text-dark">Sign in using Google account</span>
                            </a>
                        </div>
                        <div className="or-wrapper ">
                            <hr></hr>
                            <div className="or-block">OR</div>
                        </div>
                        <fieldset className="mt-4">
                            <div className="form-group has-error mb-4">
                                <label htmlFor="validationCustom03" className="f-14 text-dark">Enter Email
                                    Address</label>
                                <input className="form-control input-lg f-14" placeholder="E-mail Address" name="email"
                                       type="text" id="validationCustom03"/>
                                {/*<div className="invalid-feedback d-block">Please provide a valid email.</div>*/}
                            </div>
                            <div className="form-group has-success mb-4">
                                <label className="f-14 text-dark">Password</label>
                                <input className="form-control input-lg f-14" placeholder="Enter Password"
                                       name="password" value="" type="password"/>
                            </div>

                            <input className="btn btn-lg btn-primary btn-block f-16" value="Sign In" type="submit"
                                   id="submitButton"/>

                            <div className="d-flex justify-content-between mt-2 f-14 ">
                                <a className="text-secondary" href="" id="forgotPssword">Forgot Password?</a>
                                <a className="text-primary" href="" id="" onClick={() => setFlag(1)}>New User?</a>
                            </div>
                        </fieldset>
                    </div>
                    <footer className="text-center mt-2 f-13" id="copyrightFooter">
                        <a className="text-secondary" href="#" target="_blank">Powered by Fidelis &copy; 2019</a>
                    </footer>

                </div>
            </main>

        );
    }
    else {
        return (
            <SignUpComponent/>
        )
    }

}


export default  LoginFormComponent;