import PaytmChecksum from "paytmchecksum"
import { paytmParams, paytmMerchantkey } from '../index.js';

export const addPaymentGateway = async (request, response) => {
    let paytmCheckSum = await PaytmChecksum.generateSignature(paytmParams, paytmMerchantkey);
    try {
        let params = {
            ...paytmParams,
            'CHECKSUMHASH': paytmCheckSum
        };
        response.json(params);
    } catch (error) {
        console.log(error);
    }
}