// format: SNAP_PIVOTAL_<apiIdentifier>_202412030356_<8 digits random number>
const generateRequestId = (apiIdentifier) => {
  const date = new Date();
  const timestamp = date.getFullYear() +
    String(date.getMonth() + 1).padStart(2, '0') +
    String(date.getDate()).padStart(2, '0') +
    String(date.getHours()).padStart(2, '0') +
    String(date.getMinutes()).padStart(2, '0');
  const randomNum = Math.floor(Math.random() * 90000000 + 10000000);
  const requestId = `SNAP_PIVOTAL_${apiIdentifier}_${timestamp}_${randomNum}`;
  
  if (requestId.length > 50) {
    throw new Error(`Request ID exceeds maximum length of 50 characters: ${requestId}`);
  }
  
  console.log(`requestId: ${requestId}`);
  return requestId;
};

module.exports = { generateRequestId }; 