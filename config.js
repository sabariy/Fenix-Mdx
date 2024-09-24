require('dotenv').config();

const toBool = (x) => x == 'true'
module.exports = {
  HANDLERS: (process.env.HANDLERS || '.').trim(),
  MODE: (process.env.MODE || 'public').toLowerCase(),
  READ_CMD: toBool(process.env.READ_CMD),
  READ_MSG: toBool(process.env.READ_MSG),
  SUDO: process.env.SUDO || '',
  SESSION_ID: process.env.SESSION_ID || 'Fenix-Md&bBrftXjL',
  DATABASE_URL: process.env.DATABASE_URL || 'postgresql://lyfe_xoul_user:HL9JlsNnTpJHoSWQbzqslsY21XhQA57C@dpg-cr5tvs3tq21c73b6lb80-a.oregon-postgres.render.com/lyfe_xoul',
};
