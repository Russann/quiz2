'use strict';


function bindName(firstName, lastName, func) {
var name = firstName + ' ' + lastName;
return func.bind(null, firstName + ' ' + lastName);
}

module.exports = bindName;
