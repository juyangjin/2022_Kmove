const fs = require('fs');

let data = fs.readFileSync('.toy.txt');
console.log('첫번째 문서', data.toString());
data = fs.readFileSync('./toy.txt');
console.log('두번째 문서', data.toString());
data = fs.readFileSync('./toy.txt');
console.log('세번째 문서', data.toString());
