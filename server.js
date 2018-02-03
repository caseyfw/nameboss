var restify = require('restify'),
    names = require('./names.js');

function getAll(req, res, next) {
    names.all(names => {
          res.send(names);
        });
    next();
}

var server = restify.createServer();
server.get('/test', (req, res, next) => {
    res.send('test!');
});
server.get('/', getAll);

server.listen(8080, function() {
    console.log('%s listening at %s', server.name, server.url);
});
