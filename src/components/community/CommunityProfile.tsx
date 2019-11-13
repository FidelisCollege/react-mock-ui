import * as React from 'react';
import CommunityDetailComponent from "./communityDetailsComponent";
import LeftNavComponent from "../../common/components/left-nav";


const CommunityProfile = () => {
    return (
        <>
            {/*<aside id="leftNav">*/}
                {/*<nav className="left-nav-wrapper">*/}
                    {/*<ul className="list-unstyled d-block d-lg-none">*/}
                        {/*<li className="left-nav py-3 border-bottom">*/}
                            {/*<a href="#" className="left-nav-item user-profile">*/}
                                {/*<img src="images/placeholder/user.png" alt="" className="user-profile-img rounded-circle"/>*/}
                                {/*<span className="left-nav-text">User Name</span>*/}
                            {/*</a>*/}
                        {/*</li>*/}
                    {/*</ul>*/}
                    {/*<div className="main-menu d-flex flex-column justify-content-lg-between">*/}
                        {/*<ul className="list-unstyled mb-0">*/}
                            {/*<li className="left-nav">*/}
                                {/*<a href="student-profile.html" id="home-menu" className="left-nav-item">*/}
                                    {/*<i className="icon-home"></i>*/}
                                    {/*<span className="left-nav-text">Home</span>*/}
                                {/*</a>*/}
                            {/*</li>*/}
                            {/*<li className="left-nav">*/}
                                {/*<a href="base-layout-dashboard.html" className="left-nav-item">*/}
                                    {/*<i className="icon-dashboard"></i>*/}
                                    {/*<span className="left-nav-text">Dashboard</span>*/}
                                {/*</a>*/}
                            {/*</li>*/}
                            {/*<li className="left-nav">*/}
                                {/*<a href="student-table.html" className="left-nav-item">*/}
                                    {/*<i className="icon-user-group"></i>*/}
                                    {/*<span className="left-nav-text">Student</span>*/}
                                {/*</a>*/}
                            {/*</li>*/}
                        {/*</ul>*/}
                        {/*<ul className="list-unstyled mb-0">*/}
                            {/*<li className="left-nav"><a href="#" data-toggle="modal" data-target="#notificationModal"*/}
                                                        {/*className="left-nav-item"><i className="icon-notifications"></i><span*/}
                                {/*className="left-nav-text">Notification</span></a></li>*/}
                            {/*<li className="left-nav"><a href="message.html" className="left-nav-item"><i*/}
                                {/*className="icon-mail"></i><span className="left-nav-text">Mail</span></a></li>*/}
                            {/*<li className="left-nav"><a href="sms.html" className="left-nav-item"><i*/}
                                {/*className="icon-smartphone"></i><span className="left-nav-text">Sms</span></a></li>*/}
                            {/*<li className="left-nav"><a href="#" className="left-nav-item"><i*/}
                                {/*className="icon-tools"></i><span className="left-nav-text">Tools</span></a></li>*/}
                        {/*</ul>*/}
                        {/*<ul className="list-unstyled mb-0">*/}
                            {/*<li className="left-nav flex-column"><a id="community" data-toggle="popover"*/}
                                                                    {/*data-container="body" data-placement="right"*/}
                                                                    {/*data-html="true" href="#" data-trigger="focus"*/}
                                                                    {/*className="left-nav-item d-none d-lg-block"><i*/}
                                {/*className="icon-community"></i><span className="left-nav-text">Community</span></a><a*/}
                                {/*className="left-nav-item d-lg-none"><i className="icon-community"></i><span*/}
                                {/*className="left-nav-text">Community</span></a>*/}
                                {/*<div id="popover-content-community" className="d-none">*/}
                                    {/*<ul className="list-popover p-0 m-0">*/}
                                        {/*<li><a href="#" className="list-popover-item">Mentors<i*/}
                                            {/*className="icon-settings list-popover-icon ml-3"></i></a></li>*/}
                                        {/*<li><a href="#" className="list-popover-item">Mentees<i*/}
                                            {/*className="icon-settings list-popover-icon ml-3"></i></a></li>*/}
                                        {/*<li><a href="community-1.html" className="list-popover-item">Communities<i*/}
                                            {/*className="icon-settings list-popover-icon ml-3"></i></a></li>*/}
                                    {/*</ul>*/}
                                {/*</div>*/}
                                {/*<ul className="list-unstyled d-lg-none ml-5 border-bottom-0 community-submenu">*/}
                                    {/*<li className="left-nav"><a href="#" className="left-nav-item"><i*/}
                                        {/*className="icon-bar-chart"></i><span*/}
                                        {/*className="left-nav-text">Mentors</span></a></li>*/}
                                    {/*<li className="left-nav"><a href="#" className="left-nav-item"><i*/}
                                        {/*className="icon-bar-chart"></i><span*/}
                                        {/*className="left-nav-text">Mentees</span></a></li>*/}
                                    {/*<li className="left-nav"><a href="community-1.html" className="left-nav-item"><i*/}
                                        {/*className="icon-bar-chart"></i><span*/}
                                        {/*className="left-nav-text">Communities</span></a></li>*/}
                                {/*</ul>*/}
                            {/*</li>*/}
                            {/*<li className="left-nav"><a href="#" className="left-nav-item"><i*/}
                                {/*className="icon-bar-chart"></i><span className="left-nav-text">Analytics</span></a></li>*/}
                            {/*<li className="left-nav"><a href="#" className="left-nav-item"><i className="icon-help"></i><span*/}
                                {/*className="left-nav-text">Help</span></a></li>*/}
                            {/*<li className="left-nav d-none d-lg-block"><a id="my-account-popover" href="#"*/}
                                                                          {/*data-container="body" data-toggle="popover"*/}
                                                                          {/*data-rel="custom1" data-trigger="focus"*/}
                                                                          {/*data-placement="right"*/}
                                                                          {/*className="left-nav-item user-profile"><img*/}
                                {/*src="images/placeholder/user.png" alt=""*/}
                                {/*className="user-profile-img rounded-circle"/><span*/}
                                {/*className="left-nav-text">Profile</span></a>*/}
                                {/*<div id="popover-content-my-account-popover" className="d-none">*/}
                                    {/*<ul className="list-popover p-0 m-0">*/}
                                        {/*<li><a href="#" className="list-popover-item text-capitalize">my profile<i*/}
                                            {/*className="icon-settings list-popover-icon ml-3"></i></a></li>*/}
                                        {/*<li><a href="setting-privacy.html"*/}
                                               {/*className="list-popover-item text-capitalize">settings<i*/}
                                            {/*className="icon-settings list-popover-icon ml-3"></i></a></li>*/}
                                        {/*<li><a href="#" className="list-popover-item text-capitalize">logout<i*/}
                                            {/*className="icon-settings list-popover-icon ml-3"></i></a></li>*/}
                                    {/*</ul>*/}
                                {/*</div>*/}

                            {/*</li>*/}
                        {/*</ul>*/}
                    {/*</div>*/}
                {/*</nav>*/}
                {/*<div id="leftNavBackdrop" className="modal-backdrop"></div>*/}
            {/*</aside>*/}
            <main className="dashboard-container student-profile">
                <div className="inner-container min-height-0 p-lg-3">
                    <div className="d-flex flex-grow-1 tab-content-wrapper min-height-0 h-100">
                        <div className="left-column d-none d-md-block">
                            <LeftNavComponent/>
                        </div>
                        <div className="student-details tab-data active w-100 pl-lg-3 p-2 d-flex flex-column overflow-auto">
                            <h3 className="text-capitalize text-primary pt-3 f-18">
                                <i className="icon-caret-left text-primary f-14 mr-2 font-weight-bold"></i>my communities
                            </h3>
                            <div className="position-relative profile-banner-wrapper">
                                <img src='images/profile-background.png' className="w-100 img-fluid h-100 banner-img"/>
                                <div className="profile-banner-content w-100 h-100 p-3 d-md-flex">
                                    <div className="d-flex align-items-center">
                                        <img src="images/media-img.png" alt="..." className="profile-img"/>
                                        <h6 className="profile-banner-heading text-white font-weight-bold ml-3">Community for Mountaineers & Trekkers of North America
                                            <div className="d-flex f-14 font-weight-normal mt-2">
                                                <a href="" className=" text-white">2.5K Members</a>
                                                <div className="ml-1 mr-1">|</div>
                                                <a href="" className=" text-white">980 Activities</a>
                                            </div>
                                        </h6>
                                    </div>
                                    <div className="d-flex joinned-badge">
                                        <span className="badge badge-pill bg-info text-white d-flex align-items-center">
                                            <div className="joined-wrapper mr-1"><i className="icon-check"></i></div>
                                            <span className="font-weight-normal  text-uppercase">joined</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <CommunityDetailComponent/>
                        </div>
                    </div>
                </div>
             </main>
        </>
    );
}

export default  CommunityProfile;
