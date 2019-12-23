import * as React from 'react';

export interface TeamListItem {
    id: number;
    avatar: { picSmall: string };
    fullName: string;
    badgeValue?: number;
}

export interface TeamListComponentProps {
    listTitle: string;
    list: TeamListItem[];
}

const TeamListComponent = (props: TeamListComponentProps) => {
    const { listTitle, list } = props;

    return (
        <section>
            <div className="list-team-item-head">
                <span className="text-primary title text-capitalize">{listTitle}</span>
                <a href="#"><i className="icon-setting-manage list-setting-icon" /></a></div>
            {
                list && list.length &&
                <ul className="list-unstyled">
                    {
                        list.map((listItem: TeamListItem, index: number) => {
                            return (
                                <li key={listItem.id} className="list-team-member person">
                                    <a href="#">
                                        <img
                                            className="rounded-circle person-img mr-2 border"
                                            src={listItem.avatar.picSmall ? listItem.avatar.picSmall : 'images/app_community_default.png'}
                                            alt=""
                                        />
                                    </a>
                                    <div className="person-info">
                                        <span className="person-name">{listItem.fullName}</span>
                                        {listItem.badgeValue ? <span className="badge ml-3 text-white">{listItem.badgeValue}</span> : <></>}
                                    </div>
                                </li>
                            );
                        })
                    }
                    <div className="text-right f-14">
                        <a className="text-primary text-capitalize" href="#">view all</a>
                    </div>
                </ul>
            }
        </section>
    );
}

export default TeamListComponent;