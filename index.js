const Parser = require('@postlight/parser');

const url = process.argv[2];
Parser.parse(url).then(result => console.log(result));
