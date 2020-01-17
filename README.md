# Node API proxy
## Overview
A quick API proxy for making API calls to resources. We need to learn this because some external APIs we can consume won't let you call it from the client side, so we'll need to use a backend proxy to handle it. This is a **learning project** and will have a docs section with notes.

Stack-wise, this is done with Node/ Express, with `starter.js` being done with both and an eventual `index.js` being done in pure Node.js.

## Running it
First run `git clone` on the repo. Then change directory into the location where you cloned the repo and run `npm i`.

To start the starter server, run:
```
  npm run starter
```

Then use `cUrl`, Postman or whatever API tester you want to access any of the below API endpoints:
```
  localhost:4000/github/:username
  localhost:4000/cat1
  localhost:4000/cat2
```