export function getDateDiff(time, isTimestamp) {

    let dateTimeStamp = isTimestamp
        ? getDateTimeStamp(time)
        : time;

    const minute = 1000 * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const halfamonth = day * 15;
    const month = day * 30;
    const year = day * 365;
    let now = new Date().getTime();
    let diffValue = now - dateTimeStamp;
    let result = '';

    if (diffValue < 0) {
        return;
    }

    let yearC = diffValue / year;
    let monthC = diffValue / month;
    let weekC = diffValue / (7 * day);
    let dayC = diffValue / day;
    let hourC = diffValue / hour;
    let minC = diffValue / minute;
    if (yearC >= 1) {
        result = '' + parseInt(yearC) + "年前";
    } else if (monthC >= 1) {
        result = '' + parseInt(monthC) + "月前";
    } else if (weekC >= 1) {
        result = '' + parseInt(weekC) + "周前";
    } else if (dayC >= 1) {
        result = '' + parseInt(dayC) + "天前";
    } else if (hourC >= 1) {
        result = '' + parseInt(hourC) + "小时前";
    } else if (minC >= 1) {
        result = '' + parseInt(minC) + "分钟前";
    } else {
        result = "刚刚";
    }

    return result;
}

function getDateTimeStamp(dateStr) {
    return Date.parse(dateStr);
}
