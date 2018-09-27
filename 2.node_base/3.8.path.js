const path = require('path');

const string = __filename;

console.log('path.sep:',path.sep);
console.log('paht.delimiter:',path.delimiter);
console.log('---------------------------------------------');
console.log('path.dirname():',path.dirname(string));
console.log('path.extname():',path.extname(string));
console.log('path.basename():',path.basename(string));
console.log('path.basename():',path.basename(string, path.extname(string)));
console.log('---------------------------------------------');
console.log('path.parse():',path.parse('string'));
console.log('path.format():',path.format({
    dir:'C:\\node_js2',
    name:'path',
    ext:'.js',
}));
console.log('path.normalize():',path.normalize('C://node_js2\\\\2.node_base\\\path.js'));
console.log('path.isAbsolute():',path.isAbsolute('C:\\'));
console.log('path.isAbsolute():',path.isAbsolute('./home'));
console.log('---------------------------------------------');
console.log('path.relative():',path.relative('C:\\node_js2\\path.js', 'C:\\'));
console.log('path.join():',path.join(__dirname, '..', '..', '/users', '.', '/node_js2'));
console.log('path.resolve():',path.resolve(__dirname, '..', 'users', '.', '/node_js2'));


