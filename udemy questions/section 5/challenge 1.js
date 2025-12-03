const temps1 = [17, 21, 23, 26, 16];
const temps3 = [12, 18, 25, 30, 22, 27, 15, 19];
const temperatureArray = temps1.concat(temps3);
let result = "";

function printForecast(temperatureArray) {
  for (let index = 0; index < temperatureArray.length; index++) {
    result = result + `${temperatureArray[index]}°C in ${index + 1} days ... `;
  }
  console.log("... ", result);
}
printForecast(temperatureArray);

/* function printForcastUsingForEach(tempArray) {
  tempArray.forEach((temp, index) => {
    result += `${temp}°C in ${index} days ... `;
  });
  console.log(result);
}

printForcastUsingForEach(temperatureArray); */
