const readLine = require('readline');

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter your date of birth', (answer) => {
    const now = Date();
    const currentYear = now.getYear();
    const age = currentYear - parseInt(answer);
    if (age >= 18) {
        console.log(`Your eligible to vote!`);
    } else {
        console.log(`Your not eligible to vote!`);
    }

    console.log(`your age is ${age}`)
    rl.close();
});
