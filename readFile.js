const fs = require('fs');

//Asynchronous read 

// (err, data) we are using error-first callback pattern 
fs.readFile('asyncExample.txt','utf8',(err, data)=>{
    if(err) throw err;
    console.log(data); // Hello Fellow Dev in Async File
})

// Synchronous read
try{
    const data = fs.readFileSync('syncExample.txt','utf8');
    console.log(data);
}catch(err)
{
    console.error('File not found!')
}

/* Question For You
1. Tell me why Synchronous Code runs first in this example.
*/