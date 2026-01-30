/*Caze Maker II
We will still be given an input string to convert. However, this time, we'll also be given a casing style to work with. The following code block will describe all the casing styles to support. We may also receive an array of casing styles, and each of these should be applied.

Instruction
Create a function named makeCaze that will receive an input string and one or more casing options. Return a new string that is formatted based on casing options:

Precedence of each of the casing styles are as follows, values higher in the list should be processed first:

camel, pascal, snake, kebab, title
vowel, consonant
upper, lower
Our function should be able to handle all of these cases.

For more information on casing styles, read Wikipedia's Special Case Styles for a list of various casing examples.

*/

const makeCaze = function (input, caze) {
  // Put your solution here
    let styles = Array.isArray(caze) ? caze : [caze];
  let result = input;

  const hasStyle = (name) => styles.includes(name);

  if (hasStyle("camel")) {
    let words = result.split(" ");
    result = words[0].toLowerCase();
    for (let i = 1; i < words.length; i++) {
      result += words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
    }
  }

  if (hasStyle("pascal")) {
    let words = result.split(" ");
    result = "";
    for (const word of words) {
      result += word[0].toUpperCase() + word.slice(1).toLowerCase();
    }
  }

  if (hasStyle("snake")) {
    result = result.split(" ").join("_");
  }

  if (hasStyle("kebab")) {
    result = result.split(" ").join("-");
  }

  if (hasStyle("title")) {
    let words = result.split(" ");
    result = words
      .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  }

  if (hasStyle("vowel")) {
    let vowels = "aeiou";
    let temp = "";
    for (const char of result) {
      if (vowels.includes(char.toLowerCase())) {
        temp += char.toUpperCase();
      } else {
        temp += char;
      }
    }
    result = temp;
  }

  if (hasStyle("consonant")) {
    let vowels = "aeiou";
    let temp = "";
    for (const char of result) {
      if (/[a-z]/i.test(char) && !vowels.includes(char.toLowerCase())) {
        temp += char.toUpperCase();
      } else {
        temp += char;
      }
    }
    result = temp;
  }

  if (hasStyle("upper")) {
    result = result.toUpperCase();
  }

  if (hasStyle("lower")) {
    result = result.toLowerCase();
  }

  return result;
};

console.log(makeCaze("this is a string", "camel")); // thisIsAString
console.log(makeCaze("this is a string", "pascal")); // ThisIsAString
console.log(makeCaze("this is a string", "snake")); // this_is_a_string
console.log(makeCaze("this is a string", "kebab")); // this-is-a-string
console.log(makeCaze("this is a string", "title")); // This Is A String
console.log(makeCaze("this is a string", "vowel")); // thIs Is A strIng
console.log(makeCaze("this is a string", "consonant")); // THiS iS a STRiNG
console.log(makeCaze("this is a string", ["upper", "snake"])); // THIS_IS_A_STRING

module.exports = makeCaze;
