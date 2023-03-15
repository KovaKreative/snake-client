const { stdin } = require('process');
const connect = require('./client');

connect();

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const handleUserInput = function(key) {
  if (key === '\u0003') {
    console.log("Quit game");
    process.exit();
  }
};

setupInput();

stdin.on('data', handleUserInput);