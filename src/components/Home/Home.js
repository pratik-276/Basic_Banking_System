import React, { Component } from 'react';
import classes from './Home.module.css';

import {NavLink} from 'react-router-dom';

class Home extends Component {
    state = {  }
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
                        <p className={classes.fsbtn + " btn btn-success my-3 py-3 px-4"}>
                            View All Customers
                        </p>
                    </NavLink>
                </div>
            </div>
        );
    }
}
 
export default Home;