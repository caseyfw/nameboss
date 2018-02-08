var dirty = require('dirty');
var db = dirty('names.db');

db.on('load', () => {
  db.set('nextId', 0);
  db.set('names', [
    "1-anubis",
    "2-baron",
    "3-ceres",
    "4-dionysus",
    "5-eros",
    "6-freya",
    "7-gaia",
    "8-heimdallr",
    "9-izanami",
    "10-jupiter",
    "11-kama",
    "12-loki",
    "13-morgoth",
    "14-nedra",
    "15-orbona",
    "16-pan",
    "17-quirinus",
    "18-ruaumoko",
    "19-sekhmet",
    "20-torak",
    "21-ukko",
    "22-vishnu",
    "23-wadjet",
    "24-xolotl",
    "25-yahweh",
    "26-zeus"
  ]);
});
