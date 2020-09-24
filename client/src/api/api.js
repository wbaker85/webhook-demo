// const API_URL = `http://ec2-54-88-167-227.compute-1.amazonaws.com`;
const API_URL = `http://${window.location.hostname}`;

export default {
  async getAllEndpoints(callback) {
    let response = await fetch(`${API_URL}/endpoints`);

    console.log(`${API_URL}/endpoints`);

    const result = response.ok ? await response.json() : null;
    callback(result);
  },

  async getEventsForEndpoint(path, callback) {
    let response = await fetch(`${API_URL}/endpoints/${path}`);
    const result = response.ok ? await response.json() : null;
    callback(result);
  },

  async getDetailsForEvent(path, docId, callback) {
    let response = await fetch(`${API_URL}/endpoints/${path}/${docId}`);
    const result = response.ok ? await response.json() : null;
    callback(result);
  },

  async createEndpoint(path, callback) {
    const init = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ name: 'empty', path }),
    }

    let response = await fetch(`${API_URL}/endpoints`, init);
    const result = response.ok ? await response.json() : null;
    callback(result);
  },

  API_URL,
};