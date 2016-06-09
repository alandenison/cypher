var cypher = function(input) {
  var array1 = [];
  var result = "";
  array1.push(input.slice(0,2));
  array1.push(input.slice(2,4));
  result=array1[0].charAt(0)+array1[1].charAt(0)+array1[0].charAt(1)+array1[1].charAt(1);
  return result
}
