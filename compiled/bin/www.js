#!/usr/bin/env node
'use strict';

var _app = require('../app');

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _socket = require('socket.io');

var _socket2 = _interopRequireDefault(_socket);

var _sockets = require('../sockets');

var _expressSocket = require('express-socket.io-session');

var _expressSocket2 = _interopRequireDefault(_expressSocket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Module dependencies.
 */

var debug = (0, _debug2.default)('new-folder:server');

// Handler socker server


/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '5000');
_app.app.set('port', port);

/**
 * Create HTTP server.
 */

var server = _http2.default.createServer(_app.app);

var io = (0, _socket2.default)(server).use((0, _expressSocket2.default)(_app.session));

(0, _sockets.attachSockets)(io);
/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port, _ => {
  console.log(`app listen in port: ${port}`);
});
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
//# sourceMappingURL=www.js.map