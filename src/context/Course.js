import React, { createContext, useCallback, useContext, useState } from 'react';
import { demoCourseList } from '../utils';

const context = createContext(null);

function CourseContext(props) {
    const [list, setList] = useState(demoCourseList);
    const updateList = useCallback((course) => {
        if (!course || Object.prototype.toString.call(course) !== '[object Object]') return;
        const isExist = list.find(item => {
            return item.name.toLowerCase() === course.name.toLowerCase() && item.batchType.toLowerCase() === course.batchType.toLowerCase()
        });
        if(isExist) return alert(`${course.name} - ${course.batchType} Batch is already exist`);

        setList(prev => {
            course.id = prev.length + 1;
            return [...prev, course];
        });
    }, [list.length]);
    const getCourseType = cId => {
        const course = list.find(c => c.id == cId);
        if(!course) return '';
        return `${course.name} - ${course.batchType}`;
    }

    return (
        <context.Provider value={{ list, updateList, getCourseType }}>
            {props.children}
        </context.Provider>
    )
}
const getCourseContext = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useContext(context)
};

export { CourseContext, getCourseContext }
