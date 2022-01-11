// os, path

const os = require('os');
const path = require('path');

// console.log(os.homedir());
// console.log(os.hostname());
// console.log(os.userInfo());
// console.log(os.totalmem());

const extensionName = path.extname('index.html');
const joinName = path.join(__dirname + '/lesson3_os_path/os_path.txt');
console.log("~ joinName", joinName);
