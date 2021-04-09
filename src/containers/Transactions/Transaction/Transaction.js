import React from 'react';
import classes from './Transaction.module.css';


const Transaction = (props) => {
    let border = null;
    if(props.transaction.state==="success"){
        border = {borderRight: "5px solid green"}
    }else if(props.transaction.state==="failure"){
        border = {borderRight: "5px solid red"}
    }
    return (
        <div className={classes.custRow1} style={border}>
            <p>{props.index}</p>
            <p>{props.transaction.sender}</p>
            <p>{props.transaction.receiver}</p>
            <p>{props.transaction.amount}</p>
            <p>{props.transaction.state}</p>
        </div>
    );
}
 
export default Transaction;