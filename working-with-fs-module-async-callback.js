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
        return new Promise((resolve, reject) => {
            fs.writeFile(path, data, err => {
                if (err) reject(err);
                console.log(`File ${path} written to '${baseDir}' successfully.`);
                resolve();
            });
        });
    }

    try {
        await writeFile(filePath, fileData);
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
    async function appendFile(path, data) {
        return new Promise((resolve, reject) => {
            fs.appendFile(path, data, function (err) {
                if (err) reject(err);
                console.log(`File ${path} appended successfully.`);
                resolve();
            });
        });
    }

    await appendFile(filePath, fileDataAppend);

    // Copy the file
    const copyFileName = path.join(testDirPath, 'file2.txt');

    async function copyFile(src, dest) {
        return new Promise((resolve, _) => {
            fs.copyFile(src, dest, function (err) {
                if (err) 
                    console.error(`File "${src}" has not been copied. Error is: `, err.message);
                else 
                    console.log(`File "${src}" copied successfully to "${dest}".`);
                resolve();
            });
        });
    }

    await copyFile(filePath, copyFileName);

    // Copy entire directory
    async function copyEntireDirectory(src, dest, options = { recursive: true }) {
        return new Promise((resolve, _) => {
            fs.cp(src, dest, { ...options }, function (err) {
                if (err) 
                    console.error(`Directory "${src}" has not been copied. Error is: `, err.message);
                else 
                    console.log(`Directory "${src}" copied successfully to "${dest}".`);
                resolve();
            });
        });
    }

    await copyEntireDirectory(baseDir, './testCopy');

    // Remove entire directory
    async function removeEntireDirectory(src, options = { recursive: true, force: true }) {
        return new Promise((resolve, _) => {
            fs.rm(src, { ...options }, function (err) {
                if (err) 
                    console.error(`Directory "${src}" has not been removed. Error is: `, err.message);
                else 
                    console.log(`Directory "${src}" removed successfully.`);
                resolve();
            });
        });
    }

    await removeEntireDirectory('./testCopy');

    // Rename the existing file
    async function renameFile(oldPath, newPath) {
        return new Promise((resolve, _) => {
            fs.rename(oldPath, newPath, function (err) {
                if (err) 
                    console.error(`File "${oldPath}" has not been renamed. Error is: `, err.message);
                else 
                    console.log(`File "${oldPath}" renamed to "${newPath}" successfully.`);
                resolve();
            });
        });
    }

    await renameFile(copyFileName, testDirPath + '/rename.txt');

    // Remove the existing file
    async function unlinkFile(path) {
        return new Promise((resolve, _) => {
            fs.unlink(path, function (err) {
                if (err) 
                    console.error(`File "${path}" has not been removed. Error is: `, err.message);
                else 
                    console.log(`File "${path}" removed successfully.`);
                resolve();
            });
        });
    }

    // await unlinkFile(testDirPath + '/rename.txt');

    // Remove empty dir
    async function removeDir(path) {
        return new Promise((resolve, _) => {
            fs.rmdir(path, function (err) {
                if (err) 
                    console.error(`Directory "${path}" has not been removed. Error is: `, err.message);
                else 
                    console.log(`Directory "${path}" removed successfully.`);
                resolve();
            });
        });
    }

    // await removeDir(testDirPath);

    // Read contents
    async function readFile(path) {
        return new Promise((resolve, reject) => {
            fs.readFile(path, { encoding: 'utf8' }, function (err, data) {
                if (err) {
                    console.error(`File "${path}" has not been read. Error is: `, err.message);
                    reject(err);
                }
                resolve(data);
            });
        });
    }

    // Close the file
    async function closeFile(fd) {
        return new Promise((resolve, reject) => {
            fs.close(fd, function (err) {
                if (err) {
                    console.error(`File "${fd}" has not been closed. Error is: `, err.message);
                    reject(err);
                }
                console.log('File was closed successfully.')
                resolve();
            });
        });
    }

    // Get file stats
    async function getFileStats(fd) {
        return new Promise((resolve, reject) => {
            fs.fstat(fd, function (err, stats) {
                if (err) {
                    console.error(`Cannot get file "${fd}" statistics. Error is: `, err.message);
                    reject(err);
                }
                resolve(stats);
            });
        });
    }


    async function readFileContent(path) {
        return new Promise((resolve, reject) => {
            fs.open(path, function (err, fd) {
                if (err) {
                    console.error(`File "${path}" could not be opened. Error is: `, err.message);
                    reject(err);
                };
                const statsPromise = getFileStats(fd);
                statsPromise.then((stats) => console.log('File statistics is:\n', stats))
                    .catch((err) => reject(err));
                const promise = readFile(fd);
                promise.then((data) => resolve(data))
                    .catch((err) => reject(err))
                    .finally(() => closeFile(fd));
            });
        });
    }

    try {
        const fileContent = await readFileContent(filePath);
        console.log(`File content: "${fileContent}"`);
    } catch (err) {
        console.error('There is no file content. There is an error: ', err.message);
    }
    
    // Open the directory
    async function getDirContents(path, options = { recursive: false }) {
        return new Promise((resolve, reject) => {
            fs.opendir(path, { ...options }, function (err, dir) {
                if (err) {
                    console.error(`Cannot open dir "${path}". Error is: `, err.message);
                    reject(err);
                }
                resolve(dir);
            });
        });
    }

    try {
        const dirContent = await getDirContents(baseDir, { recursive: true });
        for await (const dirent of dirContent)
            console.log(dirent.name);
    } catch (err) {
        console.error('Dir cannot be opened. There is an error: ', err.message);
    }

    // Read directory contents
    async function readDirContent(path, options) {
        return new Promise((resolve, reject) => {
            fs.readdir(path, { ...options }, function (err, files) {
                if (err) {
                    console.error(`Cannot read dir "${path}". Error is: `, err.message);
                    reject(err);
                }
                resolve(files);
            });
        });
    }

    try {
        const dirFiles = await readDirContent(baseDir, { recursive: true, withFileTypes: true });
        console.log(dirFiles);
    } catch (err) {
        console.error('Dir cannot be read. There is an error: ', err.message);
    }

    // Get real path
    async function getRealPath(path) {
        return new Promise((resolve, reject) => {
            fs.realpath(path, function (err, resolvedPath) {
                if (err) {
                    console.error(`Cannot resolve "${path}" to a real one.`);
                    reject(err);
                }
                resolve(resolvedPath);
            });
        });
    }

    try {
        const realPath = await getRealPath('../test');
        console.log('Real path is: ', realPath);
    } catch (err) {
        console.error(err);
    }

    // Create read stream
    async function getFileStream(path) {
        const streamArray = [];
    
        return new Promise((resolve, reject) => {
            const readStream = fs.createReadStream(path, { highWaterMark: 1 });
    
            readStream.on('open', function (fd) {
                console.log('Open stream: ', fd);
            }).on('ready', function () {
                console.log('Stream is ready.');
            }).on('data', function (chunk) {
                console.log('Chunk is: ', chunk.toString());
                streamArray.push(chunk.toString());
            }).on('end', function () {
                console.log('End of stream.');
                console.log('Path is: ', readStream.path);
                console.log('Bits read: ', readStream.bytesRead);
                resolve(streamArray);
            }).on('close', function () {
                console.log('Close stream.');
            }).on('error', function (err) {
                reject(err);
            });
            
        });
    }

    const result = await getFileStream(filePath);
    console.log('Stream array is: ', result);

    // Create write stream via PIPING
    const readStream = fs.createReadStream(filePath, { highWaterMark: 1 });
    const writeStream = fs.createWriteStream('./test/dir1/rename.txt', { highWaterMark: 2, flags: 'a' });

    async function writeFileStreamFromReadStream(readStream, writeStream) {
        console.log('\nThere is a PIPING:\n');

        return new Promise((resolve, reject) => {
            writeStream.on('open', function (fd) {
                console.log('Open write stream: ', fd);
            }).on('ready', function () {
                console.log('Write stream is ready.');
            }).on('pipe', function (src) {
                console.log('There is a write stream piping.');
                src.on('data', function (chunk) {
                    console.log('Data fromm piping: ', chunk.toString());
                });
            }).on('finish', function () {
                console.log('Finish of write stream.');
                console.log('Path is: ', writeStream.path);
                console.log('Bits written: ', writeStream.bytesWritten);
                resolve(writeStream);
            }).on('close', function () {
                console.log('Close write stream.');
            }).on('error', function (err) {
                reject(err);
            });

            readStream.pipe(writeStream);
        });
    }

    await writeFileStreamFromReadStream(readStream, writeStream);

    async function writeFileStream(path, data, options = { highWaterMark: 2, flags: 'a' }) {
        console.log('\nThere is WRITESTREAM:\n');
        const writeStream = fs.createWriteStream(path, { ...options });

        return new Promise((resolve, reject) => {
            writeStream.on('open', function (fd) {
                    console.log('Open the second write stream: ', fd);
                }).on('ready', function () {
                    console.log('Write the second stream is ready.');
                }).on('finish', function () {
                    console.log('Finish of the second write stream.');
                    console.log('Path is: ', writeStream.path);
                    console.log('Bits written: ', writeStream.bytesWritten);
                    resolve();
                }).on('close', function () {
                    console.log('Close the second write stream.');
                }).on('error', function (err) {
                    reject(err);
            });

            writeStream.write(data);
            writeStream.end('End of the stream.\n');
        });
    }

    const dataToWrite = 'Write stream to the file (append).\n';
    await writeFileStream('./test/dir1/rename.txt', dataToWrite);

    // Pipe two writestreams
    

})('test/dir1');