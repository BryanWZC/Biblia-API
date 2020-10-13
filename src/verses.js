/**
 * Get user defined verses based on a specific book, version, chapter(s) and verse range 
 * @param  {Object} query    - Object containing query parameters such as bible version and book title
 * @param  {Object} chapters - Object result from getChapters() function showing chapters of verses as per query 
 * @return {Object}          - Filtered chapters object showing only the verses as per query
 */
function getDefinedVerses(query, chapters) {
    try {
    return chapters.content.map(chapterObj => {
        const chapter = chapterObj.chapter;
        const verses = chapterObj.verses;
        if (chapter === cStart && chapter === cEnd) return filterVerses({ chapter, verses, vStart, vEnd});
        if (chapter === cStart) return filterVerses({ chapter, verses, vStart});
        if (chapter === cEnd) return filterVerses({ chapter, verses, vEnd });
        return chapterObj;
    });
    } catch (error) {
        return {error: 'Input error. Please try again.'};
    }
}

/**
 * Filters verses within a chapter object to return what the user specifies
 * @param {Object} { chapter, verses, vStart, vEnd } - Object with filter parameters. only one of vStart or vEnd can be within the object.
 * @return                                           - filtered chapter object
 */
function filterVerses({ chapter, verses, vStart, vEnd }) {
    return {
        chapter, 
        verses: Object.entries(verses).reduce((obj, verse) => {
            const verseNum = verse[0];
            const verseText = verse[1];
            if (!checkVersePosition({verseNum, vStart, vEnd})) return obj;
            obj[verseNum] = verseText;
            return obj
        }, {})
    };
}

/**
 * Checks to see if verse is within range specified by user
 * @param  {Object}  { verseNum, vStart, vEnd } - Parameters to check condition
 * @return {Boolean}                            - returns true if verse is within range specified by user
 */
function checkVersePosition({ verseNum, vStart, vEnd }) {
    const num = Number(verseNum.slice(1));
    if (vStart && vEnd) return num  >= vStart && num <= vEnd
    if (vStart) return num >= vStart;
    return num <= vEnd;
}

module.exports = {
    getDefinedVerses
}