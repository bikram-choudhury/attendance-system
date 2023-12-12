import React, { useCallback, useState } from 'react'
import { getCourseContext } from '../context/Course';
import { formatDate } from '../utils';

const initialState = {
    name: '',
    description: '',
    duration: '',
    batchType: '',
    startDate: formatDate()
}
export default function AddCourse() {
    const batchTypeList = ['Weekdays', 'Weekends'];
    const [formValues, setFormValues] = useState(initialState);
    const { updateList } = getCourseContext();

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
                    <h4 className="page-title">Add Course</h4>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <div className="form-group">
                        <label>Course Name</label>
                        <input
                            className="form-control"
                            type="text"
                            name='name'
                            value={formValues.name}
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Course Description</label>
                        <textarea
                            cols="30"
                            rows="6"
                            className="form-control"
                            name='description'
                            value={formValues.description}
                            onChange={onChange}></textarea>
                    </div>
                    <div className="form-group">
                        <label>Course duration</label>
                        <input
                            className="form-control"
                            type="number"
                            placeholder='in days'
                            name='duration'
                            value={formValues.duration}
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Batch Type</label>
                        <div className='form-control'>
                            {
                                batchTypeList.map((type, idx) => {
                                    const typeInLower = type.toLowerCase();
                                    return (
                                        <div className="form-check form-check-inline">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="batchType"
                                                id={typeInLower}
                                                value={typeInLower}
                                                checked={typeInLower === formValues.batchType}
                                                onClick={onChange}
                                            />
                                            <label className="form-check-label" htmlFor={typeInLower}>
                                                {type}
                                            </label>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                    <div className="form-group">
                        <label>Course Starting Date</label>
                        <input
                            className="form-control"
                            type="date"
                            name='joiningDate'
                            value={formValues.startDate}
                            onChange={onChange}
                        />
                    </div>
                    <div className="m-t-20 text-center">
                        <button onClick={onSubmit} className="btn btn-primary submit-btn">Publish Course</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
