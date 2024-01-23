// GLOBALS - NO WINDOW !!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed


console.log(__dirname);

// repeatedly calls a function or executes a code snippet with a fixed
// time delay between each call
// Global function on Window and node.js
setInterval(() => {
    console.log('Hello world')
}, 1000);

// call a function after the specified number of milliseconds
setTimeout(() => {
    console.log('Hello world')
},1000);