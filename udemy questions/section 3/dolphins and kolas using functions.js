'use strict';
const calcAverage = (a, b, c) => (a + b + c) / 3;

function checkWinner(avgDolphin, avgKola) {
    avgDolphin === avgKola ? console.log("No team wins...") :
        (avgDolphin >= (2 * avgKola)) ? console.log(`Dolphins win (${avgDolphin} vs ${avgKola}) `) : console.log(`Koalas win (${avgDolphin} vs ${avgKola})`);
}
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(23, 34, 27);
checkWinner(scoreDolphins, scoreKoalas);


