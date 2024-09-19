import { dateRules }  from './services/dateRules.js';
import { showAllCutOffsForDate } from './services/showAllCutOffsForDates.js'
import { populateTable } from './services/utils.js';

addEventListener("submit", (event) => {
  event.preventDefault();
  const date = document.getElementById("pickDate").value
  const cutOffsForDate = showAllCutOffsForDate(dateRules,date)

   //generate html for remaining table
  const cutOffTable = document.querySelector(".cut-off-table");
  populateTable(cutOffTable, cutOffsForDate,);

    return true
})


//console.log(showAllCutOffsForDate(dateRules,"2024-01-04"))