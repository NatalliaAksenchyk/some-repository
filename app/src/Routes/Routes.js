import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { ROUTES } from './routesName';


import HomePageContainer from '../pages/HomePages/conteiners/HomePageContainer';
import CounterPageContainer from '../pages/CountsPage/container/CounterPageContainer';



const Routes = () => {
    return (
        <Switch>
            <Route exact path={ROUTES.HOME_PAGE} component={HomePageContainer} />
            <Route exact path={ROUTES.COUNTER_PAGE} component={CounterPageContainer} />
        </Switch>
    );
};

export default Routes;