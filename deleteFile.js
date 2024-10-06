const fs = require('fs');

// Asynchronous delete
fs.unlink('asyncExample.txt',(err,data)=>{
    if(err) throw err;
    console.log("Deleted")
});

// Synchronous delete
try{
    fs.unlinkSync('syncExample.txt');
    console.log("Deleted Sync");

}catch(err)
{
    console.error('File not found!')

}