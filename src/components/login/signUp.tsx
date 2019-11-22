import * as React from 'react';





const SignUpComponent  = () => {

    return (
        <div className="" id="loginForm">
            <h1 className="login-heading">sign Up</h1>
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
                    <div className="custom-control custom-checkbox mb-3">
                        <input className="custom-control-input" id="customCheckCustom" type="checkbox" value=""/>
                        <label className="custom-control-label f-14 text-dark pt-1" htmlFor="customCheckCustom">I have read and agree</label>
                    </div>
                    <input className="btn btn-lg btn-primary btn-block f-16" value="Sign Up" type="submit"
                           id="submitButton"/>

                </fieldset>
            </div>
            <footer className="text-center mt-2 f-13" id="copyrightFooter">
                <a className="text-secondary" href="#" target="_blank">Powered by Fidelis &copy; 2019</a>
            </footer>

        </div>



    );
}


export default  SignUpComponent;