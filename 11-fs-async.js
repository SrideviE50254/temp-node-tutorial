//File module
//asyncronous none blocking
const res = require('express/lib/response');
const {readFile,writeFile} = require('fs');
console.log("start");

readFile('./content/first.txt', 'utf8',(err, result) => {
    if(err) {
        console.log(err);
        return;
    }
   const first = result;
    readFile('./content/second.txt', 'utf8',(err, result) => {
        if(err) {
            console.log(err);
        }
    const second = result;
    writeFile('./content/result-sync.txt', `Here is the result of write file: ${first} , ${second}`,(err,result) => {
        if(err) {
            console.log(err);
        }
        console.log("done with the task");
    })

    })
   
});
console.log("starting the next one...");