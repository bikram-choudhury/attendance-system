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
export {
    getMonths
}