let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};
const handleUserInput = function(key) {
  switch (key) {
    case '\u001b[D':
      connection.write("Move: left");
      break;
    case '\u001b[A':
      connection.write("Move: up");
      break;
    case '\u001b[C':
      connection.write("Move: right");
      break;
    case '\u001b[B':
      connection.write("Move: down");
      break;
    case 'y':
      connection.write("Say: Gobble gobble!");
      break;
    case 'h':
      connection.write("Say: Look ma, no hands!");
      break;
    case 'n':
      connection.write("Say: That's right!");
      break;
    case 'm':
      connection.write("Say: t('-t')");
      break;
    case '\u0003':
      connection.write("Quit game");
      process.exit();
  }
};

module.exports = { setupInput };