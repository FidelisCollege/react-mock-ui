import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { routes } from '../routesConfig';
import { RouteConfigInterface } from '../model';
import NavBarComponent from '../../navBar/components/navBarComponent';
import LeftNavComponent from "../../../common/components/left-nav";
import CommonLeftNav from "../../../common/components/commonLeftNav";
import LoginFormComponent from "../../login/login";

class Routes extends React.Component<any, any> {
    renderRoutes(routes: RouteConfigInterface[]) {
        let routeList: any[] = [];

        routes.forEach(({
            component: Component, path, childRoutes, ...rest
        }) => {
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
                />,
            );
            if (childRoutes && childRoutes.length > 0) {
                routeList = routeList.concat(this.renderRoutes(childRoutes));
            }
        });
        return routeList;
    }

    render() {
        return (
            <BrowserRouter>
                <NavBarComponent />
                <div className="main-content">
                    <CommonLeftNav/>
                    <Switch>{this.renderRoutes(routes)}</Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default Routes;
