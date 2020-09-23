const { dbQuery } = require("./db-query");

const getData = async () => {
  const sqlString = "SELECT * FROM testTable"

  const result = await dbQuery(sqlString);

  return Array.from(result.rows);
};

module.exports = {
  getData,
};