var cypher = function(input) {
  var array1 = [];
  var result = "";
  var userInput = input.replace(/ /gi, "")
  var stringLength = Math.ceil(Math.sqrt(userInput.length));
  for(i=0; i< userInput.length; i += stringLength) {
  array1.push(userInput.slice(i, i + stringLength));
  }
  for(i = 0; i < stringLength; i ++) {
    // debugger;
    for(index = 0; index < array1.length; index ++) {
      result = result + array1[index].charAt(i);
    }
  }
// debugger;
  result = result.replace(/ /gi, "")
  for (index = 0; index + 5 < result.length; index += 5) {
    i = index / 5;
    result = result.slice(0, index + i + 5) + " " + result.slice(index + i + 5)
  }

  return result
}
