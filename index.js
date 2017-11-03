'use-strict';

const fs =  require('fs');
const Mustache = require('mustache');
const pdf = require('html-pdf');

const template =fs.readFileSync('./template.html', 'utf8')

const view = {
    "stooges": [
        { "name": "Moe" },
        { "name": "Larry" },
        { "name": "Curly" }
    ],
    title: "HTML title"
}

const html = Mustache.render(template,view);

pdf.create(html).toFile('./testpdf.pdf', function(err, res){
    console.log(res.filename);
});

process.w