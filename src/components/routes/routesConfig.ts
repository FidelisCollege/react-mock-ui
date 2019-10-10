import { RouteConfigInterface } from './model';
import OnBoardingContainer from '../onBoarding/container/onBoardingContainer';
import AdvanceSearch from "../mentor/advanceSearch";
import AddMentorSearch from "../mentor/addmentorSearch";
import Resources from "../mentor/resourceTab";
import CommunityDashboard from "../community/CommunityDashboard";

export enum RouteUrls {
    MENTOR = '/mentor',
    MENTOR_ADVANCE_SEARCH = '/advance-search',
    COMMUNITY_DASHBOARD = '/community'
}

export const routes: RouteConfigInterface[] = [
    {
        path: '/',
        component: OnBoardingContainer,
        childRoutes: [],
    },
    {
        path: RouteUrls.MENTOR,
        component: AdvanceSearch,
        childRoutes: []
    },
    {
        path: RouteUrls.MENTOR_ADVANCE_SEARCH,
        component: AddMentorSearch,
        childRoutes: []
    },
    {
        path: RouteUrls.COMMUNITY_DASHBOARD,
        component: CommunityDashboard,
        childRoutes: []
    }
]
