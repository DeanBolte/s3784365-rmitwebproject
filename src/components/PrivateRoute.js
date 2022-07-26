import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('user')
            ? <Redirect to={{ pathname: '/forum', state: { from: props.location } }} />
            : <Redirect to={{ pathname: '/landing', state: { from: props.location } }} />
    )} />
)