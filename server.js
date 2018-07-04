const compression = require('compression');
const express = require('express');
const morgan = require('morgan');
const history = require('connect-history-api-fallback');
const proxy = require('http-proxy-middleware');
const path = require('path');
const fs = require('fs');
// const https = require('https');

const ENV_VAR_MASK = 'REACT_APP_';
const SRC_FILENAME = path.resolve(__dirname, './build', 'index.html');

// var options = {
//   key: fs.readFileSync('certs/privateKey.key'),
//   cert: fs.readFileSync('certs/certificate.crt')
// };

// Find marker inside provided string content and replace it
// with browser's env variables init block. Env variables are filtered by mask.
const injectEnv = (mask, env, content) => content.replace(
  /<\/head>/i,
  `<script>window.process = { env: ${JSON.stringify(filterEnv(mask, env))} };</script></head>`
);

// Extract env variables by mask
const filterEnv = (mask, env) => Object.keys(env)
  .filter(key => key.startsWith(mask))
  .reduce((acc, curr) => Object.assign({}, acc, {[curr]: env[curr]}), {});

const src = fs.readFileSync(SRC_FILENAME, 'utf8');
const dest = injectEnv(ENV_VAR_MASK, process.env, src);
fs.writeFile(SRC_FILENAME, dest, function (err) {
  if (err) {
    return console.log(err);
  }
});

const app = express();

app.use(compression());

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve(__dirname, './build')));

app.use(history());
// app.use(proxy('/api', {target: 'http://board.stukans.com:8181', changeOrigin: true}));
app.use(proxy('/api/data', {target: 'http://api.themoviedb.org/3', secure: true, logLevel: 'debug', pathRewrite: {'^/api/data': ''}}));
app.use(proxy('/api/image', {target: 'http://image.tmdb.org/t/p', secure: true, changeOrigin: true, logLevel: 'debug', pathRewrite: {'^/api/image': ''}}));

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

// https.createServer(options, app).listen(9000);

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './build', 'index.html'));
});
