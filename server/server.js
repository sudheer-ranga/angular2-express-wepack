import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import config from './../webpack.config.js';

const app = express();
const compiler = webpack(config);

app.use(express.static(__dirname + '/../app'));
app.use(webpackMiddleware(compiler));
app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, '../app/index.html'));
});

app.listen(3000);