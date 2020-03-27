import React, {Suspense} from 'react';
import {Router} from '@reach/router';
import './styles/Globalstyles.scss';

const NotFound = React.lazy(() => import('./pages/not-found'));
const Home = React.lazy(() => import('./pages/home'));
const SignUp = React.lazy(() => import('./pages/sign-up'));
const ForgotPassword = React.lazy(() => import('./pages/forgot-password'));

export const App = () => (

    <Suspense fallback={<div />}>
        <Router>
            <NotFound default />
            <Home path="/" />
            <SignUp path="/sign-up" />
            <ForgotPassword path="/forgot-password" />
        </Router>
    </Suspense>
)
