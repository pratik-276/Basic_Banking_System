import React, { Component } from 'react';
import classes from './Receiver.module.css';

import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import Customer from '../Customers/Customer/Customer';

class Receiver extends Component {
    state = {  }
    render() {
        const newUsers = this.props.users.filter(user => user.email!==this.props.sender.email);
        return (
            <div className="container py-5">
                <h1>Send money to....</h1>
                <div className={classes.custRow}>
                    <p>Sl No</p>
                    <p>User Name</p>
                    <p>Email</p>
                    <p>Mobile Number</p>
                    <p>Current Balance</p>
                </div>
                {newUsers.map((user, index) =>
                    <Customer user={user} 
                            key={'_' + Math.random().toString(36).substr(2, 9)}
                            index={index+1}
                            clik={() => this.props.addReceiver(user)}
                            link={"/transfer"} />
                )}
            </div>
        );
    }
}

const mapStatetoProps = state => {
    return {
        users: state.user.users,
        sender: state.transfer.sender
    }
}

const mapDispatchtoProps = dispatch => {
    return {
        addReceiver: (data) => dispatch(actions.addReceiver(data))
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Receiver);