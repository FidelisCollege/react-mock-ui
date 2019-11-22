import * as React from 'react';
import {IconGoogle} from "../../common";




const ForgotPasswordComponent  = () => {


    return (
        <div className="" id="loginForm">
            <h1 className="login-heading">reset password</h1>
            <div className="form-wrapper">
                <fieldset className="">
                    <div className="form-group has-error mb-4">
                        <label htmlFor="validationCustom03" className="f-14 text-dark">Enter Email
                            Address</label>
                        <input className="form-control input-lg f-14" placeholder="E-mail Address" name="email"
                               type="text" id="validationCustom03"/>
                    </div>
                    <div className="form-group has-success mb-4">
                        <label className="f-14 text-dark">Password</label>
                        <input className="form-control input-lg f-14" placeholder="Enter Password"
                               name="password" value="" type="password"/>
                    </div>
                    <div className="form-group has-success mb-4">
                        <label className="f-14 text-dark">Confirm Password</label>
                        <input className="form-control input-lg f-14" placeholder="Confirm Password" name="password" value="" type="password"/>
                    </div>

                    <input className="btn btn-lg btn-primary btn-block f-16" value="Confirm Password" type="submit"
                           id="submitButton"/>

                </fieldset>
            </div>
            <footer className="text-center mt-2 f-13" id="copyrightFooter">
                <a className="text-secondary" href="#" target="_blank">Powered by Fidelis &copy; 2019</a>
            </footer>

        </div>



    );
}


export default  ForgotPasswordComponent;