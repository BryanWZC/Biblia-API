import { versionDict, versionLongDict, books, bookNames, booksChapters } from './ref';
import React from 'react';

function Methods(){
    return(
        <React.Fragment>
            <h4><code>method</code>&nbsp;&nbsp;Different query methods</h4>
            <table className='bible-versions-table'>
                <tr>
                    <th>Method</th>
                    <th>Description</th>
                    <th>Parameters required</th>
                </tr>
                <tr>
                    <td><code>bible</code></td>
                    <td>Produces a JSON with results from a search query. Chapters and verses are filtered.</td>
                    <td>version, book, chapter(cStart, cEnd), verse(vStart, vEnd)</td>
                </tr>
                <tr>
                    <td><code>bibleChapters</code></td>
                    <td>Produces a JSON result of filtered chapters based on query parameters.</td>
                    <td>version, book, chapter(cStart, cEnd)</td>
                </tr>
                <tr>
                    <td><code>bibleChaptersTXT</code></td>
                    <td>Downloads a text file filled with results from the bible query.</td>
                    <td>version, book, chapter(cStart, cEnd)</td>
                </tr>
                <tr>
                    <td><code>biblePDF</code></td>
                    <td>Downloads a bible search results and properly format it as a PDF.</td>
                    <td>version, book-index(bkStart, bkEnd), chapter(cStart, cEnd)</td>
                </tr>
            </table>
        </React.Fragment>
    );
}

function BibleCode(){
    const versions = versionDict;
    const keys = Object.keys(versions);
    const versionArr = keys.map(key => {
        return( <tr>
                    <td>{key}</td>
                    <td>{versionLongDict[key]}</td>
                </tr>
        );
    });
    return(
        <React.Fragment>
            <h4><code>version</code>&nbsp;&nbsp;Bible version</h4>
            <table className='bible-versions-table'>
                <tr>
                    <th>Version code</th>
                    <th>Version name</th>
                </tr>
                {versionArr}
            </table>
        </React.Fragment>
    );
}

function BookCode(){
    const bookArr = books.map((code, index)=> {
        return( <tr>
                    <td>{index}</td>
                    <td>{code}</td>
                    <td>{bookNames[index]}</td>
                </tr>
        );
    });
    return(
        <React.Fragment>
            <h4><code>book-index</code>&nbsp;&nbsp;Bible book index</h4>
            <h4><code>book</code>&nbsp;&nbsp;Bible book</h4>
            <table className='bible-book-table'>
                <tr>
                    <th>Book index</th>
                    <th>Book code</th>
                    <th>Book name</th>
                </tr>
                {bookArr}
            </table>
        </React.Fragment>
    );
}

function ChapterCode(){
    return(
        <React.Fragment>
            <h4><code>chapter</code>&nbsp;&nbsp;Chapter parameters</h4>
            <table className='bible-chapter-table'>
                <tr>
                    <th>Chapter parameter</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td><code>cStart</code></td>
                    <td>start of the chapter</td>
                </tr>
                <tr>
                    <td><code>cEnd</code></td>
                    <td>end of the chapter(inclusive)</td>
                </tr>
            </table>
        </React.Fragment>
    );
}

function VerseCode(){
    return(
        <React.Fragment>
            <h4><code>verse</code>&nbsp;&nbsp;Verse parameters</h4>
            <table className='bible-verse-table'>
                <tr>
                    <th>Verse parameter</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td><code>vStart</code></td>
                    <td>start of the verse</td>
                </tr>
                <tr>
                    <td><code>vEnd</code></td>
                    <td>end of the verse(inclusive)</td>
                </tr>
            </table>
        </React.Fragment>
    );
}

export {Methods, BibleCode, BookCode, ChapterCode, VerseCode };