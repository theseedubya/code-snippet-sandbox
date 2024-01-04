const currentDate = new Date();
const formattedDate = currentDate.toISOString();

console.log(formattedDate);

const date = new Date().toISOString()

console.log(date)

function getDateParts(date){
    const daysArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthsArray = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    return {
        "year": date.getFullYear(),
        "month": monthsArray[date.getMonth()],
        "date": date.getDate(),
        "day": daysArray[date.getDay()]
    }
}

console.log(getDateParts(new Date("2024-01-07")))