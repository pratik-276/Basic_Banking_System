import React, { Component } from 'react';
import classes from './Customers.module.css';

class Customers extends Component {
    state = {  }

    componentDidMount() {
        
    }
    render() { 
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className={classes.headText + " col-lg-2"}>
                        Sl No
                    </div>
                    <div className={classes.headText + " col-lg-3"}>
                        UserName
                    </div>
                    <div className={classes.headText + " col-lg-4"}>
                        Email
                    </div>
                    <div className={classes.headText + " col-lg-3"}>
                        Mobile Number
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Customers;