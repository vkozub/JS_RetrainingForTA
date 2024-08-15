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

    async function writeNewFile(path, data) {
        return new Promise((resolve, reject) => {
            fs.writeFile(path, data, err => {
                if (err) reject(err);
                console.log(`File ${path} written to '${baseDir}' successfully.`);
                resolve();
            });
        });
    }

    try {
        await writeNewFile(filePath, fileData);
    } catch (err) {
        console.error('File was not written! Error is: ', err.message);
    }
    
    // Truncate the file
    async function accessFile(path) {
        return new Promise((resolve, reject) => {
            fs.access(path, fs.constants.F_OK, function (err) {
                if (err) reject(err);
                console.log('File is accessible.');
                resolve();
            });
        });
    }

    async function truncateFile(path) {
        return new Promise((resolve, reject) => {
            fs.truncate(path, function (err) {
                if (err) reject(err);
                console.log('File hase been truncated.');
                resolve();
            });
        });
    }

    async function truncateAccessibleFile(path) {
        try {
            await accessFile(path);
            await truncateFile(path);
        } catch (err) {
            console.log('File has not been truncated. Error is: ', err);
        }
    }
    
    await truncateAccessibleFile(filePath);

    // Append file
    const fileDataAppend = 'Append data to the new file.\n';
    async function appendAccessibleFile(path, data) {
        return new Promise((resolve, reject) => {
            fs.appendFile(path, data, function (err) {
                if (err) reject(err);
                console.log(`File ${path} appended successfully.`);
                resolve();
            });
        });
    }

    await appendAccessibleFile(filePath, fileDataAppend);

})('test/dir1');