import React from "react"
import { Route, Redirect } from "react-router-dom"
import fetchToken from './fetchToken';

export function PrivateRoute(props) {
    const { component: Component, ...rest } = props;
    return (
        <Route
            {...rest}
            render={(props) => (
                fetchToken() ? <Component {...props} /> : <Redirect to="/login" />
            )}
        />
    )
}