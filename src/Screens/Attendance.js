import React, { useState } from 'react';
import Filters from '../components/Filters';

const initialState = {
    course: null,
    students: null
}
export default function Attendance() {
    const [filter, setFilter] = useState(initialState);
    const { students, course } = filter;
    const daysOfMonth = course?.duration ?? 0;

    return (
        <div className="content">
            <div className="row">
                <div className="col-sm-12">
                    <h4 className="page-title">Attendance Sheet</h4>
                </div>
            </div>
            <Filters updateFilter={setFilter} />
            <div className="row">
                <div className="col-lg-12">
                    <div className="table-responsive">
                        <table className="table table-striped custom-table mb-0">
                            <thead>
                                <tr>
                                    <th>Student</th>
                                    {
                                        Array(daysOfMonth).fill('').map((v, idx) => <th key={idx}>{idx + 1}</th>)
                                    }
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    (students ?? []).map((st, idx) => (
                                        <tr key={`student_${idx}`}>
                                            <td>{st.name}</td>
                                            {
                                                Array(daysOfMonth).fill('').map((v, idx) => (
                                                    <td key={`attd_${idx}`}>
                                                        {
                                                            st.availableDays.includes(idx + 1) ? (
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
