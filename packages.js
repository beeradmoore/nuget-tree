var path = require('path');
var fs = require('fs');
var os = require('os');

module.exports.findPackageFolder = function(dir){
    var parts = dir.split(path.sep);
    while (parts.length > 0){
        testPath = path.join(parts.join(path.sep), 'packages');
        if (fs.existsSync(testPath)) return testPath;
        parts.pop();
    }
    var alternatePath = path.join(os.homedir(), '.nuget', 'packages');
    if (fs.existsSync(alternatePath)) return alternatePath;
    return false;
}
