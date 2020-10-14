const { books, bookNames } = require('./ref');
// Handles string functions.

/**
 * Modified toString function for bibleChaptersTXT in main.js
 * @return {Null}
 */
function bookResultStr(){
    const bookIndex = books.indexOf(this.book);
    const longBookName = bookNames[bookIndex];
    let combined = `____________________________________________________________\n\n${longBookName}\n\nStart: Chapter ${this['start-chapter']}\nEnd: Chapter ${this['end-chapter']}\n`;
    this.content.forEach(chapter => {
        const chapterNum = chapter.chapter;
        const verses = chapter.verses;
        combined += `\nChapter ${chapterNum}\n`
        const keys = Object.keys(verses).sort((a,b) => Number(a.slice(1)) > Number(b.slice(1)));
        keys.map(key => combined += `${key.padEnd(4)} ${chapter.verses[key]}\n`);
    });
    return combined;
}

module.exports = {
    bookResultStr
}