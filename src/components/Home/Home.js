import React, { Component } from 'react';
import classes from './Home.module.css';

import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';

class Home extends Component {
    state = {  }
    componentWillMount() {
        this.props.getAllTransactions();      
    }
    render() {
        return (
            <div className={classes.spbg + " container align-items-center mt-5"}>
                <div className="row justify-content-center">
                    <p className={classes.headtext + " text-white font-weight-bold my-3"}>Account for a day</p>
                </div>
                <div className="row justify-content-center">
                    <p className={classes.headtext2 + " text-white font-weight-bold mb-2"}>Relation for a lifetime</p>
                </div>
                <div className="row justify-content-center">
                    <NavLink to="/customers" style={{
                        textDecoration: "none"
                    }}>
                        <p className={classes.fsbtn + " btn btn-success my-3 mx-2"}>
                            Make Transfer
                        </p>
                    </NavLink>
                    <NavLink to="/transfers" style={{
                        textDecoration: "none"
                    }}>
                        <p className={classes.fsbtn + " btn btn-primary my-3 mx-2"}>
                            View All Transfers
                        </p>
                    </NavLink>
                </div>
            </div>
        );
    }
}

const mapDispatchtoProps = dispatch => {
    return {
        getAllTransactions: () => dispatch(actions.getTransactions())
    }
}
 
export default connect(null, mapDispatchtoProps)(Home);