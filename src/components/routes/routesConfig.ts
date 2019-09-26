import { RouteConfigInterface } from './model';
import OnBoardingContainer from '../onBoarding/container/onBoardingContainer';
import AdvanceSearch from "../mentor/advanceSearch";
import AddMentorSearch from "../mentor/addmentorSearch";

export enum RouteUrls {
    MENTOR = '/mentor',
    MENTOR_ADVANCE_SEARCH = '/advance-search'
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
]
