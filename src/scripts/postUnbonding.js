require('dotenv').config();
const { makePOSTRequest } = require('../utils/api');
const { generateRequestId } = require('../utils/requestId');

async function postUnbonding() {
  try {
    const timestamp = Date.now();

    const body = {
      timestamp, // all API requests need to pass in timestamp
      requestId: generateRequestId('unbonding'), // which is a unique id to avoid idempotency
      walletId: `${process.env.STAKING_DESTINATION_WALLETID}`, // staking tx wallet id
      walletAddress: `${process.env.STAKING_DESTINATION_ADDRESS}`, // staking tx wallet address
      amount: `${process.env.STAKING_AMOUNT}`, // BTC amount for staking, 1 means 1 BTC
      feeAmount: `${process.env.UNBONDING_FEE_AMOUNT}`, // BTC amount for unbonding tx fee, 1 means 1 BTC
      stakingTxId: `${process.env.STAKING_TX_ID}`,
    };
    const response = await makePOSTRequest('/open-api/v1/wallet/cosign/babylon/unbonding', body);
    console.log('Unbonding response:', response);
  } catch (error) {
    console.error(error);
  }
}

postUnbonding();