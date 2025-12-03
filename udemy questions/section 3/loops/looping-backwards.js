const hishamObject = [
    'Muhammed',
    'Hisham',
    1998,
    'Developer',
    ['Imran', 'Aslam'],

];

for (let index = hishamObject.length - 1; index >= 0; index--) {
    console.log(hishamObject[index]);
};

let session = ['exercise 1', 'exercise 2', 'exercise 3 ']

for (let exercise = 0; exercise < session.length; exercise++) {
    console.log(`  ......   `, session[exercise]);
    for (let j = 1; j <= 5; j++) {
        console.log(`lifting weight ${j}`);
    }
}