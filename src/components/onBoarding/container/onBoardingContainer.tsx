import * as React from 'react';
import OnboardNav from "./onboardNav";
import {OnBoardingTabs} from "../Models/onBoardingModel";
import ProfileImageComponent from "./profileImageComponent";
import WelcomeComponent from "./welcomeScreenComponent";
import OnboardNavResponsive from "./leftNavResponsive";

export interface OnBoardingState {
    activeTabName: OnBoardingTabs;
}

class OnBoardingContainer extends React.Component<any, OnBoardingState> {
    constructor(props: any, state: any) {
        super(props, state);
        this.state = {
            activeTabName : OnBoardingTabs.PROFILE
        }
    }

    onTabClick = (tabName: OnBoardingTabs) => {
        this.setState({activeTabName : tabName});
    }

    render() {
        const {activeTabName} = this.state;

        return (
            <main className="d-flex flex-grow-1 onboard-wrapper">
                <OnboardNav onTabClick={this.onTabClick} activeTab={this.state.activeTabName}/>
                <OnboardNavResponsive onTabClick={this.onTabClick} activeTab={this.state.activeTabName}/>
                <section className="flex-grow-1 bg-white">
                    {activeTabName === OnBoardingTabs.WELCOME && <WelcomeComponent/>}
                    {activeTabName === OnBoardingTabs.PROFILE && <ProfileImageComponent/>}

                </section>
            </main>
        );
    }
}

export default OnBoardingContainer;
