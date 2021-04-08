import React from 'react';
import classes from './Transaction.module.css';


const Transaction = (props) => {
    return (
        <div className={classes.custRow1}>
            <p>{props.index}</p>
            <p>{props.transaction.sender}</p>
            <p>{props.transaction.receiver}</p>
            <p>{props.transaction.amount}</p>
        </div>
    );
}
 
export default Transaction;