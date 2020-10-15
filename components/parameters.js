import { versionDict, versionLongDict, books, bookNames, booksChapters } from './ref';
import React, { useState } from 'react';

function Demo(){
    const baseUrl = 'https://biblia-api-pdf.herokuapp.com/api?';
    const [text, setText] = useState('');
    const [result, setResult] = useState('');
    return(
        <div className='demo'>
            <div className='url'>
                <h3>GET</h3>
                <code>{baseUrl}</code>
                <input type='text' id='example' name='example' value={text} onChange={(event) => setText(event.target.value)}></input>
                <input type='submit' id='submit' name='submit' onClick={() => {
                    const url = baseUrl + text;
                    if(url.includes('biblePDF')) window.location.replace(url);
                    else fetch(url)
                            .then(res => res.json())
                            .then(res => setResult(JSON.stringify(res, null, 2)))
                            .catch(err => setResult('{"error": "Input error. Please try again."}'));
                }}></input>
            </div>
            <div className='results-title'>
                <h4>Results:</h4>
            </div>
            <div className='results'>
                <h4><pre>{result}</pre></h4>
            </div>
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
            <h4><code>bkStart</code>  Starting bible book index</h4>
            <h4><code>bkEnd</code>  Ending bible book index(inclusive)</h4>
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

export { Demo, Methods, BibleCode, BookCode, ChapterCode, VerseCode };