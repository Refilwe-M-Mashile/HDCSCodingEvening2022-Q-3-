const allAboutStrings = (str) => {
  const output = [];
  const strLength = str.length;

  output.push(strLength); //length of string
  output.push(str[0]); //first character
  output.push(str[strLength - 1]); //last character

  const middleIndex = Math.floor(strLength / 2);
  /* check if the length is odd or even then push the middle character(s)*/
  strLength % 2 === 0
    ? output.push(str[middleIndex - 1] + str[middleIndex])
    : output.push(str[middleIndex]);

  const secondCharacter = str[1]; //second Character
  const secondOccurrence = str.indexOf(secondCharacter, 2);
  //check another appearance of the second character
  secondOccurrence !== -1
    ? output.push(`@ index ${secondOccurrence}`)
    : output.push("not found");

  return output;
};

console.log(allAboutStrings("LASA")); //➞ [4, "L", "A", "AS", "@ index 3"]
console.log(allAboutStrings("Computer")); //➞ [8, "C", "r", "pu", "not found"]
console.log(allAboutStrings("Science")); //➞ [7, "S", "e", "e", "@ index 5"]
