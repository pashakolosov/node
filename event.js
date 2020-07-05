const path = require('path');

console.log(path.basename(__filename)); // evetn.js
console.log(path.dirname(__filename));  // node minin
console.log(path.extname(__filename));  //.js
console.log(path.join(__dirname, 'test', 'second.html'));
console.log(path.resolve(__dirname, './test', 'second.html'));
console.log(path.parse(__filename)); 
 /* 
{
    root: 'C:\\',
    dir: 'C:\\Users\\pasha\\Desktop\\Code\\node minin',
    base: 'event.js',
    ext: '.js',
    name: 'event'
  } 
  */