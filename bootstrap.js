const readline = require("readline");

const crypto = require("crypto");

module.exports = {
  rl: readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
  }),
  randomId: () => crypto.randomBytes(2).toString("hex"),
};
