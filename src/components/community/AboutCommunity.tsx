import * as React from 'react';
import CommunityDetailsComponent from "./communityDetailsComponent";




const AboutCommuinityDetails = () => {

        return (
            <div className="content-wrapper">
                <p className="f-14 text-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry’s standard dummy text ever since the
                    1500s, when an unknown printer took a galley of type and scrambled it to
                    make a type specimen book.
                </p>
                <div className="mt-4">
                    <h3 className="text-capitalize f-14 text-dark">active since</h3>
                    <div className="text-capitalize f-14 text-light">01 Feb 2018</div>
                </div>
                <div className="mt-4">
                    <h3 className="text-capitalize f-14 text-dark">sub communities</h3>
                    <p className="text-capitalize f-14 text-light mb-0">Climbers Sub Community 1</p>
                    <p className="text-capitalize f-14 text-light mb-0">Climbers Sub Community 2</p>
                </div>
                <div className="mt-4">
                    <h3 className="text-capitalize f-14 text-dark">community manager</h3>
                    <p className="text-capitalize f-14 text-light mb-0">Laura Guzman</p>

                </div>
            </div>
        );
    }
export default AboutCommuinityDetails;