const crypto = require('crypto');

const createSignature = (data, secret) => {
  const privateKey = crypto.createPrivateKey({
    key: Buffer.from(secret, 'base64'),
    type: 'pkcs8',
    format: 'der',
  });
  const sign = crypto.createSign('sha512WithRSAEncryption');
  sign.write(data);
  sign.end();
  return sign.sign(privateKey, 'base64');
};

module.exports = { createSignature };
