import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {connect} from 'react-redux';

import Header from '../Header/Header';
import Home from '../Home/Home';
import Customers from '../../containers/Customers/Customers';
import Customer from '../Customer/Customer';
import Receiver from '../../containers/Receiver/Receiver';
import Transfer from '../../containers/Transfer/Transfer';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Layout = (props) => {
    let result = Transfer;
    if(props.transfer){
        result = Home;
    }
    return (
        <div>
            <Header />
            <Switch>
                <Route path="/result" component={result} />
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

const mapStatetoProps = state => {
    return {
        transfer: state.transfer.transfer
    }
}
 
export default connect(mapStatetoProps)(Layout);