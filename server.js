var restify = require("restify"),
  names = require("./namesDirty.js");

function all(req, res, next) {
  names.all(names => res.send(names));
  next();
}

function next(req, res, next) {
  names.next(name => res.sendRaw(name));
  next();
}

function previous(req, res, next) {
  names.previous(name => res.sendRaw(name));
  next();
}

function pop(req, res, next) {
  names.pop(name => res.sendRaw(name));
  next();
}

function unpop(req, res, next) {
  names.unpop(name => res.sendRaw(name));
  next();
}

function add(req, res, next) {
  names.add(req.params.name);
  res.sendRaw("ok");
  next();
}

var server = restify.createServer();
server.get("/", all);
server.get("/next", next);
server.get("/previous", previous);
server.get("/pop", pop);
server.get("/unpop", unpop);
server.get("/add/:name", add);

server.listen(8080, function() {
  console.log("%s listening at %s", server.name, server.url);
});
