const net = require('net');

const connect = function() {
  console.log("Connecting...");
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });
  
  conn.setEncoding('utf8');

  conn.on('data', data => {
    console.log(data);
  });

  conn.on('connect', () => {
    console.log("Connected to server!");
    conn.write("Name: EK♪");
  });
  
  return conn;
};

module.exports = connect;