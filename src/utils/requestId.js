const generateRequestId = (apiIdentifier) => {
  const date = new Date();
  const timestamp = date.getFullYear() +
    String(date.getMonth() + 1).padStart(2, '0') +
    String(date.getDate()).padStart(2, '0') +
    String(date.getHours()).padStart(2, '0') +
    String(date.getMinutes()).padStart(2, '0');
  const randomNum = Math.floor(Math.random() * 90000000 + 10000000);
  const requestId = `SNAP_PIVOTAL_${apiIdentifier}_${timestamp}_${randomNum}`;
  console.log(`requestId: ${requestId}`);
  return requestId;
};


module.exports = { generateRequestId }; 