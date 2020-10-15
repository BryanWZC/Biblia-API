import React from 'react';
import { Demo, Methods, BibleCode, BookCode, ChapterCode, VerseCode } from './parameters';

function FrontPage(){
    return(
        <div className='front-page'>
            <Heading />
            <Details />
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
                <Demo />
            <h3 className='example-heading'>Example:</h3>
                <Example />
            <h3 className='input-heading'>Input Parameters:</h3>
                <Methods />
                <BibleCode />
                <BookCode />
                <ChapterCode />
                <VerseCode />
        </div>
    );
}

function Example(){
    const baseUrl = 'https://biblia-api-pdf.herokuapp.com/api?';
    return(
        <div className='example'>
            <h5>{baseUrl}<code>method</code>=bible&<code>version</code>=NIV&<code>book</code>=GEN&<code>cStart</code>=1&<code>cEnd</code>=1&<code>vStart</code>=1&<code>vEnd</code>=1</h5>
        </div>
    );
}
export default FrontPage