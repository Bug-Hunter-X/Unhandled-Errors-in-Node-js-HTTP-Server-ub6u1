# Node.js HTTP Server with Improved Error Handling

This repository demonstrates a common error in Node.js HTTP servers: the lack of proper error handling. The original `server.js` showcases this issue.  The improved version, `server-solution.js`, addresses it.

## Problem:

The initial server implementation lacks error handling.  If an error occurs (e.g., network issue, inability to bind to the port), the server will crash without informative error messages.

## Solution:

The solution utilizes the `server.on('error', ...)` event listener to gracefully handle errors, logging them to the console and preventing unexpected crashes. This ensures a more robust and reliable server.

## How to Run:

1. Clone this repository.
2. Navigate to the project directory in your terminal.
3. Run `node server.js` (to see the buggy behavior) and then `node server-solution.js` (to see the fix).