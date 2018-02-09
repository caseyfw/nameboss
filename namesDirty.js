var dirty = require("dirty");
var db = dirty("names.db");

exports.all = callback => {
  const nextId = db.get("nextId");
  const names = db.get("names").map((name, index) => index + 1 + "-" + name);
  callback(names.splice(nextId));
};

exports.next = callback => {
  const name = db.get("nextId") + 1 + "-" + db.get("names")[db.get("nextId")];
  callback(name);
};

exports.previous = callback => {
  const name = db.get("nextId") + "-" + db.get("names")[db.get("nextId") - 1];
  callback(name);
};

exports.pop = callback => {
  const name = db.get("nextId") + 1 + "-" + db.get("names")[db.get("nextId")];
  db.update("nextId", () => db.get("nextId") + 1);
  callback(name);
};

exports.unpop = callback => {
  const name = db.get("nextId") + "-" + db.get("names")[db.get("nextId") - 1];
  db.update("nextId", () => db.get("nextId") - 1);
  callback(name);
};

exports.add = name => {
  let names = db.get("names");
  names.push(name);
  db.update("names", () => names);
};
