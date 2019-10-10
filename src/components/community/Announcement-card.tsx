import * as React from 'react';

import { Media } from 'reactstrap';

const CommunityAnnouncements = () => {
    return (


            <Media className="mb-2">
                <Media left top href="#">
                    <Media src="images/media-img.png" />
                </Media>
                <Media body className="ml-3">
                    <Media paragraph className="f-14 text-dark">
                        Chinmay suggested  Design Research methodology book By N N/g
                    </Media>
                    <time className="f-14 text-secondary text-capitalize">just now</time>

                </Media>
            </Media>



    );
}


export default  CommunityAnnouncements;