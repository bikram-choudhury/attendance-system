import React, { createContext, useCallback, useContext, useState } from 'react';
import { demoStudentList } from '../utils';

const context = createContext(null);

function StudentContext(props) {
    const [list, setList] = useState(demoStudentList);
    const updateList = useCallback((student) => {
        if (!student || Object.prototype.toString.call(student) !== '[object Object]') return;
        const isExist = list.find(item => {
            return item.contactNo === student.contactNo
        });
        if(isExist) return alert(`${student.name} - ${student.contactNo} is already exist`);

        setList(prev => {
            student.id = prev.length + 1;
            student.availableDays = [];
            return [...prev, student];
        });
    }, [list.length]);

    const updateStudent = useCallback((student) => {
        if (!student || Object.prototype.toString.call(student) !== '[object Object]') return;
        const studentObj = list.find(item => {
            return item.id === student.id
        });
        studentObj.availableDays = student.availableDays;
        setList(list);

    }, [list.length])

    const getStudentListPerCourse = courseId => {
        const students = list.filter(item => item.courseId === courseId);
        return students;
    }

    return (
        <context.Provider value={{ list, updateList, updateStudent, getStudentListPerCourse }}>
            {props.children}
        </context.Provider>
    )
}
const getStudentContext = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useContext(context)
};

export { StudentContext, getStudentContext }
