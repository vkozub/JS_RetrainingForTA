const path = require('node:path');
const fs = require('node:fs/promises');
const { Buffer, constants } = require('node:buffer');

(async (testDirPath) => {

    // Get path as Buffer object
    const testDirBuf = Buffer.from(testDirPath);

    // Create a test directory with sub directories
    async function makeDirectory(dirPath) {
        try {
            const baseDir = await fs.mkdir(dirPath, { recursive: true });
            console.log('Created base directory successfully: ', baseDir);
            return baseDir;
        } catch (e) {
            console.warn('Failed to create base directory: ', e);
            throw e;
        }
    }

    const baseDir = await makeDirectory(testDirBuf);

    // Write new file
    const fileName = 'file.txt';
    const filePath = path.join(baseDir, fileName);
    console.log(filePath);
    const fileData = 'Write data to the new file.\n';

    async function writeFileAsync(filePath2, fileData2) {
        let fd;
        try {
            fd = await fs.open(filePath2, 'w');
            console.log("File has been opened successfully: ", await fd.stat());
            await fd.writeFile(fileData2);
            // await fs.writeFile(filePath2, fileData2);
            console.log("File has been written successfully: ", await fd.stat());
        } catch (error) {
            console.error('Error occured while file writing.');
            throw error;
        } finally {
            fd?.close();
        }
    };

    await writeFileAsync(filePath, fileData);

    // Truncate the file
    await fs.truncate(filePath);

    // verify whether file is accessible and append data to it
    try {
        await fs.access(filePath, fs.constants.R_OK | fs.constants.W_OK);
        console.log('Can access created file.');
        const fileData3 = 'Append data to the new file by descriptor.\n';
        await fs.appendFile(filePath, fileData3);
        console.log('Data has been added to the file successfully.');
    } catch (error) {
        console.log('Cannot access: ', error)
    }

    // Copy the file
    const copyFileName = path.join(testDirPath, fileName);
    try {
        await fs.access(filePath, fs.constants.R_OK);
        await fs.copyFile(filePath, copyFileName);
        console.log('File has been copied successfully.');
    } catch (error) {
        console.log('File cannot be copied: ', error)
    }

    // Copy whole directory recursively
    // try {
    //     await fs.cp(baseDir, './testCopy', { recursive: true });
    //     console.log('Dir has been copied successfully.');
    // } catch (error) {
    //     console.log('Dir was not copied: ', error)
    // }

    // Create new link from file path
    // await fs.link(filePath, './linkNew');
    // console.log(await fs.lstat('./linkNew'));
    

// console.log('Using realpathSync: ', fs.realpathSync('test/file.txt'));

// Read the file
// let fd;
// try {
//     fs.accessSync(filePath, fs.constants.R_OK);
//     const data = fs.readFileSync(filePath, { encoding: 'utf8' });
//     console.log(data);

//     fd = fs.openSync(filePath, 'r');
//     const fileBuf = Buffer.alloc(256);
//     fs.readSync(fd, fileBuf);
//     console.log('New buffer after reading:\n', fileBuf.toString());

//     console.log(fs.fstatSync(fd));
//     console.log(fs.statSync('test'));
//     console.log(fs.statfsSync(filePath));
// } catch(err) {
//     console.error("File is not opened for reading");
// } finally {
//     if (fd !== undefined)
//         fs.closeSync(fd);
// }

// Create symbolic link
// fs.symlinkSync('test/dir1/file.txt', 'symlink.txt');

// Unlink the link
// fs.unlinkSync('symlink.txt');
// Unlink the file
// fs.unlinkSync('test/dir1/file.txt');

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
// console.log(fs.readdirSync(baseDir, { recursive: true }));

// Copy the directory
// const copyDirName = path.join('testCopyDir');
// fs.cpSync(baseDir, copyDirName, { recursive: true });

// Remove the test directory
// fs.rmSync(baseDir, { recursive: true, force: true });
// fs.rmSync(copyDirName, { recursive: true, force: true });
})('test/dir1');