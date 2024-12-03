require('dotenv').config();
const { promisify } = require('util');
const { exec } = require('child_process');
const { createSignature } = require('./crypto');

const execAsync = promisify(exec);

const makeGETRequest = async (path, queryString) => {
  const signature = createSignature(queryString, process.env.API_SECRET);
  
  const curlCommand = `curl -X GET "${process.env.BASE_URL}${path}?${queryString}" \
    -H "accept: application/json" \
    -H "open-apikey: ${process.env.API_KEY}" \
    -H "signature: ${signature}"`;

  try {
    const { stdout } = await execAsync(curlCommand);
    return JSON.parse(stdout);
  } catch (error) {
    throw new Error(`API Request failed: ${error.message}`);
  }
};

module.exports = { makeGETRequest }; 