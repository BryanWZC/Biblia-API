import { versionDict, versionLongDict, books, bookNames, booksChapters } from './ref';
import React from 'react';

function BaseURL(){
    return(
        <div className='base-url'>
            <h3>GET  <code>https://www.xxx.com</code></h3>
        </div>
    );
}

function Methods(){
    return(
        <div className='methods'>
            <h4><code>method</code>  Different query methods</h4>
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
        </div>
    );
}

function BibleCode(){
    const versions = versionDict;
    const keys = Object.keys(versions);
    const versionArr = keys.map(key => {
        return( <tr>
                    <td><code>{key}</code></td>
                    <td>{versionLongDict[key]}</td>
                </tr>
        );
    });
    return(
        <div className='bible-code'>
            <h4><code>version</code>&nbsp;&nbsp;Bible version</h4>
            <table className='bible-versions-table'>
                <tr>
                    <th>Version code</th>
                    <th>Version name</th>
                </tr>
                {versionArr}
            </table>
        </div>
    );
}

function BookCode(){
    const bookArr = books.map((code, index)=> {
        return( <tr>
                    <td><code>{index}</code></td>
                    <td><code>{code}</code></td>
                    <td>{bookNames[index]}</td>
                </tr>
        );
    });
    return(
        <div className='book-code'>
            <h4><code>book-index</code>  Bible book index - (2) "comma" separated inputs needed for start and end</h4>
            <h4><code>book</code>  Bible book code</h4>
            <table className='bible-book-table'>
                <tr>
                    <th>Book index</th>
                    <th>Book code</th>
                    <th>Book name</th>
                </tr>
                {bookArr}
            </table>
        </div>
    );
}

function ChapterCode(){
    return(
        <div className='chapter-code'>
            <h4><code>cStart</code>  start of the chapter</h4>
            <h4><code>cEnd</code>  end of the chapter(inclusive)</h4>
        </div>
    );
}

function VerseCode(){
    return(
        <div className='verse-code'>
            <h4><code>vStart</code>  start of the verse</h4>
            <h4><code>vEnd</code>  end of the verse(inclusive)</h4>
        </div>
    );
}

export { BaseURL, Methods, BibleCode, BookCode, ChapterCode, VerseCode };