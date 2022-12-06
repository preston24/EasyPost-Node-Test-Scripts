require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey
const api = new Easypost(apiKey);



api.Batch.retrieve('batch_57d18106f8ad42b4920008b71f77c210').then(b => {
    /* Once createScanForm is complete, a webhook will be
     * fired to indicate that the scan form was created. */
    console.log(b);
});