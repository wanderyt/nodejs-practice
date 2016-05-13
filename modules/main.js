var fs = require("fs");

var testReadFile = function() {
    fs.readFile("././input.txt", function(err, data) {
        if (err) {
            console.error(err);
        } else {
            console.log(data.toString());
        }
    });

    console.log("Executed...");
};

module.exports = {
    testReadFile: testReadFile
};
