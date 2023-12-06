import React from 'react';
import styles from '../../styles/App';

export default function Filters() {
    return (
        <div className="row filter-row">
            <div className="col-sm-6 col-md-3">
                <div className="form-group form-focus">
                    <label className="focus-label">Employee Name</label>
                    <input type="text" className="form-control floating" />
                </div>
            </div>
            <div className="col-sm-6 col-md-3">
                <div className="form-group form-focus select-focus">
                    <label className="focus-label">Select Month</label>
                    <select style={styles['width-100']} className="select floating">
                        <option>-</option>
                        <option>Jan</option>
                        <option>Feb</option>
                        <option>Mar</option>
                        <option>Apr</option>
                        <option>May</option>
                        <option>Jun</option>
                        <option>Jul</option>
                        <option>Aug</option>
                        <option>Sep</option>
                        <option>Oct</option>
                        <option>Nov</option>
                        <option>Dec</option>
                    </select>
                </div>
            </div>
            <div className="col-sm-6 col-md-3">
                <div className="form-group form-focus select-focus">
                    <label className="focus-label">Select Year</label>
                    <select style={styles['width-100']} className="select floating">
                        <option>-</option>
                        <option>2017</option>
                        <option>2016</option>
                        <option>2015</option>
                        <option>2014</option>
                        <option>2013</option>
                    </select>
                </div>
            </div>
            <div className="col-sm-6 col-md-3">
                <a href="#" className="btn btn-success btn-block"> Search </a>
            </div>
        </div>
    )
}
