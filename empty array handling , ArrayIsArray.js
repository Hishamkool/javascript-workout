/* 
// 1. Array.isArray(previousTotal)

How it handles:

If previousTotal is accidentally stored as an array ([]) instead of an object, this check detects it.

Arrays don’t have named properties like total_focus, so trying to access previousTotal.total_focus would return undefined.

What happens if it’s not here:

Your code might try to access properties on an array, e.g., previousTotal.total_focus.

This will not throw an error in JS (returns undefined), but any calculations using these values will break or produce NaN because you’re adding undefined to numbers.

// 2. Object.keys(previousTotal).length === 0

How it handles:

Checks if previousTotal is an empty object {}.

If empty, there are no keys like total_focus, total_CT, etc., so it prevents trying to access properties that don’t exist.

What happens if it’s not here:

Accessing previousTotal.total_focus would return undefined.

Using undefined in calculations (like adding with daily stats) results in NaN or wrong totals.

✅ In short: These checks prevent runtime errors or incorrect calculations when previousTotal is empty, invalid, or mistakenly an array instead of an object.

If you want, I can make a super simple comment version that explains this in 1–2 lines for your code. Do you want me to do that? */

function add_dailyStats_PreviousTotal() {
    let dailyLogsSum = getDailyLogsSum();
    let previousTotal = fetchPreviousTotal();
    // fetechPreviousTotal would return [] list when user hasnt submited the form so we need to initialise it to zero so that we dont cause any errors
    if (!previousTotal || Array.isArray(previousTotal) || Object.keys(previousTotal.length == 0)) {
        // im using array is array to make sure that when previous total is [] any key like total focus will be undefined so to fix that we make sure its treated like an array instead of an object so
        previousTotal = {
            date: null,
            total_focus: "00:00:00",
            total_CT: "00:00:00",
            total_ACT: "00:00:00",
            HTML: 0,
            CSS: 0,
            JS: 0,
            REACT: 0,
        }
    }
    let sumPreviousDailyObj = {
        date: dailyLogsSum.LatestDate,
        focus: secondsToHMS(time2Seconds(previousTotal.total_focus) +
            time2Seconds(dailyLogsSum.FOCUS)),
        code_time: secondsToHMS(time2Seconds(previousTotal.total_CT) + time2Seconds(dailyLogsSum.CODE_TIME)),
        active_CT: secondsToHMS(time2Seconds(previousTotal.total_ACT) + time2Seconds(dailyLogsSum.ACTIVE_CODE_TIME)),
        html: previousTotal.HTML + dailyLogsSum.HTML,
        css: previousTotal.CSS + dailyLogsSum.CSS,
        js: previousTotal.JS + dailyLogsSum.JS,
        react: previousTotal.REACT + dailyLogsSum.REACT,

    };
    localStorage.setItem(storage_key_previous_plus_daily, JSON.stringify(sumPreviousDailyObj));
    let st_previousPlusDaily = localStorage.getItem(storage_key_previous_plus_daily);
    console.log("PreviousTotal + DailyLogSum:", st_previousPlusDaily);
    showPreviousTotalSum();
}