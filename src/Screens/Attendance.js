import React from 'react'
import { getMonths } from '../utils';
import Filters from '../components/Filters';

export default function Attendance() {
    const month = 'jan';
    const { name: monthName, days: daysOfMonth } = getMonths(month);
    const studentList = [{
        name: 'Bikram Choudhury',
        present: [3, 6, 7]
    }]
    return (
        <div className="content">
            <div className="row">
                <div className="col-sm-12">
                    <h4 className="page-title">Attendance Sheet</h4>
                </div>
            </div>
            <Filters />
            <div className="row">
                <div className="col-lg-12">
                    <div className="table-responsive">
                        <table className="table table-striped custom-table mb-0">
                            <thead>
                                <tr>
                                    <th>Employee</th>
                                    {
                                        Array(daysOfMonth).fill('').map((v, idx) => <th key={idx}>{idx + 1}</th>)
                                    }
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    studentList.map((st, idx) => (
                                        <tr key={`student_${idx}`}>
                                            <td>{st.name}</td>
                                            {
                                                Array(daysOfMonth).fill('').map((v, idx) => (
                                                    <td key={`attd_${idx}`}>
                                                        {
                                                            st.present.includes(idx + 1) ? (
                                                                <i className="fa fa-check text-success"></i>
                                                            ) : (
                                                                <i className="fa fa-close text-danger"></i>
                                                            )
                                                        }
                                                    </td>
                                                ))
                                            }
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
