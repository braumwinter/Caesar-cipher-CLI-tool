const fs = require('fs');
const {
    getConsoleData
} = require('./console_data');
const {
    transform
} = require('./transformation');

function main() {
    const consoleData = getConsoleData();

    const writeStream = fs.createWriteStream(consoleData.output);
    const readStream = fs.createReadStream(consoleData.input);
    readStream.on('data', function (data) {
        const transformedData = transform(consoleData, data.toString());
        writeStream.write(transformedData);
    });
}

main();