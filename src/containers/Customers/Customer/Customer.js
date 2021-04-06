import React from 'react';
import classes from './Customer.module.css';

import {NavLink} from 'react-router-dom';
import * as actions from '../../../store/actions/index';
import {connect} from 'react-redux';

const Customer = (props) => {
    const link = "/customer/"+(props.index-1);
    return (
        <NavLink to={link} onClick={() => props.addSender(props.user)} className={classes.custRow1}>
            <p>{props.index}</p>
            <p>{props.user.username}</p>
            <p>{props.user.email}</p>
            <p>{props.user.mobileNumber}</p>
            <p>{props.user.currentBalance}</p>
        </NavLink>
    );
}

const mapDispatchtoProps = dispatch => {
    return {
        addSender: (data) => dispatch(actions.addSender(data))
    }
}
 
export default connect(null, mapDispatchtoProps)(Customer);