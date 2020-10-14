const {
    bookNames,
    books,
} = require('./ref');

/**
 * Converts a single chapter into PDF
 * @param {Object} chapters - Contains the search result for a book in object form
 * @param {Object} doc - PDF document object used to manipulate the pdf output
 * @return {Null} 
 */
async function convertToPDF(chapters, doc){
    const index = books.indexOf(chapters.book);
    const longName = bookNames[index];
    const start = chapters['start-chapter'];
    const end = chapters['end-chapter'];
    const chapterArr = chapters.content;
    const chapterRange = start === end ? `(Chapter ${start})` : `(Chapters ${start} - ${end})`;

    doc.fillColor('#5C80BC').fontSize(32).font('Helvetica-Bold').text(longName);
    doc.fillColor('#444444').font('Helvetica').fontSize(10).text(chapterRange).moveDown(4);
    
    chapterArr.forEach(chapter => {
        doc.fillColor('#DF9A57').fontSize(20).text(`Chapter ${chapter.chapter}`).moveDown(0.8);
        const keys = Object.keys(chapter.verses).sort((a, b) => Number(a.slice(1)) > Number(b.slice(1)));
        let combined = '';
        keys.forEach(key => {
            const numKey = key.slice(1);
            combined += `${numKey} ${chapter.verses[key]} `;
        })
        doc.fillColor('#444444').fontSize(14).text(combined, {
            column: 1,
            align: 'justify',
            lineGap: 5,
            wordSpacing: 0.5,
            characterSpacing: 0.2
        }).moveDown();
    })
}

module.exports = {
    convertToPDF
}