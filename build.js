'use strict';

const marked = require('marked');
const fs = require('fs-extra');
const path = require('path');
const sourcDir = './outline';
const targetDir = './build';
const htmlTemplate = path.join(targetDir, 'index.html');
const htmlFile = path.join(targetDir, 'presentation.html');

let outline = fs.readdirSync(sourcDir);
let sheets = outline.map((file) => {
	let markdown = fs.readFileSync(path.join(sourcDir, file), 'utf8');
	markdown = markdown.replace(/\n/g, '\n\n');

	let html = '';

	markdown // split after h2 headings
	.replace(/\n##/g, '<SEC>\n##').split('<SEC>')
	// Split at '---''
	.reduce((sections, section) => {
		return sections.concat(section.split('\n---'));
	}, [])
	// Put it all in section elements
	.forEach((section) =>{
		let data = section.match(/{({[^}]*})}/);
		let attrs = ''
		if (data) {
			section = section.replace(data[0], '');
			data = JSON.parse(data[1]);
			attrs = Object.keys(data).reduce( (attrs, key) => {
				return attrs + ' ' + key + '="' + data[key] + '"';
			}, "");
		}
		html += '<section' + attrs + '>\n' + marked(section) + '\n</section>\n';
	});

	return html;
});

let html = '<section>\n' +
	sheets.join('</section>\n<section>\n') +
	'\n</section>';

let template = fs.readFileSync(htmlTemplate, 'utf8');

html = template.replace('<!-- content -->', html);

fs.writeFileSync(htmlFile, html, 'utf8');

console.log('creating file', htmlFile);