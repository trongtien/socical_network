import React, { Suspense } from 'react';
import {BrowserRouter, Switch, Route } from "react-router-dom";
import { AppRouter } from './navigations';

const App: React.FunctionComponent = () =>{
    return (
        <Suspense fallback="">
            <BrowserRouter>
                <Switch>
                    {
                        AppRouter.map((router, index) => {
                            const routerComponent = router.component;
                            if (!routerComponent) return null;
                            return <Route
                                key={index}
                                exact={router.exact}
                                path={router.path}
                                component={routerComponent}                       
                            />
                        })
                    }
                </Switch>
            </BrowserRouter>
        </Suspense>
    );
}

export default App;
