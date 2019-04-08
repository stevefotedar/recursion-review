// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var result = '';
  if ( typeof obj === 'string' ) {
    result = '"' + obj + '"';
  } else if ( typeof obj === 'boolean' || typeof obj === 'number' ) {
    result = obj.toString();
  } else if ( obj === null ) {
    result = 'null';
  } else if ( Array.isArray(obj) ) {
    var strArr = [];
    for ( var i = 0; i < obj.length; i++ ) {
      strArr.push(stringifyJSON(obj[i]));
    }
    result = '[' + strArr.join(',') + ']';
  } else if ( typeof obj === 'object' ) {
    var strObj = '';
    for ( var key in obj ) {
      if ( typeof obj[key] !== 'function' && obj[key]) {
        strObj += stringifyJSON(key) + ':' + stringifyJSON(obj[key]);
      }
    }
    result = '{' + strObj + '}';
  }
  return result;
  // your code goes here
};
