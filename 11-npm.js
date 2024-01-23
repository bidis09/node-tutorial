// npm - global command, comes with node
// npm --version


// local dependency - use it in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>


// package.json - manifest file (stores important info about project/package such as dependencies)
// manual approach (create package.json in the root, create properties etc)
// nmp init (step by step, press enter to skip)
// npm init -y (everything default)

// access lodash module (external module)
const _ = require('lodash');

const items = [1,[2,[3,[4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);