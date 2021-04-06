import React, { Component } from 'react';
import classes from './Customers.module.css';

import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import Customer from './Customer/Customer';

class Customers extends Component {
    state = {  }

    componentWillMount() {
        this.props.getAllUsers();        
    }
    render() { 
        return (
            <div className="container my-5">
                <div className={classes.custRow}>
                    <p>Sl No</p>
                    <p>UserName</p>
                    <p>Email</p>
                    <p>Mobile Number</p>
                    <p>Current Balance</p>
                </div>
                {this.props.users.map((user, index) => (
                    <Customer user={user} 
                            key={'_' + Math.random().toString(36).substr(2, 9)}
                            index={index+1} />
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