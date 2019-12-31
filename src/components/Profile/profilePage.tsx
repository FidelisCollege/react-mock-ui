import * as React from 'react';
import ProfileLeftSection from "./profileLeftSection";
import ProfileRightSection from "./profileRightSection";



const ProfilePage = () => {

    return (
        <main className="dashboard-container student-profile">
            <div className="inner-container min-height-0 p-3 d-lg-flex profile-page-wrapper">
                <div className="d-flex flex-grow-1 tab-content-wrapper min-height-0 flex-column flex-md-row ">
                    <ProfileLeftSection/>
                    <ProfileRightSection/>
                </div>
            </div>
        </main>
    );
}

export default ProfilePage;
