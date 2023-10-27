const express = require('express');
const next = require('next');
const fs = require('fs');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const server = express();

// Serve apple-app-site-association file
server.get('/apple-app-site-association', (req, res) => {
    const filePath = path.join(__dirname, '../public/.well-known/apple-app-site-association');
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
});

app.prepare().then(() => {
    server.get('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(3000, (err) => {
        if (err) throw err;
        console.log('> Ready on http://localhost:3000');
    });
});
