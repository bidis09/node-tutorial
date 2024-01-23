// we need to provide a callback
// we run callback when we are done


const {readFile,writeFile} = require('fs');

// first arguement -> path
// second arguemetn -> encoding
// third arguement -> callback function
// in callback -> 2 args
// if we dont provide encoding we will get a buffer

// the only way to access result is inside of callback function

console.log('start');

readFile('./content/first.txt','utf-8',(err, result) => {
    if(err){
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt','utf-8',(err, result) => {
        if(err){
            console.log(err);
            return;
        }
        const second = result;
        writeFile('./content/result-async.txt',
            `Here is the result : ${first}, ${second}`,
            (err,result) => {
                if(err){
                    console.log(err);
                    return;
                }
                console.log('done with this task');
            }
        )
    });
})

console.log('starting next task')
