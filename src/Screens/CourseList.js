import React from 'react';
import { getCourseContext } from '../context/Course';
import { Link } from 'react-router-dom';

export default function CourseList() {
    const { list: courseList } = getCourseContext();
    return (
        <div className="content">
            <div className="row">
                <div className="col-lg-8">
                    <h4 className="page-title">Course List</h4>
                </div>
            </div>
            <div className="row">
                {
                    courseList.length ? (
                        <div class="table-responsive">
                            <table class="table table-striped mb-0">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th>Duration</th>
                                        <th>Type</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        courseList.map(course => (
                                            <tr key={course.name.toLowerCase()}>
                                                <td>{course.name}</td>
                                                <td>{course.description}</td>
                                                <td>{course.duration}</td>
                                                <td>{course.batchType.toUpperCase()}</td>
                                                <td>
                                                    <button type="button" class="btn btn-primary">Edit</button>
                                                    <button type="button" class="btn btn-warning">Delete</button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className='col-12'>
                            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                                <strong>Empty List!</strong> Please click on following link to <Link to="/course/add" class="alert-link">create course</Link>.
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    )
}
