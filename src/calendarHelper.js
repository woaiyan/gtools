const CURRENT_MONTH = 0;
const NEXT_MONTH = 1;
const PRE_MONTH = -1
const WEEK_DAYS = 7;
/**
 * 获取每月总共天数
 * @param date 时间
 * @param offset 偏移月数
 * @returns {number} 天数
 */
function getMonthDayNumer(date = new Date(), offset = 0){

    let _date = new Date(date);

    let _month = _date.getMonth();

    _date.setMonth(_month + 1 + offset);

    _date.setDate(0);

    return _date.getDate();

}

/**
 *  获取date所处月的日历显示数据
 * @param date 需要获取数据的date
 * @returns {Array} 单页日历需要显示的日期，包括多余的上月和下月数据
 */
function getMonthDays(date = new Date()){

    let _date = new Date(date)

    let monthDayNum = getMonthDayNumer(_date);

    let lastMonthDayNum = getMonthDayNumer(_date, 1);

    let days = [];

    let monthStartDay;

    let monthEndDay;

    let nextMonthNeedDays;

    _date.setDate(1);

    monthStartDay = _date.getDay();

    _date.setDate(monthDayNum);

    monthEndDay = _date.getDay();

    nextMonthNeedDays = WEEK_DAYS - monthEndDay -1;

    while (nextMonthNeedDays) {

        days.push({
            day: nextMonthNeedDays,
            state: NEXT_MONTH
        })

        nextMonthNeedDays--;

    }
    while (monthDayNum) {

        days.push({
            day: monthDayNum,
            state: CURRENT_MONTH
        })

        monthDayNum--;

    }
    while (monthStartDay) {

        days.push({
            day: lastMonthDayNum,
            state: CURRENT_MONTH
        })

        monthStartDay--;

        lastMonthDayNum--;

    }

    days.reverse();

    return days;

}

module.exports={
    getMonthDayNumer,
    getMonthDays
}