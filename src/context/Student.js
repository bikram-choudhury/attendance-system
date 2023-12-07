import React, { createContext, useCallback, useContext, useState } from 'react';

const context = createContext(null);

function StudentContext(props) {
    const [list, setList] = useState([]);
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

    return (
        <context.Provider value={{ list, updateList }}>
            {props.children}
        </context.Provider>
    )
}
const getStudentContext = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useContext(context)
};

export { StudentContext, getStudentContext }
