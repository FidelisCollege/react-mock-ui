import * as React from 'react';
import ProgressBarComponent from './progressBarComponent';
import GoalActionDropdownComponent from './goalActionDropdownComponent';
import { statusTypes } from '../models/studentModel';

export interface GoalListPropsInterface {
    imageUrl: string;
    textDescription: string;
    appType: string;
    targetDate: string;
    status: string;
    progress: string;
    recommendedBy?: string;
}

const GoalListComponent = (props: GoalListPropsInterface) => {
    const { imageUrl, textDescription, appType, targetDate, status, progress } = props;

    return (
        <li className="media m-1 mb-3 card-shadow p-2 px-lg-3 py-lg-4">
            <div className="media-left pr-1">
                <img className="border media-img" src={imageUrl ? imageUrl : 'images/personal_goal.png'} alt="..." />
            </div>
            <div className="media-body col-15 col-lg-19">
                <div className="row no-gutters">
                    <div className="col-24 col-lg-9 d-flex flex-column pr-lg-3">
                        <p className="media-primary-text media-content-msg mb-1 mb-lg-2">{textDescription}</p>
                        <div className="media-secondary-text d-none d-lg-block">
                            <label className="mb-0">App type:&nbsp;</label>
                            <span>{appType}</span>
                        </div>
                    </div>
                    <div className="col-24 col-lg-6 d-flex flex-column pl-lg-3">
                        {
                            targetDate &&
                            <div className="mb-lg-2">
                                <label className="media-secondary-text mb-0">{status === statusTypes.IN_PROGRESS ? 'Target Date' : 'Completed On'}</label>
                                <div className="d-block media-primary-text mb-0 line-height-1 text-capitalize">{targetDate}</div>
                            </div>
                        }
                        <div className="media-secondary-text d-none d-lg-block">
                            <label className="mb-0">Status: &nbsp;</label>
                            <span className="text-capitalize">{status}</span>
                        </div>
                    </div>
                    <div className="col-24 col-lg-9 d-none d-lg-flex flex-column pl-lg-3">
                        <div className="mb-lg-2">
                            <label className="media-secondary-text">Progress</label>
                            <div className="w-50 progress-current">
                                <ProgressBarComponent progress={progress} />
                            </div>
                        </div><span className="media-secondary-text">{progress}</span>
                    </div>
                </div>
            </div>
            <div className="media-right d-flex flex-column ml-auto">
                <div className="mb-3 ml-auto">
                    <GoalActionDropdownComponent />
                </div>
                <button className="btn btn-outline-primary">View</button>
            </div>
        </li>
    );
}

export default GoalListComponent;
