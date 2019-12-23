import * as React from 'react';
import TeamListComponent, { TeamListComponentProps } from './teamListComponent';
import { Constants } from '../../../constants/constants';

export interface TeamProps {
    teamListData: TeamListComponentProps[];
    coach: any;
}

const TeamComponent = (props: TeamProps) => {
    const { teamListData, coach } = props;

    return (
        <div className="card card-shadow team-card">
            <div className="card-body team-card-body min-height-0">
                {
                    coach && (
                        <div className="list-team-header person"><img className="mr-2 rounded-circle border person-img" src={coach.avatar.picMedium} alt="" />
                            <div className="person-info text-capitalize">
                                <div className="person-name text-dark">{coach ? coach.fullName : ''}</div>
                                <div className="person-subinfo text-secondary">{Constants.primaryCoachTitle}</div>
                            </div>
                        </div>
                    )
                }
                <div className="main-content overflow-scroll flex-column px-3">
                    {
                        teamListData.map((teamList: TeamListComponentProps) => {
                            return <TeamListComponent key={teamList.listTitle} {...teamList} />;
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default TeamComponent;