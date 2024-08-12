const path = require('node:path');
const fs = require('node:fs');
const { Buffer } = require('node:buffer');

(async (testDirPath) => {

    // Get path as Buffer object
    const testDirBuf = Buffer.from(testDirPath);

    // Create a directory
    async function createDirectory(path) {
        return new Promise((resolve, reject) => {
            fs.mkdir(path, { recursive: true }, function (err, pathDir) {
                if (err) reject(err);
                resolve(pathDir);
            });
        });
    }

    const baseDir = await createDirectory(testDirBuf);
    console.log('Base directory: ', baseDir);

    // Write file to the directory
    const fileName = 'file.txt';
    const filePath = path.join(baseDir, fileName);
    console.log('File path to write: ', filePath);
    const fileData = 'Write new data to the new file.\n';

    async function writeFile(path, data) {
        return new Promise((reject) => {
            fs.writeFile(path, data, function (err) {
                if (err) reject(err);
                console.log(`File ${path} written to ${baseDir} successfully.`);
            });
        });
    }

    try {
        await writeFile(filePath, fileData);
    } catch (err) {
        console.error('File was not written! Error is: ', err.message);
    }
    

})('test/dir1');