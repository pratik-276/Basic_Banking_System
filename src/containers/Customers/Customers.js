import React, { Component } from 'react';
import classes from './Customers.module.css';

import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import Customer from './Customer/Customer';
import * as actionTypes from '../../store/actions/actionTypes';

class Customers extends Component {
    state = {  }

    componentWillMount() {
        this.props.getAllUsers();
        this.props.updateTransfer();       
    }
    render() { 
        return (
            <div className="container py-5">
                <h1>Send money from....</h1>
                <div className={classes.custRow}>
                    <p>Sl No</p>
                    <p>User Name</p>
                    <p>Email</p>
                    <p>Mobile Number</p>
                    <p>Current Balance</p>
                </div>
                {this.props.users.map((user, index) => (
                    <Customer user={user} 
                            key={'_' + Math.random().toString(36).substr(2, 9)}
                            index={index+1}
                            clik={() => this.props.addSender(user)}
                            link={"/customer/"+index} />
                ))}
            </div>
        );
    }
}

const mapStatetoProps = state => {
    return {
        users: state.user.users
    }
}

const mapDispatchtoProps = dispatch => {
    return {
        getAllUsers: () => dispatch(actions.getAllUsers()),
        addSender: (data) => dispatch(actions.addSender(data)),
        updateTransfer: () => dispatch({type: actionTypes.TRANSFER_COMPLETE})
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Customers);