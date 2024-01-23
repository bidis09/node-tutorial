// In node we can interact with file system
// we path module we can interact with file

const path = require('path');

console.log(path);

// join method returns a normalized path of system
const FilePath = path.join('/content','subfolder','text.txt');
console.log(FilePath);

// to see the base
const base = path.basename(FilePath);
console.log(base);

// returns absolute path
// we need to run our codes in different machines
// so the absolute path is different
const absolute = path.resolve(__dirname,'content','subfolder','text.txt');
console.log(absolute);