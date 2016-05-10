'use strict';

const marked = require('marked');

let table = `<table><tr><th>head</th></tr>
<tr><td>data</td></tr></table>`;



console.log('match', marked(table));