import React, { useCallback, useState } from 'react';
import styles from '../../styles/App';
import { getCourseContext } from '../../context/Course';
import { getStudentContext } from '../../context/Student';

export default function Filters({ updateFilter }) {
    
    const [studentList, setStudentList] = useState([]);

    const { list: courseList } = getCourseContext();
    const { getStudentListPerCourse } = getStudentContext();

    const onCourseSelect = useCallback((evnt) => {
        const courseId = Number(evnt.target.value || 0);
        const selectedCourse = courseList.find(c => c.id === courseId);
        const students = getStudentListPerCourse(courseId.toString());
        setStudentList(students);
        updateFilter({
            course: selectedCourse,
            students
        })
    }, []);

    const onStudentSelect = useCallback((evnt) => {
        const selectedStudentId = Number(evnt.target.value || 0);
        const selectedstudents = studentList.filter(st => st.id === selectedStudentId);
        updateFilter(prev => {
            return {
                ...prev,
                students: selectedstudents
            }
        })
    }, [studentList.length]);

    return (
        <div className="row filter-row">
            <div className="col-sm-6 col-md-3">
                <label className="focus-label">Select Course</label>
                <div className="form-group form-focus">
                    <select style={styles['width-100']} className="select" onChange={onCourseSelect}>
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
            </div>
            {
                studentList.length ? (
                    <div className="col-sm-6 col-md-3">
                        <label className="focus-label">Select Student</label>
                        <div className="form-group form-focus">
                            <select style={styles['width-100']} className="select" onChange={onStudentSelect}>
                                <option value="">Please select</option>
                                {
                                    studentList.map(st => {
                                        return (
                                            <option key={st.id} value={st.id}>
                                                {st.name} - {st.contactNo}
                                            </option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    </div>
                ) : null
            }
        </div>
    )
}
