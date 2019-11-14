import * as React from 'react';
import { connect } from 'react-redux';
import {
    getCommunityAbout,
    clearCommunityAbout
} from './actions';
import {StateInterface, ApiCallInterface} from '../../store';
import {CommunitiesActionsInterface} from './actions';
import { withRouter } from 'react-router-dom';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import AboutCommuinityDetails from "./AboutCommunity";
import ActivityCommuinity from "./ActivityCommunity";
import RelatedCommunityDetails from "./relatedCommunityDetails";
import CommunityMembers from "./communityMembers";
import CommunityResources from "./communityResources";
import {CommunityDetailsNames, CommunityDetails} from "../community/helpers/helper";

export interface CommunityDetailsProps extends CommunitiesActionsInterface {
    communityAboutInfo : ApiCallInterface
}  

export interface CommunityDetailsState {
    activeTab: CommunityDetailsNames
}
class CommunityDetailsComponent extends React.Component<CommunityDetailsProps, CommunityDetailsState> {
    constructor(props: any, state: any) {
        super(props, state);
        this.state = {
            activeTab : CommunityDetailsNames.ABOUT
        }
    }
    componentDidMount() {
        const communityId = 1470
        this.props.getCommunityAbout(communityId);
    }

    toggle = tab => {
        if(this.state.activeTab !== tab) {
            this.setState({
                activeTab : tab
            })
        }
    }

    render() {
        debugger;
        console.log(this.props);
        const { communityAboutInfo } = this.props;
        const communityDetailsPane = CommunityDetails.map(value => {
            return (
                <NavItem key={value} className="mb-2 nav-items">
                <NavLink
                    className={"tab-buttons text-capitalize text-dark f-14" + (this.state.activeTab === value ? ' active ' : '')}
                    onClick={() => { this.toggle(value); }}
                >
                    {value}
                </NavLink>
            </NavItem>
            )
        });

        const communityDetailsPaneMob = CommunityDetails.map(value => {
            return (
                <NavItem key={value} className={value === 'About'?"mr-3":""}>
                <NavLink
                    className={"text-capitalize" + (this.state.activeTab === value ? ' active ' : '')}
                    onClick={() => { this.toggle(value); }}
                >
                    {value === 'Related Communities'?'Communities':value}
                </NavLink>
            </NavItem>
            )
        });

        return (
            <div className="community-details community-activity-detail h-100 overflow-hidden">
                <div className="d-lg-none d-flex flex-column mh-100">
                    <Nav pills className="d-flex justify-content-between align-items-center py-2 px-2 border-bottom community-activity-tabs overflow-auto d-lg-none">
                        <div className="d-flex">
                            {communityDetailsPaneMob}
                        </div>
                    </Nav>
                    <TabContent activeTab={this.state.activeTab} className="bg-white py-3 community-tab-content overflow-auto mh-100">
                        <TabPane tabId="About">
                            <AboutCommuinityDetails aboutCommuinityDetails={communityAboutInfo.data}/>
                        </TabPane>
                        <TabPane tabId="Activities" className="h-100">
                            <ActivityCommuinity/>
                        </TabPane>
                        <TabPane tabId="Members" className="h-100">
                            <CommunityMembers/>
                        </TabPane>
                        <TabPane tabId="Resources" className="h-100">
                            <CommunityResources/>
                        </TabPane>
                        <TabPane tabId="Related Communities" className="h-100">
                            <RelatedCommunityDetails/>
                        </TabPane>
                        <TabPane tabId="Calender" className="h-100">
                            <RelatedCommunityDetails/>
                        </TabPane>
                    </TabContent>
                </div>
                <div className="d-md-flex h-100 d-none">
                    <Nav className="d-none d-lg-flex flex-column align-content-start align-items-start p-2 card-shadow bg-white">
                        {communityDetailsPane}
                    </Nav>
                    <TabContent activeTab={this.state.activeTab} className="w-100 bg-white p-lg-3 py-3 community-tab-content overflow-auto">
                        <TabPane tabId="About">
                            <AboutCommuinityDetails/>
                        </TabPane>
                        <TabPane tabId="Activities" className="h-100">
                            <ActivityCommuinity/>
                        </TabPane>
                        <TabPane tabId="Members" className="h-100">
                            <CommunityMembers/>
                        </TabPane>
                        <TabPane tabId="Resources" className="h-100">
                            <CommunityResources/>
                        </TabPane>
                        <TabPane tabId="Related Communities" className="h-100">
                            <RelatedCommunityDetails/>
                        </TabPane>
                        <TabPane tabId="Calender" className="h-100">
                            <RelatedCommunityDetails/>
                        </TabPane>
                    </TabContent>
                </div>
    
            </div>
    
        );
    }
    
}

const mapStateToProps = (state: StateInterface) => ({
    communityAboutInfo: state.communityAbout,
});

const mapDispatchToProps = {
    getCommunityAbout,
    clearCommunityAbout
};

export default withRouter(connect<any, any, any>(
    mapStateToProps,
    mapDispatchToProps,
)(CommunityDetailsComponent));

