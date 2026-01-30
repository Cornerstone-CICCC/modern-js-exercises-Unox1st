/*
In this activity, we will be converting date strings like "2017/12/02", into more English friendly date strings like December 2nd, 2017.

Talking Calendar
We will be given a date as a string (not a Date object). The date will always be formatted as YYYY/MM/DD. We will have to parse the given string and produce a human readable date.

Instruction
Create a function named talkingCalendar that takes in a date string with the format YYYY/MM/DD, and returns a new human readable date that looks like December 2nd, 2017.
*/

const talkingCalendar = function (date) {
  // Your code here
    const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const parts = date.split("/");
  const year = parts[0];
  const month = months[Number(parts[1]) - 1];
  const dayNum = Number(parts[2]);

  let suffix = "th";
  if (dayNum % 10 === 1 && dayNum !== 11) {
    suffix = "st";
  } else if (dayNum % 10 === 2 && dayNum !== 12) {
    suffix = "nd";
  } else if (dayNum % 10 === 3 && dayNum !== 13) {
    suffix = "rd";
  }

  return `${month} ${dayNum}${suffix}, ${year}`;
};

console.log(talkingCalendar("2017/12/02")); // December 2nd, 2017
console.log(talkingCalendar("2007/11/11")); // November 11th, 2007
console.log(talkingCalendar("1987/08/24")); // August 24th, 1987

module.exports = talkingCalendar;
