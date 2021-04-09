import React from 'react';
import classes from './Result.module.css';

import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

const Result = (props) => {
    return (
        <div className={classes.result + " container"}>
            <img className="my-3" alt="success" src={props.transfer ? "/success1.jpg" : "/fail.jpg"} />
            <h3>Transfer {props.transfer ? "Successful" : "Failed"}</h3>
            <NavLink to="/">
                <button className="btn btn-danger">Go back to Home</button>
            </NavLink>
        </div>
    );
}

const mapStatetoProps = state => {
    return {
        transfer: state.transfer.transfer
    }
}
 
export default connect(mapStatetoProps)(Result);