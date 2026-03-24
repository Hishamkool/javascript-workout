import { runTestCases } from "../../testcaseRunner/CommonTestCaseRunner.js";

function playlistManager(arrOfOperations) {
  const printResult = [];
  const playlist = [];

  //add songs to end - push
  // cannot go to previous song
  // remove song with song name
  // playlist returns the playlist
  // shuffle reutrn the playlist in random order

  arrOfOperations.forEach((operation) => {
    const instruction = operation.trim().split(/\s+/g);
    const action = instruction[0];
    const song = instruction[1];

    switch (action) {
      case "ADD":
        playlist.push(song);
        break;

      case "REMOVE":
        const songToRemove = song;
        const index = playlist.findIndex((song) => song === songToRemove);
        if (index !== -1) {
          playlist.splice(index, 1);
          printResult.push(`Removed ${songToRemove}`);
        } else {
          printResult.push(`Song ${songToRemove} not found`);
        }
        break;

      case "PLAYLIST":
        //we should not push playlist directly because it will only push the reference of playlist to the printOutput
        // so we need to pass the copy of the current state  using spread operator
        printResult.push([...playlist]);
        break;

      case "SHUFFLE":
        //i goes from 0 to 4
        // j is restricted to 0 to i , that is first is 0 to 0 , then 0 to 1 then 0 to 2 ....
        for (let i = 0; i < playlist.length; i++) {
          const j = Math.floor(Math.random() * (i + 1));
          [playlist[i], playlist[j]] = [playlist[j], playlist[i]];
        }
        printResult.push([...playlist]);
        break;

      default:
        console.log("Command not found");
        break;
    }
  });
  return printResult;
}

/* playlistManager([
  "ADD                     ShapeOfYou",
  "ADD BlindingLights                                ",
  "ADD Levitating",
  "ADD Peaches",
  "REMOVE BlindingLights",
  "REMOVE SomeoneYouLoved",
  "PLAYLIST",
  "SHUFFLE",
  "REMOVE Peaches",
  "PLAYLIST",
]); */

const testCases = [
  {
    input: [
      ["ADD ShapeOfYou", "ADD BlindingLights", "ADD Levitating", "PLAYLIST"],
    ],
    expected: [["ShapeOfYou", "BlindingLights", "Levitating"]],
  },

  {
    input: [
      [
        "ADD ShapeOfYou",
        "ADD BlindingLights",
        "ADD Levitating",
        "REMOVE BlindingLights",
        "PLAYLIST",
      ],
    ],
    expected: ["Removed BlindingLights", ["ShapeOfYou", "Levitating"]],
  },

  {
    input: [
      [
        "ADD Peaches",
        "ADD Stay",
        "ADD IndustryBaby",
        "REMOVE Stay",
        "REMOVE SomeoneYouLoved",
        "PLAYLIST",
      ],
    ],
    expected: [
      "Removed Stay",
      "Song SomeoneYouLoved not found",
      ["Peaches", "IndustryBaby"],
    ],
  },

  {
    input: [
      [
        "ADD AsItWas",
        "ADD HeatWaves",
        "ADD BadHabit",
        "ADD Levitating",
        "REMOVE HeatWaves",
        "REMOVE BadHabit",
        "PLAYLIST",
      ],
    ],
    expected: [
      "Removed HeatWaves",
      "Removed BadHabit",
      ["AsItWas", "Levitating"],
    ],
  },

  {
    input: [
      [
        "ADD Believer",
        "ADD Thunder",
        "ADD Radioactive",
        "ADD Demons",
        "REMOVE Radioactive",
        "PLAYLIST",
      ],
    ],
    expected: ["Removed Radioactive", ["Believer", "Thunder", "Demons"]],
  },

  {
    input: [
      [
        "ADD CountingStars",
        "ADD Apologize",
        "ADD Secrets",
        "REMOVE Apologize",
        "REMOVE Secrets",
        "REMOVE CountingStars",
        "PLAYLIST",
      ],
    ],
    expected: [
      "Removed Apologize",
      "Removed Secrets",
      "Removed CountingStars",
      [],
    ],
  },

  {
    input: [
      [
        "ADD ShapeOfYou",
        "ADD Peaches",
        "ADD Stay",
        "ADD Levitating",
        "REMOVE Peaches",
        "REMOVE Stay",
        "ADD BlindingLights",
        "PLAYLIST",
      ],
    ],
    expected: [
      "Removed Peaches",
      "Removed Stay",
      ["ShapeOfYou", "Levitating", "BlindingLights"],
    ],
  },

  {
    input: [
      [
        "ADD Perfect",
        "ADD Photograph",
        "ADD ThinkingOutLoud",
        "ADD CastleOnTheHill",
        "REMOVE Photograph",
        "PLAYLIST",
      ],
    ],
    expected: [
      "Removed Photograph",
      ["Perfect", "ThinkingOutLoud", "CastleOnTheHill"],
    ],
  },

  {
    input: [
      [
        "ADD Faded",
        "ADD Alone",
        "ADD Spectre",
        "REMOVE Alone",
        "ADD Darkside",
        "PLAYLIST",
      ],
    ],
    expected: ["Removed Alone", ["Faded", "Spectre", "Darkside"]],
  },

  {
    input: [
      [
        "ADD Havana",
        "ADD Senorita",
        "ADD Attention",
        "REMOVE Attention",
        "REMOVE Havana",
        "PLAYLIST",
      ],
    ],
    expected: ["Removed Attention", "Removed Havana", ["Senorita"]],
  },
];

runTestCases(playlistManager, testCases);
