const allAboutStrings = (str) => {
  const output = [];
  const strLength = str.length;
  output.push(strLength); //length of string
  output.push(str[0]); //first character
  output.push(str[strLength - 1]); //last character

  const half = Math.floor(strLength / 2);
  /* check if the length is odd or even then push the middle character(s)*/
  strLength % 2 === 0
    ? output.push(str[half - 1] + str[half])
    : output.push(str[half]);

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
