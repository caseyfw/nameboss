var dirty = require('dirty');
var db = dirty('names.db');

exports.all = (callback) => {
  let names = db.get('names');
  let nextId = db.get('nextId');

  callback(names.splice(nextId));
};

exports.next = (callback) => {
  callback(db.get('names')[db.get('nextId')]);
};

exports.previous = (callback) => {
  callback(db.get('names')[db.get('nextId') - 1]);
};

exports.pop = (callback) => {
  db.set('nextId', db.get('nextId') + 1);
  callback(db.get('names')[db.get('nextId')]);
};

exports.unpop = (callback) => {
  db.set('nextId', db.get('nextId') - 1);
  callback(db.get('names')[db.get('nextId')]);
};
