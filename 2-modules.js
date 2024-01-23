// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

// you split your code in modules

//access from other module
const names = require('./3-names');
const sayHi = require('./4-utils');

// i invoked the fuction in the module
require('./5-mind-grenade');

//console.log(names);

//sayHi('susan');
//sayHi(names.john);
//sayHi(names.peter);