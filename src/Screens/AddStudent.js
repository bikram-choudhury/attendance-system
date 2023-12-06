import React from 'react'
import { getCourseContext } from '../context/Course'

export default function AddStudent() {
    const { list: courseList } = getCourseContext();
    return (
        <div className="content">
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <h4 className="page-title">Add Student</h4>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <form>
                        <div className="form-group">
                            <label>Student Name</label>
                            <input className="form-control" type="text" />
                        </div>
                        <div className="form-group">
                            <label>Highest Qualification</label>
                            <select className="form-control">
                                <option>Please select</option>
                                <option>B.Sc in General</option>
                                <option>B.Sc in Computer Science</option>
                                <option>B.Tech</option>
                                <option>B.E</option>
                                <option>Health Care</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Enrolled Course</label>
                            <select className="form-control">
                                <option value="">Please select</option>
                                {
                                    courseList.map((course, idx) => {
                                        const key = course.name.toLowerCase();
                                        return (
                                            <option key={key} value={key}>{course.name}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Course Starting / Joining Date</label>
                            <input className="form-control" type="date" />
                        </div>
                        <div className="m-t-20 text-center">
                            <button className="btn btn-primary submit-btn">Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
