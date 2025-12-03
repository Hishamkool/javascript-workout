const scoreDolphins = 96 + 108 + 89;
const scoreKoalas = 88 + 91 + 110;

const avgDolphins = scoreDolphins / 3;
const avgKoalas = scoreKoalas / 3;
console.log(`score: Koalas: ${avgKoalas}, Dolphins: ${avgDolphins}`);
if (avgKoalas > avgDolphins) {
    console.log("Koalas win the trophy",)
} else if (avgDolphins > avgKoalas) {
    console.log("Dolphins win the trophy")

} else {
    console.log("Both win the trophy")

}