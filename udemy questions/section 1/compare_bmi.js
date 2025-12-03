let massMark;
let massJohn;
let heightMark;
let heightJohn;
let markHigherBMI;

function bmiCal(height, mass, personName) {
    let bmi = mass / (height * height);
    console.log(`The bmi of ${personName} is ${bmi}`)
    return bmi;
}

const markBmi = bmiCal(1.69, 78, 'Mark');
const johnBmi = bmiCal(1.95, 92, 'John');

const result = compareBmi(markBmi, johnBmi);

if (result) {
    console.log('Mark has higher body mass index');

} else {
    console.log('John has higher BMI');
}


function compareBmi(markBmi, johnBmi) {
    if (markBmi > johnBmi) {
        markHigherBMI = true;

    } else {
        markHigherBMI = false;
    }
    return markHigherBMI;
}
