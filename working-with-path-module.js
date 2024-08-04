const path = require('node:path');
const fs = require('node:fs');
const { Buffer } = require('node:buffer');

// path.format()
const formstObj = {
    dir: path.normalize('./newDirectory'),
    base: 'file.txt'
};

console.log(path.format(formstObj));

// path.parse()
const pathString = path.resolve('.', 'newDirectory/file.txt');

console.log(path.parse(pathString));

// path.relative()
const relativePath = path.relative('/homeWork_14/test/', '/homeWork_15');
console.log(relativePath);
console.log(path.resolve('.', relativePath));