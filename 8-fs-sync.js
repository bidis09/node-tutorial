// module to interact with file system
// we can do that in two ways
// async -> non-blocking
// sync -> blocking

const {readFileSync,writeFileSync} = require('fs');
console.log('start');

// provide path and encoding
const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');

//console.log(first, second);

// provide file name, value we want to pass, options object
// if file isn't there it will be created
// if file is there it will be overwritten
writeFileSync(
    './content/result-sync.txt',
    `Here is the result : ${first}, ${second}`,
    {flag: 'a'} // will append
    );

console.log('done with this task');
console.log('starting the next one');

