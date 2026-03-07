const sampleArray = [
  "ant",
  "elepahant",
  "bear",
  "dragon",
  "ant",
  "tiger",
  "deer",
  "ant",
  "deer",
  "deer",
  "ant",
  "bear",
  "ant",
  "ant",
];

const frequencyCounter = (words) => {
  const frequency = {};
  for (const word of words) {
    frequency[word] = (frequency[word] || 0) + 1;
  }
  return frequency;
};

console.log(frequencyCounter(sampleArray));
