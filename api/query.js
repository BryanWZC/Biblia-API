const { books, booksChapters } = require('./ref');

/**
 * Converts query into newQuery object based on current book index within the range of start and end
 * @param  {Object} {query, i, start, end} - Object containing the original query parameters, current index, start book index and ending book index
 * @return {Object} newQuery            - newQuery Object to be used 
 */
function configQuery({query, i, start, end}){
    let newQuery = {...query};

    if(i === start) newQuery.cEnd = booksChapters[i];
    if(i === end) {
        newQuery.cStart = 1;
        newQuery.cEnd = query.cEnd;
    }
    if(i === start && i === end) newQuery = {...query};
    if(i !== start && i !== end) {
        newQuery.cStart = 1;
        newQuery.cEnd = booksChapters[i]
    }
    newQuery.bk = books[i];
    return newQuery
}

module.exports = {
    configQuery
}