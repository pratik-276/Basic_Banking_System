import React, { Component } from 'react';
import classes from './Customers.module.css';

import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';

class Customers extends Component {
    state = {  }

    componentWillMount() {
        this.props.getAllUsers();        
    }
    render() { 
        return (
            <div className="container mt-5">
                <div className={classes.custRow + " row"}>
                    <p>Sl No</p>
                    <p>UserName</p>
                    <p>Email</p>
                    <p>Mobile Number</p>
                    <p>Current Balance</p>
                </div>
                {this.props.users.map((user, index) => (
                    <div className={classes.custRow1 + " row"}>
                        <p>{index}</p>
                        <p>{user.username}</p>
                        <p>{user.email}</p>
                        <p>{user.mobileNumber}</p>
                        <p>{user.currentBalance}</p>
                    </div>
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
        getAllUsers: () => dispatch(actions.getAllUsers())
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Customers);