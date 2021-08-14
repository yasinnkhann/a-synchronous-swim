const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');
const messageQueue = require('./messageQueue');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

// let messageQueue = null;
// module.exports.initialize = (queue) => {
//   messageQueue = queue;
// };

module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);

if (req.method === 'GET' && req.url === '/') {
      res.writeHead(200, headers);
      let action = messageQueue.dequeue() || 'no moves stored';
      res.end(action);
  if (req.method === 'GET' && req.url === '/background.jpg') {

      }
}

  if (req.method === 'OPTIONS' && req.url === '/') {
    res.writeHead(200, headers);
    res.end();
  }

  if (req.method === 'POST') {

  }

  next(); // invoke next() at the end of a request to help with testing!

};

const genrateRandom = () => {
  console.log('test');
  let options = ['up', 'down', 'left', 'right'];
  let randInd = Math.floor(Math.random() * 4);
  return options[randInd];
};

