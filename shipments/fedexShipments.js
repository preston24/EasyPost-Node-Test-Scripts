require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey
const api = new Easypost(apiKey);



// set addresses
const toAddress = new api.Address({
    company: 'EasyPost',
    street1: '343 Hampton Court',
    city: 'Lake Charles',
    state: 'LA',
    zip: '70605',
    // verify: 'delivery'
});

const fromAddress = new api.Address({
    company: 'EasyPost',
    street1: '118 2nd Street',
    // street2: '4th Floor',
    city: 'San Francisco',
    state: 'CA',
    zip: '94105',
});


const customsInfo = new api.CustomsInfo({
    eel_pfc: 'NOEEI 30.37(a)',
    customs_certify: true,
    customs_signer: 'Steve Brule',
    contents_type: 'merchandise',
    contents_explanation: '',
    restriction_type: 'none',
    restriction_comments: '',
    non_delivery_option: 'abandon',
    customs_items: [
        new api.CustomsItem({
            'description': 'Sweet shirts',
            'quantity': 2,
            'weight': 11,
            'value': 23,
            'hs_tariff_number': '654321',
            'origin_country': 'US'
        })],
});

fromAddress.save().then(console.log);

toAddress.save().then(console.log);

const parcel = new api.Parcel({
    length: 20,
    width: 17,
    height: 1.75,
    predefined_package: null,
    weight: 11,
    mode: 'production'
})

parcel.save().then(console.log);

const shipment = new api.Shipment({
    to_address: toAddress,
    from_address: fromAddress,
    parcel: parcel,
    customsInfo: customsInfo,
    carrier_accounts: ["ca_"]

})

// shipment.save().then(console.log)


//============buy shipment by lowest rate============
shipment.save().then(buyShipment => {
    shipment.buy(shipment.lowestRate())
        .then(console.log);
}).catch(console.log);

// ============buy shipment by ID============
// api.Shipment.retrieve('shp_').then(s => {
//   s.buy('rate_').then(console.log);
// });

