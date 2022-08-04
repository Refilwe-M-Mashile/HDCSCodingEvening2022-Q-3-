const allAboutStrings = (str) => {
  const output = [];
  output.push(str.length); //length of string
  output.push(str[0]); //first character
  output.push(str[str.length - 1]); //last character

  /* check if the length is odd or even then push the middle character(s)*/
  if (str.length % 2 == 0) {
    output.push(str[str.length / 2 - 1] + str[str.length / 2]);
  } else {
    output.push(str[Math.floor(str.length / 2)]);
  }

  const secCharacter = str[1]; //second Character
  const moreChar = str.indexOf(secCharacter, 2);
  //check another appearance of the second character
  moreChar !== -1
    ? output.push(`@ index ${moreChar}`)
    : output.push("not found");

  return output;
};

console.log(allAboutStrings("LASA")); // [4, "L", "A", "AS", "@ index 3"]
console.log(allAboutStrings("Computer")); //➞ [8, "C", "r", "pu", "not found"]
console.log(allAboutStrings("Science")); //➞ [7, "S", "e", "e", "@ index 5"]
