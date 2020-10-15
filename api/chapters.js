const got = require('got');
const cheerio = require('cheerio');

// References for bible version, books and number of chapters per book
const {
    versionDict,
    books,
    booksChapters
} = require('./ref');

/**
 * Get chapters of a book from a specific version
 * @param  {Object}  query   - Contains a query object from which, version, bk, cStart and cEnd will be extracted
 * @return {Object}          - Returns an object of the book specified with the chapters specified (inclusive of cEnd)
 */
async function getChapters(query) {
    try {
        const { bk, cStart, cEnd } = query;
        const book = books.includes(bk.toUpperCase()) ? bk : 'GEN';
        const result = {
            book,
            'start-chapter': cStart,
            'end-chapter': cEnd,
            content: []
        };
        if(!checkChapLogic(book, cStart, cEnd)) throw 'error';

        for(let chapter = cStart; chapter <= cEnd; chapter++){
            const site = getSite(query, chapter);
            const verseObj = await getVerseObj(site);
            const verses = await getChapterVerses(verseObj);
            result.content.push({
                chapter,
                verses
            })
        }
        return result;
    } catch (error) {
        return {error: 'Input error. Please try again.'};
    }
}

/**
 * Get the website from which to web scrape from based on query parameters and current chapter
 * @param  {Object}  query      - Contains query parameters set such as version and bk (book of the bible) 
 * @param  {String} chapter     - Current chapter of the book
 * @return {String}             - Url to the website from which web scrapping occurs
 */
function getSite(query, chapter){
    const { version, bk } = query;
    const baseUrl = 'https://www.bible.com/bible/';
    const versionId =  versionDict[version.toUpperCase()] || '111';
    const book = books.includes(bk.toUpperCase()) ? bk : 'GEN';
    const site = `${baseUrl}${versionId}/${book}.${chapter}.${version}`;
    return site;
}

/**
 * Get verses for a specific chapter of a book
 * @param  {Object} verseObj - Object provided from cheerio that contains verse data to parse
 * @return {Object}          - chapter object that has the verses in the form of 'v1' or 'v10' as keys and text content verses as values
 */
function getChapterVerses(verseObj) {
    const chapter = {};
    for(let i = 0; i < verseObj.length; i++){
        const verse = verseObj[i].children[0].data.trim();
        let className = verseObj[i].parent.attribs.class;
        let id;
        if(className === 'wj') className = verseObj[i].parent.parent.attribs.class;
        if(className === 'nd') className = verseObj[i].parent.parent.attribs.class;
        id = className.match(/v[\d]+/)[0];
        if(chapter[id]) chapter[id] = `${chapter[id]} ${verse}`;
        else chapter[id] = verse;
    }
    return chapter;
}

/**
 * Obtain html from site and convert into cheerio object that targets .content classes within .verse classes
 * @param  {String} site - url of the site to be scraped 
 * @return {Object}      - cheerio object containing data related to verses
 */
async function getVerseObj(site){
    const res = await got(site);
    const $ = cheerio.load(res.body);
    const verseObj = $('.chapter').find('.verse > .content, .wj > .content, .nd > .content');
    return verseObj;
}

/**
 * Checks chapter input logic to see if it is iterable and within the bounds of the total number of chapters within a given book
 * @param  {String}  book   - The book code. For example, 'GEN' for Genesis 
 * @param  {String} cStart  - Starting book chapter 
 * @param  {String} cEnd    - Ending book chapter 
 * @return {Boolean}        - Returns true if logic is correct
 */
function checkChapLogic(book, cStart, cEnd){
    const index = books.indexOf(book);
    const totalChaps = booksChapters[index];
    return cStart > 0 && cEnd > 0 && cEnd >= cStart && cEnd <= totalChaps;
}

module.exports = {
    getChapters
}