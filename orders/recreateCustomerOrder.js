require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);


//============= copy o.ent JSON from admin and assign it to const o.===============
const o = {}



//==================================================================================

const order = new api.Order({
    to_address: o.to_address,
    from_address: o.from_address,
    shipments: [
        new api.Shipment({
            parcel: o.shipments[0].parcel,
            options: {
                label_format: "PDF",
            },
        })
    ],
    carrier_accounts: [process.env.USPS],
})

order.save().then(console.log).catch(console.log);


// api.Order.retrieve(order.id).then(order => {
//     order.buy('USPS', 'Priority').then(console.log).catch(console.error)
// });