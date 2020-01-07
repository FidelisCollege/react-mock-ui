import * as React from 'react';
import {IconFacebook, IconInstagram, IconLinkdin, IconTwitter} from "../../common";




const SocialIconWrapper = () => {

    return (
        <div className="d-flex w-100 mt-3">
            <div className="social-icon-bg mr-4">
                <IconFacebook/>
            </div>
            <div className="social-icon-bg mr-4">
                <IconLinkdin/>
            </div>
            <div className="social-icon-bg mr-4">
                <IconTwitter/>
            </div>
            <div className="social-icon-bg">
                <IconInstagram/>
            </div>
        </div>

    );
}

export default SocialIconWrapper;
