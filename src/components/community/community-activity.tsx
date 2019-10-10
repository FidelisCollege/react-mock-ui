import * as React from 'react';

import { Media } from 'reactstrap';

const CommunityActivity = () => {
    return (
        <Media className="mb-2">
            <Media left top href="#">
                <Media src="images/media-img.png" />
            </Media>
            <Media body className="ml-3">
                <Media paragraph className="f-14 text-dark">
                    Luke started the badge exam  first time
                </Media>


            </Media>
        </Media>



    );
}


export default  CommunityActivity;