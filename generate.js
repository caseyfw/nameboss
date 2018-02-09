var dirty = require("dirty");
var db = dirty("names.db");

db.on("load", () => {
  db.set("nextId", 0);
  db.set("names", [
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
    "yahweh",
    "zeus"
  ]);
});
