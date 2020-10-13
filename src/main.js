const { getChapters } = require('./chapters');
const { getDefinedVerses } = require('./verses');

/**
 * Produces an object with results from a search query of a book, version, chapter and verse start, and chapter and verse end. Verses are filtered in this result.
 * @param  {Object} query - query object
 * @return {Object}       - result object
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
 * @param  {Object} query - query object
 * @return {Object}       - result object
 */
async function bibleChapters(query){
    const chapters = await getChapters(query);
    return chapters;
}

module.exports = {
    bible,
    bibleChapters
}