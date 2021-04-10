import React, { Component } from 'react';
import classes from './Transactions.module.css';

import {connect} from 'react-redux';
import Transaction from './Transaction/Transaction';


class Transactions extends Component {

    // componentWillMount() {
    //     this.props.getAllTransactions();      
    // }
    render() { 
        return (
            <div className="container py-5">
                <h1>Transactions</h1>
                <div className={classes.custRow}>
                    <p>Sl No</p>
                    <p>Sender</p>
                    <p>Receiver</p>
                    <p>Amount</p>
                    <p>State</p>
                </div>
                {Object.keys(this.props.transactions).map((transaction, index) => (
                    <Transaction transaction={this.props.transactions[transaction]} 
                            key={'_' + Math.random().toString(36).substr(2, 9)}
                            index={index+1} />
                ))}
            </div>
        );
    }
}

const mapStatetoProps = state => {
    return {
        transactions: state.transaction.transactions
    }
}

export default connect(mapStatetoProps)(Transactions);