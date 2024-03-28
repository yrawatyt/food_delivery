const pool = require('../config/database');

const getItem = async (type) => {
  const query = 'SELECT * FROM items WHERE type = $1';
  const values = [type];
  const { rows } = await pool.query(query, values);
  return rows[0];
};

module.exports = {
  getItem,
};