const months = {
    jan: { name: 'January', days: 31 },
    feb: { name: 'February', days: 28 },
    mar: { name: 'March', days: 31 },
    apr: { name: 'April', days: 30 },
    may: { name: 'May', days: 31 },
}
const getMonths = (month) => {
    return months[month];
}
function formatDate(dt = '') {
    const date = dt ? new Date(dt): new Date();
    var month = '' + (date.getMonth() + 1),
        day = '' + date.getDate(),
        year = date.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}
function getQualificationName(qId) {
    const qualification = qualifications.find(q => q.id == qId);
    if(!qualification) return '';
    return qualification.name;
}

const qualifications = [
    { id: 1, name: 'B.Sc in General' },
    { id: 2, name: 'B.Sc in Computer Science' },
    { id: 3, name: 'B.Com' },
    { id: 4, name: 'B.Tech/B.E' },
    { id: 5, name: 'Health Care' },
];
const demoCourseList = [
    {
        id: 1,
        name: 'Frontend',
        description: 'FrontEnd = HTML + CSS + JS',
        duration: 30,
        batchType: 'weekdays'
    },
    {
        id: 2,
        name: 'Frontend',
        description: 'FrontEnd = HTML + CSS + JS',
        duration: 30,
        batchType: 'weekend'
    },
    {
        id: 3,
        name: 'Java',
        description: 'Core Java + Advance Java',
        duration: 60,
        batchType: 'weekdays'
    },
    {
        id: 4,
        name: 'Core Java',
        description: '',
        duration: 45,
        batchType: 'weekdays'
    }
];

const demoStudentList = [
    {
        "name": "Shankar",
        "contactNo": "+91 8756878858",
        "qualificationId": "4",
        "courseId": "1",
        "joiningDate": "2023-12-08",
        "id": 1,
        "availableDays": []
    },
    {
        "name": "Adnan",
        "contactNo": "+91 2462368326",
        "qualificationId": "1",
        "courseId": "1",
        "joiningDate": "2023-12-08",
        "id": 2,
        "availableDays": []
    },
    {
        "name": "Tufail",
        "contactNo": "+91 976967585",
        "qualificationId": "3",
        "courseId": "3",
        "joiningDate": "2023-12-08",
        "id": 3,
        "availableDays": []
    }
];
export {
    getMonths,
    formatDate,
    qualifications,
    demoCourseList,
    demoStudentList,
    getQualificationName
}