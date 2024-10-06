const fs = require('fs');

fs.appendFile('asyncExample.txt','\nAppending Data',(err,data)=>{
    if(err) throw err;
    console.log("Appending");
});

try{
    fs.appendFileSync('syncExample.txt','\nAppending Sync Data');
}catch(err)
{
    console.error('File not found!');
}
