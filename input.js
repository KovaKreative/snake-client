const { ENCODING } = require("./constants");

let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding(ENCODING);
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

let intervalID;

const handleUserInput = function(key) {
  if (key === '\u0003') {
    console.log("Quit game");
    process.exit();
  }

  let move = null;

  switch (key) {
    case '\u001b[D':
      move = "Move: left"
      break;
    case '\u001b[A':
      move = "Move: up";
      break;
    case '\u001b[C':
      move = "Move: right";
      break;
    case '\u001b[B':
      move = "Move: down";
      break;
    case 'y':
      connection.write("Say: Eric in da house!");
      break;
      case 'h':
      connection.write("Say: Gobble gobble!");
      break;
    case 'n':
      connection.write("Say: That's right!");
      break;
    case 'm':
      connection.write("Say: t('-t')");
      break;
  }

  if(move) {
    clearInterval(intervalID);
    intervalID = null;
    intervalID = setInterval(() => {
      connection.write(move);
    }, 100);
  }


};

module.exports = { setupInput };