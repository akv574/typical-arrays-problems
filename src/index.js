
exports.min = function min (array) {
  
  let result
  array === undefined || array.length === 0 || Math.min(...array) === NaN ? result = 0 : result = Math.min(...array);
  return result;
}

exports.max = function max (array) {
  let result
  array === undefined || array.length === 0 || Math.max(...array) === NaN ? result = 0 : result = Math.max(...array);
  return result;
  
}

exports.avg = function avg (array) {
  let result
  array === undefined || array.length === 0 || Math.max(...array) === NaN ? result = 0 : result = array.reduce((a,b)=>(a+b))/array.length;
  return result;
  
}
