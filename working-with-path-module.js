const path = require('node:path');
const fs = require('node:fs');
const { Buffer } = require('node:buffer');

// Get path as Buffer object
const testDirPath = 'test/dir1';
const testDirBuf = Buffer.from(testDirPath);
// console.log(testDirBuf);
// console.log(testDirBuf.toString());


// Create a test directory with sub directories
const baseDir = fs.mkdirSync(testDirBuf, { recursive: true });
// console.warn(baseDir);

// Write new file
const fileName = 'file.txt';
const filePath = path.join(baseDir, fileName);
// console.log(filePath);
const fileData = 'Write data to the new file.\n';
fs.writeFileSync(filePath, fileData, { flag: 'w' });

console.log('Using realpathSync: ', fs.realpathSync('test/file.txt'));

// fs.truncateSync(baseDir + '/' + 'file.txt');

// Open a file in the test directory
const fileDescriptor = fs.openSync(filePath, 'w');
// console.log(fileDescriptor);

// Write file again using file descriptor
const fileData2 = 'Write data to the new file by descriptor.\n';
const fileData2Buf = Buffer.from(fileData2);
console.log(fs.writeSync(fileDescriptor, fileData2Buf));
fs.closeSync(fileDescriptor);

// Copy the file
const copyFileName = path.join(testDirPath, fileName);
fs.copyFileSync(filePath, copyFileName);

// Append the file
if (fs.existsSync(filePath)) {
    const fileData3 = 'Append data to the new file by descriptor.\n';
    fs.appendFileSync(filePath, fileData3);
} else 
    console.log("File does not exist");

// Read the file
let fd;
try {
    fs.accessSync(filePath, fs.constants.R_OK);
    const data = fs.readFileSync(filePath, { encoding: 'utf8' });
    console.log(data);

    fd = fs.openSync(filePath, 'r');
    const fileBuf = Buffer.alloc(256);
    fs.readSync(fd, fileBuf);
    console.log('New buffer after reading:\n', fileBuf.toString());

    console.log(fs.fstatSync(fd));
    console.log(fs.statSync('test'));
    console.log(fs.statfsSync(filePath));
} catch(err) {
    console.error("File is not opened for reading");
} finally {
    if (fd !== undefined)
        fs.closeSync(fd);
}

// Create symbolic link
fs.symlinkSync('test/dir1/file.txt', 'symlink.txt');

// Unlink the link
fs.unlinkSync('symlink.txt');
// Unlink the file
fs.unlinkSync('test/dir1/file.txt');

// Open the directory
// const dirObject = fs.opendirSync(baseDir, { recursive: true });
// // console.log(dirObject.entries());
// async function iterateDir() {
//     for await (const dirEnt of dirObject) {
//         if (dirEnt.isDirectory()) {
//             console.log('Directory: ', dirEnt.name);
//             // console.log(dirObject.readSync().name);
//         } else
//             console.log('File: ', dirEnt.name);
//     }
// }

// iterateDir();
// dirObject.closeSync();

// Read the dir content
console.log(fs.readdirSync(baseDir, { recursive: true }));

// Copy the directory
// const copyDirName = path.join('testCopyDir');
// fs.cpSync(baseDir, copyDirName, { recursive: true });

// Remove the test directory
// fs.rmSync(baseDir, { recursive: true, force: true });
// fs.rmSync(copyDirName, { recursive: true, force: true });