export function addDays(date, days) {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  export function getDateParts(date){
    const daysArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthsArray = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    return {
        "year": date.getFullYear(),
        "month": monthsArray[date.getMonth()],
        "date": date.getDate(),
        "day": daysArray[date.getDay()],
        "pickDayNumber": date.getDay() == 0 ? 7 : date.getDay()
    }
}

//Insert data function
export const populateTable = (table, data) => {
  //clear placeholder data
  table.innerHTML = '';
  //Create header row
  let tr = document.createElement('tr');
  let headers = ["courierCode","dateCutOff"]
  headers.forEach((key) => {
    let th = document.createElement('th')
    th.innerHTML = key
    tr.appendChild(th);
  })
  table.appendChild(tr);
  //set headers to keys in data to allow iteration to generate rows
  headers = Object.keys(data[0]);
  //insert data into table body
  for (let i = 0; i < data.length; i++) {
    //create a new row
    tr = document.createElement('tr');
    //iterate over data
    headers.forEach((key) => {
      //create table data inside of row
      let td = document.createElement('td');
      //add header as a class for CSS
      td.classList.add(key)
      //set table data to current value set in loop
      td.innerHTML = data[i][key]
      //add data to row
      tr.appendChild(td);
    });
    table.appendChild(tr);
  }
}