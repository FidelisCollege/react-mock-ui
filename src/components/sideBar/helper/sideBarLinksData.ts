import { SideBarNavlinkProps } from '../components/sideBarNavlinkComponent';
// import NotificationComponent from '../../notification/components/notificationComponent';
import CommunityComponent from '../components/communityComponent';
// import ProfileComponent from '../components/profileComponent';

export const sideBarLinksData: SideBarNavlinkProps[][] = [
    [
        {
            routeUrl: '/',
            iconClassName: 'icon-home',
            linkTitle: 'Home',
            className: 'left-nav',
        },
        {
            routeUrl: '/dashboard',
            iconClassName: 'icon-dashboard',
            linkTitle: 'Dashboard',
            className: 'left-nav',
        },
        {
            routeUrl: '/student',
            iconClassName: 'icon-user-group',
            linkTitle: 'Student',
            className: 'left-nav',
        },
    ],
    [
        // {
        //     routeUrl: '/notification',
        //     iconClassName: 'icon-notifications',
        //     linkTitle: 'Notification',
        //     className: 'left-nav',
        //     component: NotificationComponent,
        // },
        {
            routeUrl: '/message',
            iconClassName: 'icon-mail',
            linkTitle: 'Mail',
            className: 'left-nav',
        },
        {
            routeUrl: '/sms',
            iconClassName: 'icon-smartphone',
            linkTitle: 'Sms',
            className: 'left-nav',
        },
        {
            routeUrl: '/tools',
            iconClassName: 'icon-tools',
            linkTitle: 'Tools',
            className: 'left-nav',
        },
    ],
    [
        {
            routeUrl: '/community',
            iconClassName: 'icon-community',
            linkTitle: 'Community',
            className: 'left-nav flex-column',
            component: CommunityComponent,
        },
        {
            routeUrl: '/analytics',
            iconClassName: 'icon-bar-chart',
            linkTitle: 'Analytics',
            className: 'left-nav',
        },
        {
            routeUrl: '/help',
            iconClassName: 'icon-help',
            linkTitle: 'Help',
            className: 'left-nav',
        },
        // {
        //     routeUrl: '/profile',
        //     iconClassName: 'icon-user',
        //     linkTitle: 'Profile',
        //     className: 'left-nav d-none d-lg-block',
        //     component: ProfileComponent,
        // }
    ],
];