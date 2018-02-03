var restify = require('restify'),
  names = require('./namesDirty.js');

function getAll(req, res, next) {
  names.all((names) => {
    res.send(names);
  });
  next();
}

function getNext(req, res, next) {
  names.next((name) => {
    res.send(name);
  });
  next();
}

function getPrevious(req, res, next) {
  names.previous((name) => {
    res.send(name);
  });
  next();
}

function pop(req, res, next) {
  names.pop((name) => {
    res.send(name);
  });
  next();
}

function unpop(req, res, next) {
  names.unpop((name) => {
    res.send(name);
  });
  next();
}

var server = restify.createServer();
server.get('/', getAll);
server.get('/next', getNext);
server.get('/previous', getPrevious);
server.get('/pop', pop);
server.get('/unpop', unpop);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
