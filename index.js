const PDFDocument = require('pdfkit');
const fs = require('fs');
const doc = new PDFDocument;
doc.pipe(fs.createWriteStream('output.pdf'));

doc.image('./logo.jpg', {
    fit: [100, 150],
    align: 'right'
});
doc.end();