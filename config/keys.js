// Figure out what set of credentials to return
if (process.env.NODE_ENV === "production") {
  // In production - return the production set of keys
  module.exports = require("./prod");
} else {
  // In development - return development keys
  module.exports = require("./dev");
}
