/* 
- we will be given an array of 7 elements each shows the hours of each working day
- we need to calculate the total working hours of the week
- calculte average hours of the weeek to one decimal place
- number of days worked (more than 0 hours)
- whether the week was full-time worked 35 hours or more min 35 hours = full time

*/

"use strict";

const weeklyReportArray = [7.3, 5, 7, 8.1, 0, 8, 0];
trackTime(weeklyReportArray);

function trackTime(weeklyReportArray) {
  const totalWeeklyHours = calcTotalHours(weeklyReportArray);
  const averageDailyHours = calcAverageDailyHours(
    totalWeeklyHours,
    weeklyReportArray.length
  );
  const mostHoursWorked = dayWithMostHours(weeklyReportArray);
  const noOfDaysWorked = workingDaysCount(weeklyReportArray);
  const isFullTime = isWeekFullTime(totalWeeklyHours);

  console.log("Total Hours Worked: ", totalWeeklyHours);
  console.log("Average daily hours", averageDailyHours);
  console.log("Most Hours worked", mostHoursWorked);
  console.log("No of days worked:", noOfDaysWorked);
  console.log(
    `${isFullTime ? `This week was full time` : `This week was not full time`}`
  );

  /* calculate total hours in a week */
  function calcTotalHours(weeklyArray) {
    let totalWeeklyHours = 0;
    for (let index = 0; index < weeklyArray.length; index++) {
      if (typeof weeklyArray[index] !== "number") {
        continue;
      }
      totalWeeklyHours += weeklyArray[index];
    }

    return totalWeeklyHours;
  }

  /* calculate average of a week*/
  function calcAverageDailyHours(total, arrLength) {
    const averageDailyHours = total / arrLength;

    return Math.round(averageDailyHours).toFixed(1);
  }

  /* most hours worked */
  function dayWithMostHours(weeklyArray) {
    let mostHoursWorked = weeklyArray[0];
    for (let index = 0; index < weeklyArray.length; index++) {
      if (weeklyArray[index] > mostHoursWorked) {
        mostHoursWorked = weeklyArray[index];
      }
    }

    return mostHoursWorked;
  }

  /* Number of days worked */
  function workingDaysCount(weeklyArray) {
    let noOfDaysWorked = 0;
    for (let index = 0; index < weeklyArray.length; index++) {
      const item = weeklyArray[index];
      if (item > 0) {
        noOfDaysWorked++;
      }
    }

    return noOfDaysWorked;
  }

  /* whether the week was full time */
  function isWeekFullTime(totalHours) {
    let fulltime;
    if (totalHours >= 35) {
      fulltime = true;
    } else {
      fulltime = false;
    }
    return fulltime;
  }
}
