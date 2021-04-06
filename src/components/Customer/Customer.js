import React from 'react';
import classes from './Customer.module.css';

import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

const Customer = (props) => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <img className={classes.custImg} 
                    alt="profile" 
                    src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" />
            </div>
            <div className={classes.custDetails}>
                <div className={classes.custElement + " row justify-content-center"}>
                    <h3>UserName</h3>
                    <p>{props.sender.username}</p>
                </div>
                <div className={classes.custElement}>
                    <h3>Email</h3>
                    <p>{props.sender.email}</p>
                </div>
                <div className={classes.custElement + " row justify-content-center"}>
                    <h3>Mobile Number</h3>
                    <p>{props.sender.mobileNumber}</p>
                </div>
                <div className={classes.custElement + " row justify-content-center"}>
                    <h3>Current Balance</h3>
                    <p>{props.sender.currentBalance}</p>
                </div>
            </div>
            <div className={classes.btnGroup}>
                <NavLink to="/receiver">
                    <button className="btn btn-primary">Proceed</button>
                </NavLink>
                <NavLink to="/customers">
                    <button className="btn btn-danger">Go Back</button>
                </NavLink>
            </div>
        </div>
    );
}

const mapStatetoProps = state => {
    return {
        sender: state.transfer.sender
    }
}
 
export default connect(mapStatetoProps)(Customer);