'use strict';

function arraySum(arr) {
  var total = 0;  // Variable to hold your total

  for(var i = 0; i < arr.length; i++) {
      var element = arr[i];
      if (typeof element === 'object') {
        total = total + arraySum(element);
      } else {
        total = total + element;
      }
      // Iterate first array,then grab second element, add values up
      //recursion
  }

return total;
}
module.exports = arraySum;
