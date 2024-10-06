const fs = require('fs');

fs.rename('asyncExample.txt','newAsyncExample.txt',(err)=>{
    if(err) throw err;
    console.log("File Renamed");
});

try{
    fs.renameSync('syncExample.txt','newSyncExample.txt');
}catch(err)
{
    console.error('File not found!');
}
