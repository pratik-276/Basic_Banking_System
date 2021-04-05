import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from '../Header/Header';
import Home from '../Home/Home';
import Customers from '../../containers/Customers/Customers';

const Layout = () => {
    return (
        <div>
            <Header />
            <Switch>
                <Route path="/customers" component={Customers} />
                <Route path="/" component={Home} />
            </Switch>
        </div>
    );
}
 
export default Layout;