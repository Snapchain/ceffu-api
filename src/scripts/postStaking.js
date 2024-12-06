require('dotenv').config();
const { makePOSTRequest } = require('../utils/api');
const { generateRequestId } = require('../utils/requestId');

async function postStaking() {
  try {
    const timestamp = Date.now();

    const body = {
      timestamp,
      requestId: generateRequestId('staking'),
      fromWalletId: `${process.env.STAKING_FROM_WALLETID}`,
      fromAddress: `${process.env.STAKING_FROM_ADDRESS}`, 
      changeWalletId: `${process.env.STAKING_CHANGE_WALLETID}`,
      changeAddress: `${process.env.STAKING_CHANGE_ADDRESS}`,
      stakingWalletId: `${process.env.STAKING_DESTINATION_WALLETID}`,
      stakingAddress: `${process.env.STAKING_DESTINATION_ADDRESS}`,
      validatorPkHex: `${process.env.STAKING_VALIDATOR_PK}`, // BSquaredNetwork
      amount: `${process.env.STAKING_AMOUNT}`, // BTC amount for staking, 1 means 1 BTC
      feeAmount: `${process.env.STAKING_FEE_AMOUNT}`, // BTC amount for fee, 1 means 1 BTC
      isBroadcast: `${process.env.STAKING_BROADCAST}`, // 1 : broadcast after signing 0: dont broadcast
    };
    const response = await makePOSTRequest('/open-api/v1/wallet/cosign/babylon/staking', body);
    console.log('Staking response:', response);
  } catch (error) {
    console.error(error);
  }
}

postStaking();
