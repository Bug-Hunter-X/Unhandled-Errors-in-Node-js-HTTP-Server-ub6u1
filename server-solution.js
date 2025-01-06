const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

// Improved error handling
server.on('error', (err) => {
  console.error('Server error:', err);
  // Add appropriate error handling logic here, such as logging to a file or retrying the server
});

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});
