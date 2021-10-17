const chalk = require('chalk');

const message = (text) => chalk.blue.bgWhite.bold(text);
const alertMessage = (text) => chalk.red(text);


module.exports = {
   message, alertMessage
};