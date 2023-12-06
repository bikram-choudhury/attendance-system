import React, { createContext, useCallback, useContext, useState } from 'react';

const context = createContext(null);

function CourseContext(props) {
    const [list, setList] = useState([]);
    const updateList = useCallback((course) => {
        if (!course || Object.prototype.toString.call(course) !== '[object Object]') return;
        const isExist = list.find(item => {
            return item.name.toLowerCase() === course.name.toLowerCase() && item.batchType.toLowerCase() === course.batchType.toLowerCase()
        });
        if(isExist) return alert(`${course.name} - ${course.batchType} Batch is already exist`);

        setList(prev => [...prev, course]);
    }, [list.length]);

    return (
        <context.Provider value={{ list, updateList }}>
            {props.children}
        </context.Provider>
    )
}
const getCourseContext = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useContext(context)
};

export { CourseContext, getCourseContext }
