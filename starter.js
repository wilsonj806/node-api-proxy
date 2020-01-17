const express = require('express');
const http = require('http');
const https = require('https');

const app = express();

app.get('/github/:username', (req, res, next) => {
  // make the app request this resource https://api.github.com/users/wilsonj806
  const uri = 'api.github.com';
  const options = {
    // Host is the API resource without the HTTP/ HTTPS protocol attatched AND without the path
    host: uri,
    agent: false,
    // Path points to a particular resource you want to access
    path: '/users/' + req.params.username,
    method: 'GET',
    // Headers is the request header that the Express server will send
    headers: { 'User-Agent': req.headers["user-agent"]}
  };

  https.get(options, function(apiRes) {
    let data = '';
    console.log('STATUS: ' + apiRes.statusCode);
    // console.log('HEADERS: ' + JSON.stringify(apiRes.headers));
    apiRes.setEncoding('utf8');
    apiRes.on('data', function (chunk) {
      console.log('BODY: ' + chunk);
      // NOTE First, the chunk that's returned is a string, second, the payload is sent in pieces so we need to concat strings
      data = data.concat(chunk);
    });

    apiRes.on('error', (error) => {
      console.log('Error below \n\n\n');
      console.log(error);
      res.status(500).send('it broke')
    })

    // Need to parse the JSON string
    apiRes.on('end', () => res.status(200).json(JSON.parse(data)))
  })
})
app.get('/cat1', (req, res, next) => {
  // make the app request this resource https://aws.random.cat/meow
  const uri = 'aws.random.cat';
  const options = {
    // Host is the API resource without the HTTP/ HTTPS protocol attatched AND without the path
    host: uri,
    agent: false,
    // Path points to a particular resource you want to access
    path: '/meow',
    method: 'GET',
    // Headers is the request header that the Express server will send
    headers: { 'User-Agent': req.headers["user-agent"]}
  };

  https.get(options, function(apiRes) {
    let data = '';
    console.log('STATUS: ' + apiRes.statusCode);
    // console.log('HEADERS: ' + JSON.stringify(apiRes.headers));
    apiRes.setEncoding('utf8');
    apiRes.on('data', function (chunk) {
      console.log('BODY: ' + chunk);
      data = data.concat(chunk);
    });

    apiRes.on('error', (error) => {
      console.log('Error below \n\n\n');
      console.log(error);
      res.status(500).send('it broke')
    })

    apiRes.on('end', () => res.status(200).json(JSON.parse(data)))
  })
})
app.get('/cat2', (req, res, next) => {
  // make the app request this resource https://cat-fact.herokuapp.com/facts/random
  const uri = 'cat-fact.herokuapp.com';
  const options = {
    // Host is the API resource without the HTTP/ HTTPS protocol attatched AND without the path
    host: uri,
    agent: false,
    // Path points to a particular resource you want to access
    path: '/facts/random',
    method: 'GET',
    // Headers is the request header that the Express server will send
    headers: { 'User-Agent': req.headers["user-agent"]}
  };

  https.get(options, function(apiRes) {
    let data = '';
    console.log('STATUS: ' + apiRes.statusCode);
    // console.log('HEADERS: ' + JSON.stringify(apiRes.headers));
    apiRes.setEncoding('utf8');
    apiRes.on('data', function (chunk) {
      console.log('BODY: ' + chunk);
      data = data.concat(chunk);
    });

    apiRes.on('error', (error) => {
      console.log('Error below \n\n\n');
      console.log(error);
      res.status(500).send('it broke')
    })

    apiRes.on('end', () => res.status(200).json(JSON.parse(data)))
  })
})



app.listen(4000, () => console.log('Server running on PORT 4000'))