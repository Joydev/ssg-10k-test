const data = require("./lectures");

module.exports = async () => {
  return data.slice(1);
};
