require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey
const api = new Easypost(apiKey);



// set addresses
// const toAddress = new api.Address({
//   company: 'EasyPost',
//   street1: '343 Hampton Court',
//   city: 'Lake Charles',
//   state: 'LA',
//   zip: '70605',
//   // verify: 'delivery'
// });

// const fromAddress = new api.Address({
//   company: 'EasyPost',
//   street1: '118 2nd Street',
//   // street2: '4th Floor',
//   city: 'San Francisco',
//   state: 'CA',
//   zip: '94105',
// });

const fromAddress = new api.Address({
    // name: 'EasyPost',
    // street1: '118 2nd Street',
    // street2: '4th Floor',
    // city: 'San Francisco',
    // state: 'CA',
    // zip: '94105',
    // phone: '415-123-4567',
    company: "City Images",
    name: "Gareth Little",
    street1: "8 Avery Row",
    city: "London",
    state: "",
    zip: "W1K 4AL",
    country: "GB",
    phone: "02075691982"
});

const toAddress = new api.Address({
    // name: 'EasyPost',
    // street1: '13271 Ventura Blvd',
    // city: 'Studio City',
    // state: 'CA',
    // zip: '91604',
    // phone: '415-123-4567',
    company: "City Images",
    name: "Gareth Little",
    street1: "8 Avery Row",
    city: "London",
    state: "",
    zip: "W1K 4AL",
    country: "GB",
    phone: "02075691982"
}
)

fromAddress.save().then(console.log);

toAddress.save().then(console.log);

const customsInfo = new api.CustomsInfo({
    eel_pfc: null,
    // customs_certify: true,
    // customs_signer: 'Steve Brule',
    // contents_type: 'merchandise',
    // contents_explanation: '',
    // restriction_type: 'none',
    // restriction_comments: '',
    // non_delivery_option: 'abandon',
    // contents_explanation: 'this is a box full of shredded news paper',
    // declaration: 'officially speaking, this box is filled with shredded news paper',
    // customs_items: [
    //     new api.CustomsItem({
    //         'description': 'Sweat shirts',
    //         'quantity': 2,
    //         'weight': 11,
    //         'value': 23,
    //         'hs_tariff_number': '654321',
    //         'origin_country': 'US',
    //     })],
});

// const parcel = new api.Parcel({
//     length: 3.94,
//     width: 3.94,
//     height: 3.94,
//     predefined_package: null,
//     weight: 352.74,
//     mode: 'test'
// });

// parcel.save().then(console.log);

// const shipment = new api.Shipment({
//     to_address: toAddress,
//     from_address: fromAddress,
//     parcel: parcel,
//     customs_info: customsInfo,
//     options: {
//      "label_format": "ZPL"
//     },
//     carrier_accounts: ['ca_42aacf9b4fd0470b9a03d9b483a2323a']
// });

// shipment.save().then(console.log);


//============buy shipment by lowest rate============
// shipment.save().then(buyShipment => {
//     shipment.buy(shipment.lowestRate())
//         .then(console.log);
// }).catch(console.log);

// ============buy shipment by ID============
// api.Shipment.retrieve('shp_').then(s => {
//   s.buy('rate_').then(console.log);
// });

//

//====== customs schema
// CREATE TABLE`customs_infos`(
//     `id` int(11) NOT NULL AUTO_INCREMENT,
//     `public_id` varchar(255) COLLATE utf8_bin DEFAULT NULL,
//     `user_id` int(11) DEFAULT NULL,
//     `integrated_form_type` varchar(255) COLLATE utf8_bin DEFAULT NULL,
//     `customs_certify` tinyint(1) DEFAULT NULL,
//     `customs_signer` varchar(255) COLLATE utf8_bin DEFAULT NULL,
//     `contents_type` varchar(255) COLLATE utf8_bin DEFAULT NULL,
//     `contents_explanation` varchar(255) COLLATE utf8_bin DEFAULT NULL,
//     `restriction_type` varchar(255) COLLATE utf8_bin DEFAULT NULL,
//     `restriction_comments` varchar(255) COLLATE utf8_bin DEFAULT NULL,
//     `non_delivery_option` varchar(255) COLLATE utf8_bin DEFAULT NULL,
//     `eel_pfc` varchar(255) COLLATE utf8_bin DEFAULT NULL,
//     `created_at` datetime NOT NULL,
//     `updated_at` datetime NOT NULL,
//     `mode` varchar(255) COLLATE utf8_bin DEFAULT NULL,
//     `declaration` text COLLATE utf8_bin,
//     PRIMARY KEY(`id`),
//     UNIQUE KEY`index_customs_infos_on_public_id`(`public_id`),
//     KEY`index_customs_infos_on_mode`(`mode`),
//     KEY`index_customs_infos_on_user_id`(`user_id`)
// ) ENGINE = InnoDB DEFAULT CHARSET = utf8 COLLATE = utf8_bin;