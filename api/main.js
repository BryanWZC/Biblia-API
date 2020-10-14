const { getChapters } = require('./chapters');
const { getDefinedVerses } = require('./verses');
const { clearTXT, streamBook } = require('./stream');
const { bookResultStr } = require('./string');
const { configQuery } = require('./query');
const { convertToPDF } = require('./pdf');

const PDFDocument = require('pdfkit');
const fs = require('fs');

/**
 * Produces an object with results from a search query of a book, version, chapter and verse start, and chapter and verse end. Verses are filtered in this result.
 * @param  {Object} query  - query object
 * @return {Object} verses - result object
 */
async function bible(query) {
    try {
        const { version, bk, cStart, vStart, cEnd, vEnd } = query;
        const chapters = await getChapters(query);
        const verses = getDefinedVerses(query, chapters);
        return verses;
    } catch (error) {
        return {error: 'Input error. Please try again.'}; 
    }
}

/**
 * Produces a result of filtered chapters based on query parameters
 * @param  {Object} query    - query object
 * @return {Object} chapters - result object
 */
async function bibleChapters(query){
    try {
        const chapters = await getChapters(query);
        return chapters;
    } catch (error) {
        return {error: 'Input error. Please try again.'};
    }
}

/**
 * Produces a text file filled with results from the bible query. Defaults to bible.txt
 * @param  {Object} query - Query object to get chapters
 * @return {Null} 
 */
async function bibleChaptersTXT(query){
    const { bkStart: start, bkEnd: end } = query;
    const fileName = 'bible.txt';
    
    await clearTXT(fileName);

    for(let i = start; i < end + 1; i++){
        const newQuery = configQuery({query, i, start, end});
        const bookResults = await bibleChapters(newQuery);
        bookResults.toString = bookResultStr;
        await streamBook(bookResults, fileName);
    }
}

/**
 * Converts bible search results into a PDF
 * @param  {Object} query - Search query
 * @return {Null} 
 */
async function biblePDF(query){
    const { bkStart: start, bkEnd: end } = query;
    const doc = new PDFDocument();
    doc.pipe(fs.createWriteStream('bible.pdf'));

    for(let i = start; i < end + 1; i++){
        const newQuery = configQuery({query, i, start, end});
        const bookResults = await bibleChapters(newQuery);
        await convertToPDF(bookResults, doc);
    }
    doc.end();
}

module.exports = {
    bible,
    bibleChapters,
    bibleChaptersTXT,
    biblePDF
}

biblePDF({
    version: 'NIV',
    bkStart: 0,
    bkEnd: 1,
    cStart: 45,
    cEnd: 10
}).then(res => res)