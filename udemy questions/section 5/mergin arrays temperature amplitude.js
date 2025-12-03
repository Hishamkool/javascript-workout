const temps1 = [3, -1, 23, , "among us", " ", 22, 33, 55, 18];
const temps2 = [3, -2, -6, -1, 9, 13, 17, 15, 14, 9];
const temps3 = [12, 18, 25, 30, 22, 27, 15, 19];

// to merge multiple arrays we ccan use concatination or use spread operations or we can use reduce method , reduce method creates modifies the exisiting array instead of creating a new one
/* const mergedTemperatureArray = [temps1, temps2, temps3].reduce((acc, cuu) => {
  return acc.concat(cuu);
}); */
// const mergedTemperatureArray = [...temps1, ...temps2, ...temps3];
const mergedTemperatureArray = temps1.concat(temps2, temps3);
S;
console.table("merge", mergedTemperatureArray);

let maxVaue = mergedTemperatureArray[0];
let minValue = mergedTemperatureArray[0];
const calcTemAmplitude = function (temperatureArray) {
  for (let index = 0; index < temperatureArray.length; index++) {
    const currentItem = temperatureArray[index];
    if (typeof currentItem !== "number") continue;
    if (currentItem > maxVaue) maxVaue = currentItem;
    if (currentItem < minValue) minValue = currentItem;
  }
};
calcTemAmplitude(mergedTemperatureArray);
console.log("max value", maxVaue, "\n", "min value ", minValue);

const findTempAmplitude = function () {
  const tempAmplitude = maxVaue - minValue;
  console.log("Temperatur amplitude is : ", tempAmplitude);

  return tempAmplitude;
};
findTempAmplitude();
//  fucntino should receive two arrays of temperature
