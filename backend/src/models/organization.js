const pool = require('../config/database');

const getOrganization = async (id) => {
  const query = 'SELECT * FROM organizations WHERE id = $1';
  const values = [id];
  const { rows } = await pool.query(query, values);
  return rows[0];
};

module.exports = {
  getOrganization,
};