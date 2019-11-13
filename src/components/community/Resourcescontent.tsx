import * as React from 'react';
import LeftNavComponent from "../../common/components/left-nav";
import MentorRightSection from "../mentor/mentorRightSection";
import MentorResourceCard from "../../common/card/mentorResourceCard";



const ResourcesContent = () => {
    return (

        <main className="dashboard-container student-profile">


            <div className="inner-container min-height-0">
                <div className="d-flex flex-grow-1 tab-content-wrapper min-height-0 h-100 px-3">
                    <div className="left-column d-none d-md-none d-lg-flex ">
                        <LeftNavComponent/>
                    </div>
                    <div className="student-details tab-data active d-flex flex-column flex-grow-1 px-md-3">
                        <header className="border-bottom pb-md-2 f-18 text-primary text-capitalize font-weight-bold pt-2">
                            <div className="d-flex justify-content-between">resources
                                <a href="#" className="text-primary f-14 font-weight-normal">close</a>
                            </div>
                            <div className="search-input-group w-50 d-flex align-items-center bg-white form-control my-2 resource-search" id="searchBox">
                                <input className="form-control  border-top-0 border-left-0 border-bottom-0 border-right rounded-0 py-0" type="text" placeholder="Search resources here" />
                                <label htmlFor="file-upload" className="custom-file-upload px-2 text-primary f-14">
                                    <input id="file-upload" type="file" className="d-none"/>Upload
                                </label>
                            </div>
                        </header>
                        <ul className="list-unstyled show-list-activity mb-0 py-3 overflow-auto">
                            <MentorResourceCard/>
                            <MentorResourceCard/>
                            <MentorResourceCard/>
                            <MentorResourceCard/>
                            <MentorResourceCard/>
                            <MentorResourceCard/>
                            <MentorResourceCard/>
                            <MentorResourceCard/>
                            <MentorResourceCard/>
                            <MentorResourceCard/>
                            <MentorResourceCard/>
                            <MentorResourceCard/>

                        </ul>
                    </div>
                    <div className="flex-column tab-data right-column d-none d-lg-flex">
                        <MentorRightSection/>
                    </div>
                </div>
            </div>
        </main>







    );
}

export default  ResourcesContent;
