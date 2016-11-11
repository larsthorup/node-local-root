var path = require('path');

// Note: with npm, this module will be in node_modules/@larsthorup/root
// Note: with zeit.co/now, this module will be in node_modules/<random-id>
var rootInstallPath = path.basename(__dirname) === 'root' ? '../..' : '..';

// Note: we assume that @larsthorup/root is installed from package.json in the root folder
var root = path.join(__dirname, '..', rootInstallPath);

module.exports = root;
