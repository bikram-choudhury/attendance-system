import React from 'react';
import { Link } from 'react-router-dom';
import { getStudentContext } from '../context/Student';
import { getQualificationName } from '../utils';
import { getCourseContext } from '../context/Course';

export default function StudentList() {
    const { getCourseType } = getCourseContext();
    const { list: studentList } = getStudentContext();
    return (
        <div className="content">
            <div className="row">
                <div className="col-lg-8">
                    <h4 className="page-title">Student List</h4>
                </div>
            </div>
            <div className="row">
                {
                    studentList.length ? (
                        <div className="table-responsive">
                            <table className="table table-striped mb-0">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Contact No</th>
                                        <th>Highest Qualification</th>
                                        <th>Enrolled Course</th>
                                        <th>Joining Date</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        studentList.map(st => (
                                            <tr key={st.id}>
                                                <td>{st.id}</td>
                                                <td>{st.name}</td>
                                                <td>{st.contactNo}</td>
                                                <td>{getQualificationName(st.qualificationId)}</td>
                                                <td>{getCourseType(st.courseId)}</td>
                                                <td>{st.joiningDate}</td>
                                                <td>
                                                    <button type="button" className="btn btn-primary">Edit</button>
                                                    <button type="button" className="btn btn-warning">Delete</button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className='col-12'>
                            <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                <strong>Empty List!</strong> Please click on following link to <Link to="/student/add" className="alert-link">add student</Link>.
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    )
}
