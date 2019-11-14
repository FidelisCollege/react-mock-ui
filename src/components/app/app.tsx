import * as React from 'react';
import { connect } from 'react-redux';
import '../../assets/styles/site2.scss';
import Routes from '../routes/components/Routes';
import { StateInterface } from '../../store';

class App extends React.Component<any, any> {
    render() {
        return (
            <React.Fragment>
                <Routes />
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state: StateInterface) => ({
});

export default connect(
    mapStateToProps,
    {},
)(App);
