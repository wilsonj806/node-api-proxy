const express = require('express');
const http = require('http');

const app = express();

app.get('/', (req, res, next) => {
  // make the app request this resource https://api.github.com/users/wilsonj806
  const uri = 'https://api.github.com/users/wilsonj806';
  // create a client on PORT 80 to connect to google
  const clientToGithub = http.createClient(80, 'https://api.github.com/');

  // Start a request
  const request = clientToGithub.request('GET', uri, { host: 'https://api.github.com/' });
  // end request configuration/ send the request out
  request.end();

  // wait for request response
  request.on('response', (res) => {
    // Log response metadata
    console.log('STATUS: ' + res.status);
    console.log('HEADERS: ' + JSON.stringify(res.headers));

    // wait for response data
    res.on('data', (chunk) => {
      // log response data
      console.log('RESPONSE DATA: \n', chunk);
    })
  });
  res.status(200).send("200 CALL SUCCESS");
})

app.listen(4000, () => console.log('Server running on PORT 4000'))