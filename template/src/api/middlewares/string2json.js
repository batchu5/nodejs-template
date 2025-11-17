const { jsonrepair } = require('jsonrepair');

module.exports = (message, next) => {
  try {
    message.payload = JSON.parse(jsonrepair(message.payload));
  } catch (e) {
    // We did our best...
  }

  next();
};
