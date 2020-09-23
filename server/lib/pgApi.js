const { Client } = require("pg");

const dbQuery = async (statement, ...parameters) => {
  let client = new Client();

  await client.connect();
  let result = await client.query(statement, parameters);
  await client.end();

  return result;
};

const getEndpointIdByPath = async (path) => {
  const sqlString = `SELECT id FROM endpoints WHERE path = $1`;
  const result = await dbQuery(sqlString, path);
  return Array.from(result.rows)[0].id;
};

module.exports = {
  async getEndpoints() {
    const sqlString = `SELECT * FROM endpoints`;
    const result = await dbQuery(sqlString);
    return Array.from(result.rows);
  },

  async getDocIDsByEndpoint(path) {
    const sqlString =  `SELECT doc_id
                        FROM endpoints
                        INNER JOIN events ON events.endpoint_id = endpoints.id
                        WHERE endpoints.path = $1;`;

    const result = await dbQuery(sqlString, path);
    return Array.from(result.rows);
  },

  async createEndpoint(name, path) {
    const sqlString = `INSERT INTO endpoints (name, path) VALUES ($1, $2)`;
    const result = await dbQuery(sqlString, name, path);
    return Array.from(result.rows);
  },

  async addEvent(endpointPath, docId) {
    const endpointId = await getEndpointIdByPath(endpointPath);
    const sqlString = `INSERT INTO events (endpoint_id, date, doc_id) VALUES ($1, CURRENT_TIMESTAMP, $2)`;
    const result = await dbQuery(sqlString, String(endpointId), docId);
    return Array.from(result.rows);
  },
};