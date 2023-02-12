const Axios = require("axios");
const Utils = require("./lib/utils");

function v1(url) {
  return new Promise((resolve, reject) => {
    if (!url) return reject(new Error("url input is required"));
    Axios.get(Utils.API_URL + "/api/download", { params: { url } })
      .then((b) => resolve(b.data))
      .catch(reject);
  });
}

function v2(url) {
  return new Promise((resolve, reject) => {
    if (!url) return reject(new Error("url input is required"));
    Axios.get(Utils.API_URL + "/api/download/v2", { params: { url } })
      .then((b) => resolve(b.data))
      .catch(reject);
  });
}

module.exports = { v1, v2 };
