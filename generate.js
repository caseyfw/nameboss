var dirty = require('dirty');
var db = dirty('names.db');

db.on('load', () => {
  db.set('nextId', 1);
  db.set('names', [
    "head",
    "anubis",
    "baron",
    "ceres",
    "dionysus",
    "eros",
    "freya",
    "gaia",
    "heimdallr",
    "izanami",
    "jupiter",
    "kama",
    "loki",
    "morgoth",
    "nedra",
    "orbona",
    "pan",
    "quirinus",
    "ruaumoko",
    "sekhmet",
    "torak",
    "ukko",
    "vishnu",
    "wadjet",
    "xolotl",
    "yahweh"
  ]);
});
