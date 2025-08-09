
const fs = require('fs');


function createFile(filename, content) {
    fs.writeFile(filename, content, (err) => {
        if (err) {
            console.error('❌ Error creating file:', err);
        } else {
            console.log('✅ File created successfully!');
        }
    });
}


function readFile(filename) {
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            console.error('❌ Error reading file:', err);
        } else {
            console.log('📄 File content:', data);
        }
    });
}


function appendToFile(filename, content) {
    fs.appendFile(filename, content, (err) => {
        if (err) {
            console.error('❌ Error appending to file:', err);
        } else {
            console.log('✅ Content appended successfully!');
        }
    });
}


function deleteFile(filename) {
    fs.unlink(filename, (err) => {
        if (err) {
            console.error(' Error deleting file:', err);
        } else {
            console.log(' File deleted successfully!');
        }
    });
}


function createDirectory(dirname) {
    fs.mkdir(dirname, (err) => {
        if (err) {
            console.error(' Error creating directory:', err);
        } else {
            console.log(' Directory created successfully!');
        }
    });
}


createFile('test.txt', '... ');
readFile('test.txt');
appendToFile('test.txt', '\n...');
deleteFile('test.txt');
createDirectory('newFolder');
