require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey
const api = new Easypost(apiKey);


batch = new api.Batch({
    /* Shipments and other batch child objects can either be
     * an array instances or an array of ids. */
    shipments: ['shp_'],
    options: {
        label_format: "PDF",
        label_size: "4x6"
    }
});

batch.save().then(console.log);
