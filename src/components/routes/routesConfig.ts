import { RouteConfigInterface } from './model';
import OnBoardingContainer from '../onBoarding/container/onBoardingContainer';
import AdvanceSearch from "../mentor/advanceSearch";
import AddMentorSearch from "../mentor/addmentorSearch";
import Resources from "../mentor/resourceTab";

export enum RouteUrls {
    MENTOR = '/mentor',
    MENTOR_ADVANCE_SEARCH = '/advance-search',
    RESOURCES_SEARCH = '/resources'
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
        path: RouteUrls.RESOURCES_SEARCH,
        component: Resources,
        childRoutes: []
    }
]
