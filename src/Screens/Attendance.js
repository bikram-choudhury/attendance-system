import React, { useCallback, useEffect, useState } from 'react';
import Filters from '../components/Filters';
import { getDayDiff } from '../utils';
import { getStudentContext } from '../context/Student';

const initialState = {
    course: null,
    students: null
}
export default function Attendance() {
    const { list, updateStudent } = getStudentContext();
    const [filter, setFilter] = useState(initialState);
    const { students, course } = filter;
    const daysOfMonth = course?.duration ?? 0;
    const dayDiff = getDayDiff(course?.startDate ?? '');
    
    const handleAvailabilityCheckbox = (student, dayCount) => (event) => {
        const isChecked = event.target.checked;
        if (isChecked) {
            student.availableDays.push(dayCount);
        } else {
            student.availableDays.pop();
        }
        updateStudent(student)
    }
    const getAvailabilityStatus = useCallback((student, dayCount) => {
        if (dayDiff.isFuture) {
            return (
                <i className="fa fa-exclamation-circle text-warning"></i>
            );
        }
        if (dayDiff.days === dayCount) {
            return (
                <>
                    <input
                        type='checkbox'
                        checked={student.availableDays.includes(dayCount)}
                        onChange={handleAvailabilityCheckbox(student, dayCount)}
                    />
                    {/* <input type='checkbox' onChange={(e) => handleAvailabilityCheckbox(e, student, dayCount)} /> */}
                </>
            )
        }
        if (dayDiff.days > dayCount) {
            if (student.availableDays.includes(dayCount)) {
                return (
                    <i className="fa fa-check text-success"></i>
                );
            } else {
                return (
                    <i className="fa fa-close text-danger"></i>
                );
            }
        } else {
            return (
                <i className="fa fa-exclamation-circle text-warning"></i>
            )
        }
    }, [dayDiff]);
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
                                                Array(daysOfMonth).fill('').map((v, idx) => {
                                                    const dayCount = idx + 1;
                                                    return (
                                                        <td key={`attd_${dayCount}`}>
                                                            {getAvailabilityStatus(st, dayCount)}
                                                        </td>
                                                    )
                                                })
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
