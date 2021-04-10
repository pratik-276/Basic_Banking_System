import React, { Component } from 'react';
import classes from './Transfer.module.css';

import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import * as actions from '../../store/actions/index';
import * as actionTypes from '../../store/actions/actionTypes';

import {toast} from 'react-toastify';

class Transfer extends Component {
    state = {
        amount: ""
    }
    onAmountChange = (event) => {
        this.setState({amount: event.target.value});
    }
    balanceUpdates = () => {
        const pattern = /^\d+$/;

        if(!pattern.test(this.state.amount)){
            toast.error("Invalid amount");
            const tData = {
                sender: this.props.sender.email,
                receiver: this.props.receiver.email,
                amount: parseInt(this.state.amount),
                state: "failure"
            }
            this.props.addTransaction(tData);
        }else if(this.state.amount > this.props.sender.currentBalance){
            toast.error("Transfer amount larger than sender balance");
            const tData = {
                sender: this.props.sender.email,
                receiver: this.props.receiver.email,
                amount: parseInt(this.state.amount),
                state: "failure"
            }
            this.props.addTransaction(tData);
        }else{
            this.props.updateTransfer();
            const sData = {
                ...this.props.sender,
                currentBalance: this.props.sender.currentBalance - this.state.amount
            };
            const rData = {
                ...this.props.receiver,
                currentBalance: parseInt(this.props.receiver.currentBalance) + parseInt(this.state.amount)
            }
            this.props.updateBalances(sData, rData);
            const tData = {
                sender: sData.email,
                receiver: rData.email,
                amount: parseInt(this.state.amount),
                state: "success"
            }
            this.props.addTransaction(tData);
        }
    }
    render() { 
        return (
            <div className="container mt-5">
                <div className={classes.outerForm + " shadow bg-white py-4"}>
                    <h1>Transfer Form</h1>
                    <form className={classes.transferForm}>
                        <div className={classes.formRow}>
                            <input type="text" disabled name="sender" 
                            value={"Sender :: "+this.props.sender.username} />
                            <input type="text" disabled
                            value={"Balance :: "+this.props.sender.currentBalance} />
                        </div>
                        <div className={classes.formRow}>
                            <input type="text" disabled name="receiver" 
                            value={"Receiver :: "+this.props.receiver.username} />
                            <input type="text" disabled
                            value={"Balance :: "+this.props.receiver.currentBalance} />
                        </div>
                        <input type="text" placeholder="Transfer Amount"
                                value={this.state.amount}
                                onChange={this.onAmountChange}
                                className={classes.amountInput} />
                        <div className={classes.btnGroup}>
                            <NavLink to="/result">
                                <button onClick={this.balanceUpdates} className="btn btn-success">Transfer</button>
                            </NavLink>
                            <NavLink to="/">
                                <button className="btn btn-danger">Cancel</button>
                            </NavLink>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStatetoProps = state => {
    return {
        sender: state.transfer.sender,
        receiver: state.transfer.receiver
    }
}

const mapDispatchtoProps = dispatch => {
    return {
        updateBalances: (sd, rd) => dispatch(actions.updateBalances(sd, rd)),
        updateTransfer: () => dispatch({type: actionTypes.TRANSFER_SUCCESS}),
        addTransaction: (data) => dispatch(actions.addTransaction(data))
    }
}
 
export default connect(mapStatetoProps, mapDispatchtoProps)(Transfer);