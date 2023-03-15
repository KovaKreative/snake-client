const { IP, PORT, ENCODING } = require("./constants");
const net = require('net');

const connect = function() {
  console.log("Connecting...");
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding(ENCODING);

  conn.on('data', data => {
    console.log(data);
  });

  conn.on('connect', () => {
    console.log("Connected to server!");
    conn.write("Name: EK♪");
    // setInterval(() => {
    //   const directions = ["Move: up", "Move: down", "Move: left", "Move: right"];
    //   const index = Math.floor(directions.length * Math.random());
    //   conn.write(directions[index]);
    // }, 100);
  });

  return conn;
};

module.exports = connect;