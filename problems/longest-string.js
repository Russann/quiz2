'use strict';
/**
*Array.prototype.length is from:
*https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype
*
*
*/

module.exports =  function(arr) {
  return arr.sort(function(a,b) {
    if (typeof a !== 'string'){ return 1; }
    if (typeof b !== 'string') { return -1; }
    if (a.length < b.length) { return 1; }
    if (b.length > a.length){ return -1; }
    return 0;
  })[0];
};
