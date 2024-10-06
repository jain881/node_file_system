const fs = require('fs');

// Asynchronous write
fs.writeFile('asyncExample.txt', 'Hello, World in Async File!', (err) => {
    if (err) throw err;
    console.log('File has been written');
  });

  
  // Synchronous write
  try{
    fs.writeFileSync('syncExample.txt','Hello World in Sync File!');
    console.log('File has been written');
  }catch(err)
  {
    console.error('File not found!')
  }
