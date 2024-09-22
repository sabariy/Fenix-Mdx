require('dotenv').config();

const toBool = (x) => x == 'true'
module.exports = {
  HANDLERS: (process.env.HANDLERS || '^[.,!]').trim(),
  MODE: (process.env.MODE || 'public').toLowerCase(),
  READ_CMD: toBool(process.env.READ_CMD),
  READ_MSG: toBool(process.env.READ_MSG),
  SUDO: process.env.SUDO || '',
  SESSION_ID : process.env.SESSION_ID || "";
};
