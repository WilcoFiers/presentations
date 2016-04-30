'use strict';

const marked = require('marked');
const fs = require('fs-extra');
const path = require('path');
const sourcDir = './outline';
const targetDir = './build';
const htmlTemplate = path.join(targetDir, 'index.html');
const htmlFile = path.join(targetDir, 'presentation.html');

var outline = fs.readdirSync(sourcDir);
var sheets = outline.map((file) => {
	var markdown = fs.readFileSync(path.join(sourcDir, file), 'utf8');
	markdown = markdown.replace(/\n/g, '\n\n');

	var html = '';

	markdown // split after h2 headings
	.replace(/\n##/g, '<SEC>\n##').split('<SEC>')
	// Split at '---''
	.reduce((sections, section) => {
		return sections.concat(section.split('\n---'));
	}, [])
	// Put it all in section elements
	.forEach((section) =>{
		html += '<section>\n' + marked(section) + '\n</section>\n';
	});

	return html;
});

var html = '<section>\n' +
	sheets.join('</section>\n<section>\n') +
	'\n</section>';

var template = fs.readFileSync(htmlTemplate, 'utf8');

html = template.replace('<!-- content -->', html);

fs.writeFileSync(htmlFile, html, 'utf8');

console.log('creating file', htmlFile);