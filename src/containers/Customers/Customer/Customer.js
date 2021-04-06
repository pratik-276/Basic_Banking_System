import React from 'react';
import classes from './Customer.module.css';

const Customer = (props) => {
    return (
        <div className={classes.custRow1}>
            <p>{props.index}</p>
            <p>{props.user.username}</p>
            <p>{props.user.email}</p>
            <p>{props.user.mobileNumber}</p>
            <p>{props.user.currentBalance}</p>
        </div>
    );
}
 
export default Customer;