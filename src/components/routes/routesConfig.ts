import { RouteConfigInterface } from './model';
import OnBoardingContainer from '../onBoarding/container/onBoardingContainer';
import AdvanceSearch from "../mentor/advanceSearch";

export enum RouteUrls {
    MENTOR = '/mentor',
    MENTOR_PROFILE = '/mentor-profile'
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
        path: RouteUrls.MENTOR_PROFILE,
        component: OnBoardingContainer,
        childRoutes: []
    },
]
