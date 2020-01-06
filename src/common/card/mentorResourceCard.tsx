import * as React from 'react';
import {IconFiledownload} from "../icons";




const MentorResourceCard = () => {
    return (

        <li className="">
            <div className="card pb-0 text-capitalize bg-transparent border-0">

                <div className="card-body d-flex ">
                    <div className=' text-truncate'>
                        <h6 className="mb-0 person-message">
                            <a href="#" className="f-14 text-dark font-weight-bold text-capitalize">Modern Catholic Social Documents and Political Economy</a>
                        </h6>
                        <p className="text-secondary f-14 text-truncate mb-2">The modern Roman Catholic social documents offer a treasure trove of teachings on political economy</p>
                        <div className="activity-footer text-capitalize text-primary border-0 d-flex align-items-center bg-transparent">
                            <a href="#" className="text-primary d-flex align-items-center"><IconFiledownload className="mr-2"/>download</a>

                        </div>
                    </div>
                </div>
            </div>

        </li>
    );
}

export default MentorResourceCard;