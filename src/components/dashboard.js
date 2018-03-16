import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import QuestionForm from './question-form';
import './dashboard.css';
export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }

    render() {
        return (
            <div className="dashboard">
                <div className="dashboard-username">
                :git-better-username: {this.props.username}$
                </div>
                <div className="dashboard-name">:git-better-name: {this.props.name}$</div>
                <div className="dashboard-protected-data">
                    <QuestionForm />
                </div>
                
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        protectedData: state.protectedData.data.answer
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
