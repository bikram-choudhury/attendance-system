import React, { useCallback, useState } from 'react';
import { getCourseContext } from '../context/Course';
import { formatDate, qualifications } from '../utils';
import { getStudentContext } from '../context/Student';

const initialState = {
    name: '',
    contactNo: '',
    qualificationId: '',
    courseId: '',
    joiningDate: formatDate()
}
export default function AddStudent() {
    const [formValues, setFormValues] = useState(initialState);
    const { list: courseList } = getCourseContext();
    const { updateList } = getStudentContext();

    const onChange = evnt => {
        setFormValues(prev => {
            return {
                ...prev,
                [evnt.target.name]: evnt.target.value
            }
        })
    }
    const onSubmit = useCallback(() => {
        console.log(formValues);
        updateList(formValues);
        setFormValues(initialState);
    }, [formValues]);
    return (
        <div className="content">
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <h4 className="page-title">Add Student</h4>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-8 offset-lg-2">

                    <div className="form-group">
                        <label>Student Name</label>
                        <input
                            className="form-control"
                            type="text"
                            name='name'
                            value={formValues.name}
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Contact Number</label>
                        <input
                            className="form-control"
                            type="text"
                            name='contactNo'
                            value={formValues.contactNo}
                            placeholder='+91 xxxxxxxxxx'
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Highest Qualification</label>
                        <select
                        className="form-control"
                        name='qualificationId'
                        value={formValues.qualificationId}
                        onChange={onChange}
                        >
                            <option>Please select</option>
                            {
                                qualifications.map(q => (
                                    <option
                                        key={q.id}
                                        value={q.id}
                                    >{q.name}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Enrolled Course</label>
                        <select className="form-control" name='courseId' value={formValues.courseId} onChange={onChange}>
                            <option value="">Please select</option>
                            {
                                courseList.map(course => {
                                    return (
                                        <option
                                            key={course.id}
                                            value={course.id}
                                        >{course.name} - {course.batchType.toUpperCase()}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    {/* <div className="form-group">
                        <label>Course Starting / Joining Date</label>
                        <input
                            className="form-control"
                            type="date"
                            name='joiningDate'
                            value={formValues.joiningDate}
                            onChange={onChange}
                        />
                    </div> */}
                    <div className="m-t-20 text-center">
                        <button onClick={onSubmit} className="btn btn-primary submit-btn">Create</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
