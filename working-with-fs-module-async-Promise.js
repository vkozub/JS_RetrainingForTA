const path = require('node:path');
const fs = require('node:fs/promises');
const { Buffer } = require('node:buffer');

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
    const copyFileName2 = path.join(testDirPath, 'file2.txt');
    try {
        await fs.access(filePath, fs.constants.R_OK);
        await fs.copyFile(filePath, copyFileName);
        await fs.copyFile(filePath, copyFileName2);
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

    // Open directory
    // try {
    //     const dir = await fs.opendir(baseDir, { recursive: true });
    //     for await (const dirent of dir)
    //         console.log(dirent.name);
    // } catch (err) {
    //     console.error(err);
    // }

    // Read directory
    try {
        const dir = await fs.readdir(baseDir, { recursive: true, withFileTypes: true });
        for (const dirent of dir) {
            console.log(dirent);
            if (dirent.isFile()) {
                const fileContent = await fs.readFile(path.join(dirent.parentPath, dirent.name), { encoding: 'utf8' });
                console.log(`File ${path.join(dirent.parentPath, dirent.name)} content:\n`, fileContent);
            } else if (dirent.isDirectory()) {
                console.log('Directory name is: ', dirent.name);
            }
        }
    } catch (err) {
        console.error(err);
    }
    
    // Create new HARD link from file path
    // await fs.link(filePath, './linkNew');
    // console.log('Link statistics:\n', await fs.lstat('./linkNew'));

    // Create new SYM link from file path
    await fs.symlink(filePath, './linkNew');
    console.log('Link statistics:\n', await fs.lstat('./linkNew'));

    // Read SYM link content
    const linkTarget = await fs.readlink('./linkNew');
    console.warn(linkTarget);

    // Unlink SYM link from file path
    try {
        await fs.unlink('./linkNew');
        console.log('Unlinked successfully.');
    } catch (e) {
        console.error(e);
    }

    // Using realpath
    try {
        await fs.realpath(filePath);
        console.log('Path is real.');
    } catch (e) {
        console.error(e);
    }

    // Remove empty directory
    try {
        await fs.unlink(copyFileName);
        await fs.unlink(copyFileName2);
        await fs.rmdir(testDirPath);
        console.log('Directory was removed successfully.');
    } catch (e) {
        console.error(e);
    }

    // Remove directory recursively
    try {
        await fs.rm(baseDir, { recursive: true, force: true });
        console.log('Directory was recursively removed successfully.');
    } catch (e) {
        console.error(e);
    }

})('test/dir1');