require('dotenv').config();
const { makeGETRequest } = require('../utils/api');

async function getValidators() {
  try {
    const timestamp = Date.now();
    const queryString = `timestamp=${timestamp}`;
    const response = await makeGETRequest('/open-api/v1/wallet/cosign/babylon/validators', queryString);
    console.log('Validators:', JSON.stringify(response, null, 2));
  } catch (error) {
    console.error(error);
  }
}

getValidators();
