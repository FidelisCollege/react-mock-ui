import * as React from 'react';
import { connect } from 'react-redux';

import '../../assets/styles/site.scss';
// import '../../assets/styles/student/student.scss';
// import '../../assets/styles/coach/coach.scss';
import Routes from '../routes/components/Routes';
import { StateInterface, ApiCallInterface } from '../../store';
import { getUserAction } from './actions/getUserAction';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import * as api from '../../services/api';
import { apiConfig } from '../../config/apiConfig';
// import "react-confirm-alert/src/react-confirm-alert.css";

interface Props {
    user: ApiCallInterface;
    getUserAction: any;
    toastMessage?: any;
}

class App extends React.Component<Props, any> {
    componentDidMount() {
        const user = localStorage.getItem('user') && (localStorage.getItem('user') !== 'undefined') && JSON.parse(localStorage.getItem('user'));
        const primaryCommunity = localStorage.getItem('primaryCommunity') && (localStorage.getItem('primaryCommunity') !== 'undefined') && JSON.parse(localStorage.getItem('primaryCommunity'));
        const coach = localStorage.getItem('coach') && (localStorage.getItem('coach') !== 'undefined') && JSON.parse(localStorage.getItem('coach'));

        (!user || !primaryCommunity || !coach || user === 'undefined' || primaryCommunity === 'undefined' || coach === 'undefined') && this.props.getUserAction();
    }

    componentDidUpdate(prevProps: Props) {
        // const { toastMessage } = this.props;
        // if (toastMessage !== prevProps.toastMessage) {
        //     this.notify(toastMessage.success, toastMessage.message);
        // }

        // When the cookies are not present, getUserAction API call will yield GET_USER_SUCCESS with status 200 OK.
        // However the response data will be an empty string.
        if (
            (prevProps.user !== this.props.user) &&
            (this.props.user.data === '')
        ) {
            // Redirect to fidelis login page if cookies are not present.
            window.location.assign(api.getBase(apiConfig) + '/login');
        }
    }

    notify = (success: boolean, message: string) => {
        if (success) {
            return NotificationManager.info(message);
        } else {
            return NotificationManager.error(message);
        }
    }

    render() {
        const user = localStorage.getItem('user') && (localStorage.getItem('user') !== 'undefined') && JSON.parse(localStorage.getItem('user'));

        if (user) {
            return (
                <React.Fragment>
                    <Routes />
                    <NotificationContainer />
                </React.Fragment>
            );
        }
        return <></>;
    }
}

const mapStateToProps = (state: StateInterface) => ({
    user: state.user,
});

const mapDispatchToProps = {
    getUserAction
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);
