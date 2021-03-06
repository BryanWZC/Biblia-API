const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const morgan = require('morgan');
const PDFDocument = require('pdfkit');
const cors = require('cors');
const path = require('path');


// Private modules
const port = process.env.PORT || 3000;
const {
    bible,
    bibleChapters
} = require('../api/main');
const { convertToPDF } = require('../api/pdf')
const { configQuery } = require('../api/query');

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.static('assets'));
app.use(cors());

// Express routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/dist/bundle.js', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/bundle.js'));
});

app.get('/api', async (req, res) => {
    try {
        const { method , version, book: bk , cStart, cEnd, vStart, vEnd, bkStart, bkEnd} = req.query;
        let query = { version, bk, cStart, cEnd, vStart, vEnd, bkStart, bkEnd};
        let result;

        if(method === 'bible') result = await bible(query);
        if(method === 'bibleChapters') result = await bibleChapters(query);
        if(method === 'bible' || method === 'bibleChapters') res.json(result);

        // Method from main.js in /api modified for serving file on heroku
        if(method === 'biblePDF'){
            const fileName = `bible-${Date.now()}.pdf`;
            res.attachment(fileName);
            const doc = new PDFDocument();
            const pdf = doc.pipe(res);

            query = { version, bkStart: Number(bkStart), bkEnd: Number(bkEnd), cStart: Number(cStart), cEnd: Number(cEnd) };
            const { bkStart: start, bkEnd: end } = query;
            
            for(let i = start; i < end + 1; i++){
                const newQuery = configQuery({query, i, start, end});
                const bookResults = await bibleChapters(newQuery);
                await convertToPDF(bookResults, doc);
            }
            doc.end();
            const endStream = new Promise((res, rej) => {
                pdf.on('finish', () => res('OK'));
                pdf.on('error', rej);
            });
            await endStream;
        }
    } catch (error) {
        res.json({error: 'Input error. Please try again.'});
    }
    });

app.listen(port, () =>{
    console.log(`server ready on ${port}`);
});
