import React from 'react';
import { Methods, BibleCode, BookCode, ChapterCode, VerseCode }from './parameters';

function FrontPage(){
    return(
        <div className='front-page'>
            <Heading />
            <Details />
            <Example />
        </div>
    );
}

function Heading(){
    return(
        <div className='heading'>
            <h1 className='heading-title'>
                Bible API and PDF converter
            </h1>
            <p className='heading-desc'>
                <strong>Description:</strong> A bible API that returns search results of verses in JSON format based on search parameters given. Also, the results can be extracted onto a PDF, to be downloaded and saved.
            </p>
        </div>
    );
}

function Details(){
    return(
        <div className='details'>
            <h3 className='details-base-URL'>Base Url</h3>
                <p>BASE URL: <code>https://www.xxx.com</code></p>
            <h3>Input Parameters:</h3>
                <Methods />
                <BibleCode />
                <BookCode />
                <ChapterCode />
                <VerseCode />
        </div>
    );
}

function Example(){
    return(
        <div className='example'>
            <code>https://www.XXX.xom?method=bible&version=NIV&book=GEN&cStart=1&cEnd=1&vStart=1&vEnd=1</code>
            <p className='example-explain'>The above string results in a search result of only the first verse of the book, 'Genesis'. See outputbelow.</p>
        </div>
    );
}

export default FrontPage