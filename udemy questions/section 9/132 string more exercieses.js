//format this string like this :
// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

//slice the first three letters and captilalize them
const firstThreeCaptital = (str) => str.slice(0, 3).toUpperCase();

//function that accepts the flight message and formats them
const formatFlightMessage = function (msg) {
  for (const flight of msg.split("+")) {
    const [type, from, to, time] = flight.split(";");

    const typeString = type.replaceAll("_", " ").trim();
    const isDelayed = typeString.toLowerCase().includes("delayed");

    const output = `${
      isDelayed ? "🔴" : ""
    } ${typeString} from ${firstThreeCaptital(from)} to ${firstThreeCaptital(
      to
    )} (${time.replace(":", "h")})`.padStart(50);

    console.log(output);
  }
};
//calling the function
formatFlightMessage(flights);
