import { addDays, getDateParts } from './utils.js'

export const showAllCutOffsForDate = (rules, date) => {
    const formattedDate = new Date(date)
    const dateData = getDateParts(formattedDate)

    const dayRules = rules.filter(function(rule) {
        return rule.dayNumber == dateData.pickDayNumber && rule.isAfterCutOff == 0 && rule.isActiveCourier == 1
    })

    let courierRules = []
    for(let i= 0; i < dayRules.length; i++){
        let cutOffDate = addDays(formattedDate, dayRules[i].daysToAdd)

        const cutOffTime = dayRules[i].courierCutOffTime.substring(0,8)
        const  cutOffMS = Number(cutOffTime.split(':')[0]) * 60 * 60 * 1000 + Number(cutOffTime.split(':')[1]) * 60 * 1000;
        cutOffDate.setTime(cutOffDate.getTime() + cutOffMS)

        const curentRule = {
            "courierCode":dayRules[i].courierCode,
            "dateToCutOff": cutOffDate
        }
        courierRules.push(curentRule)
    }

 return courierRules         
}

