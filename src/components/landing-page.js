import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import LoginForm from './login-form';

export function LandingPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className="home">
            <p>:git-better$ git practice-commands</p>
            <p>:git-better$ git better</p>
            <LoginForm />
            <Link to="/register">Register</Link>
            <p className='demo'>:demo-username$ demo</p>
            <p>:demo-password$ git-better</p>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
