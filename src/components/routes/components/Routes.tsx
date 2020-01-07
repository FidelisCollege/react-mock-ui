import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { routes } from '../routesConfig';
import { RouteConfigInterface } from '../model';

import NavBarComponent from '../../navBar/components/navBarComponent';
import SideBarComponent from '../../sideBar/components/sideBarComponent';
import LeftNavComponent from "../../../common/components/left-nav";
import CommonLeftNav from "../../../common/components/commonLeftNav";
import LoginFormComponent from "../../login/login";

export interface RoutesState {
    isOpenedSidebar: boolean;
}

class Routes extends React.Component<any, RoutesState> {
    constructor(props: any, state: RoutesState) {
        super(props, state);
        this.state = {
            isOpenedSidebar: false,
        }
    }

    onToggleSidebar = () => {
        const { isOpenedSidebar } = this.state;
        this.setState({ isOpenedSidebar: !isOpenedSidebar });
    }

    onCloseSideBar = () => {
        this.setState({ isOpenedSidebar: false });
    }

    onToggleOnboardingSteps = () => {

    }


    renderRoutes(routes: RouteConfigInterface[]) {
        let routeList: any[] = [];

        routes.forEach(({ component: Component, path, childRoutes, ...rest }) => {
            routeList.push(
                <Route
                    exact
                    key={path}
                    path={path}
                    render={(props) => {
                        const combinedProps = { ...rest, ...props };
                        return <Component {...combinedProps} />;
                    }}
                    {...rest}
                />
            );
            if (childRoutes && childRoutes.length > 0) {
                routeList = routeList.concat(this.renderRoutes(childRoutes));
            }
        });
        return routeList;
    }

    render() {
        const { isOpenedSidebar } = this.state;

        return (
            <BrowserRouter>
                <NavBarComponent />
                <div className="main-content">
                    <SideBarComponent isOpenedSidebar={isOpenedSidebar} toggleSidebar={this.onToggleSidebar} closeSideBar={this.onCloseSideBar} />
                    <CommonLeftNav/>
                    <Switch>{this.renderRoutes(routes)}</Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default Routes;
