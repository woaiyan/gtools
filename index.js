let  {getMonthDayNumer,getMonthDays} =  require("./src/calendarHelper")
let date= new Date()
date.setMonth(2)
console.log(getMonthDays(date))