import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../Header/Header';
import Home from '../Home/Home';
import Customers from '../../containers/Customers/Customers';
import Customer from '../Customer/Customer';
import Receiver from '../../containers/Receiver/Receiver';
import Transfer from '../../containers/Transfer/Transfer';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Result from '../Result/Result';
import Transactions from '../../containers/Transactions/Transactions';

const Layout = (props) => {
    return (
        <div>
            <Header />
            <Switch>
                <Route path="/transfers" component={Transactions} />
                <Route path="/result" component={Result} />
                <Route path="/transfer" component={Transfer} />
                <Route path="/receiver" component={Receiver} />
                <Route path="/customer/:id" component={Customer} />
                <Route path="/customers" component={Customers} />
                <Route path="/" component={Home} />
            </Switch>
            <ToastContainer />
        </div>
    );
}
 
export default Layout;