const stream = require('stream');
const { Readable } = require('stream')
const { promisify } = require('util');
const pipeline = promisify(stream.pipeline);
const fs = require('fs');

// Functions below handles text file and stream functions from getChaptersTXT in main.js

/**
 * Clears the txt file
 * @param  {String} fileName - Name of the file to overwrite
 * @return {Null} 
 */
async function clearTXT(fileName){
    fs.writeFile(fileName, '', err => {
        if(err) throw err;
    });
}

/**
 * Allows for a book result to be streamed to a txt file
 * @param {Object} book     - Book object containing entire chapter data for a specific book 
 * @param {String} fileName - Name of file to which streaming to occurs 
 */
async function streamBook(book, fileName){
    const readable = Readable.from([book.toString()]);
    await pipeline(
        readable,
        fs.createWriteStream(path.join(__dirname,`../downloads/${fileName}`), { flags: 'a' })
    );
    
}

module.exports = {
    clearTXT,
    streamBook
}