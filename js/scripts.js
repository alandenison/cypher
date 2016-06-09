var cypher = function(input) {
  var array1 = [];
  var result = "";
  var stringLength = Math.sqrt(input.length)
  for(i=0; i< input.length; i += stringLength) {
  array1.push(input.slice(i, i + stringLength));
  }
  for(i = 0; i < stringLength; i ++) {
    for(index = 0; index < stringLength; index ++) {
      result = result + array1[index].charAt(i);
    }
  }
  result = result.slice(0,5) + " " + result.slice(5,9);
  return result
}
