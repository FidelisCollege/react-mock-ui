import { RouteConfigInterface } from './model';
import OnBoardingContainer from '../onBoarding/container/onBoardingContainer';
import MentorDashboard from "../mentor/mentorDashboard";
import AddMentorSearch from "../mentor/addmentorSearch";
import CommunityDashboard from "../community/CommunityDashboard";
import ShowingAllActivity from "../community/ShowingAllActivities";

export enum RouteUrls {
    MENTOR = '/mentor',
    MENTOR_ADVANCE_SEARCH = '/advance-search',
    COMMUNITY = '/CommunityDashboard',
    SHOWING_ACTIVITIES  ='/all-activity'
}

export const routes: RouteConfigInterface[] = [
    {
        path: '/',
        component: OnBoardingContainer,
        childRoutes: [],
    },
    {
        path: RouteUrls.MENTOR,
        component: MentorDashboard,
        childRoutes: []
    },
    {
        path: RouteUrls.MENTOR_ADVANCE_SEARCH,
        component: AddMentorSearch,
        childRoutes: []
    },
    {
        path: RouteUrls.COMMUNITY,
        component: CommunityDashboard,
        childRoutes: []
    },
    {
        path: RouteUrls.SHOWING_ACTIVITIES,
        component: ShowingAllActivity,
        childRoutes: []
    },
]
