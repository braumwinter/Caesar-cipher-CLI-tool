const {
    Command
} = require('commander');
const program = new Command();

module.exports.getConsoleData = function () {
    program
        .option('-s, --shift <value>', 'shift symbols')
        .option('-i, --input <type>', 'input file')
        .option('-o, --output <value>', 'output file')
        .option('-a, --action <type>', 'encode or decode');

    program.parse(process.argv);

    const options = program.opts();
    return options;
}