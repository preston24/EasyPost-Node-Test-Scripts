require('dotenv').config();


const Easypost = require('@easypost/api');
// const apiKey = process.env.testKey;
const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);


// set addresses
const toAddress = new api.Address({
    name: "MAGUGLIANI SRL",
    street1: "VIA SACRO MONTE 3 BIS",
    street2: "",
    city: "Busto Arsizio",
    state: "Varese",
    zip: "21052",
    country: "IT",
    phone: "390331380044",
    email: "vendite@magugliani.it",
});

const fromAddress = new api.Address({
    company: "EXAIR Corporation",
    name: "Tony",
    street1: "11510 Goldcoast Drive",
    street2: "",
    city: "Cincinnati",
    state: "OH",
    zip: "45249",
    country: "US",
    phone: "5136713322",
    email: "",
});






const order = new api.Order({
    to_address: toAddress,
    from_address: fromAddress,
    options: {
        label_date: null,
        currency: 'USD',
        payment: {
            type: 'SENDER',
        },
    },
    shipments: [
        new api.Shipment({
            parcel: {
                weight: 256,
                width: 4,
                height: 4,
                length: 63,
            },
            options: {
                //    label_format: "PDF",
                label_size: "4X6",
                incoterm: 'EXW',
                currency: 'USD',
                delivery_duty_paid: false,
                bill_receiver_account: '263865391',
                bill_receiver_postal_code: '21052'
                // delivery_confirmation: "SIGNATURE"                  
               },
        }),
        new api.Shipment({
            parcel: {
                weight: 352,
                width: 9,
                height: 33,
                length: 9,
            },
            options: {
                //    label_format: "PDF",
                label_size: "4X6",
                incoterm: 'EXW',
                currency: 'USD',
                delivery_duty_paid: false,
                bill_receiver_account: '263865391',
                bill_receiver_postal_code: '21052'
                // delivery_confirmation: "SIGNATURE"                  
               },
        }),
        new api.Shipment({
            parcel: {
                weight: 160,
                width: 4,
                height: 4,
                length: 39,
            },
            options: {
                //    label_format: "PDF",
                label_size: "4X6",
                incoterm: 'EXW',
                currency: 'USD',
                delivery_duty_paid: false,
                bill_receiver_account: '263865391',
                bill_receiver_postal_code: '21052'
                // delivery_confirmation: "SIGNATURE"                  
               },
        }),
        new api.Shipment({
            parcel: {
                weight: 112,
                width: 4,
                height: 4,
                length: 51,
            },
            options: {
                //    label_format: "PDF",
                label_size: "4X6",
                incoterm: 'EXW',
                currency: 'USD',
                delivery_duty_paid: false,
                bill_receiver_account: '263865391',
                bill_receiver_postal_code: '21052'
                // delivery_confirmation: "SIGNATURE"                  
               },
        }),
        new api.Shipment({
            parcel: {
                weight: 176,
                width: 8,
                height: 6,
                length: 39,
            },
            options: {
                //    label_format: "PDF",
                label_size: "4X6",
                incoterm: 'EXW',
                currency: 'USD',
                delivery_duty_paid: false,
                bill_receiver_account: '263865391',
                bill_receiver_postal_code: '21052'
                // delivery_confirmation: "SIGNATURE"                  
               },
        }),
        new api.Shipment({
            parcel: {
                weight: 192,
                width: 12,
                height: 12,
                length: 18,
            },
            options: {
                //    label_format: "PDF",
                label_size: "4X6",
                incoterm: 'EXW',
                currency: 'USD',
                delivery_duty_paid: false,
                bill_receiver_account: '263865391',
                bill_receiver_postal_code: '21052'
                // delivery_confirmation: "SIGNATURE"                  
               },
        }),
        new api.Shipment({
            parcel: {
                weight: 592,
                width: 16,
                height:11,
                length: 18,
            },
            options: {
                //    label_format: "PDF",
                label_size: "4X6",
                incoterm: 'EXW',
                currency: 'USD',
                delivery_duty_paid: false,
                bill_receiver_account: '263865391',
                bill_receiver_postal_code: '21052'
                // delivery_confirmation: "SIGNATURE"                  
               },
        }),
        new api.Shipment({
            parcel: {
                weight: 528,
                width: 16,
                height: 11,
                length: 18,
            },
            options: {
                //    label_format: "PDF",
                label_size: "4X6",
                incoterm: 'EXW',
                currency: 'USD',
                delivery_duty_paid: false,
                bill_receiver_account: '263865391',
                bill_receiver_postal_code: '21052'
                // delivery_confirmation: "SIGNATURE"                  
               },
        }),
        // new api.Shipment({
        //     parcel: {
        //         weight: 32,
        //         width: 4.33,
        //         height: 6.96,
        //         length: 7.48,
        //     },
        //     options: {
        //         //    label_format: "PDF",
        //         label_size: "4X6",
        //         // delivery_confirmation: "SIGNATURE"                  
        //        },
        // }),
        // new api.Shipment({
        //     parcel: {
        //         weight: 32,
        //         width: 4.33,
        //         height: 6.96,
        //         length: 7.48,
        //     },
        //     options: {
        //         //    label_format: "PDF",
        //         label_size: "4X6",
        //         // delivery_confirmation: "SIGNATURE"                  
        //        },
        // }),
        // new api.Shipment({
        //     parcel: {
        //         weight: 32,
        //         width: 4.33,
        //         height: 6.96,
        //         length: 7.48,
        //     },
        //     options: {
        //         //    label_format: "PDF",
        //         label_size: "4X6",
        //         // delivery_confirmation: "SIGNATURE"                  
        //        },
        // }),
        // new api.Shipment({
        //     parcel: {
        //         weight: 32,
        //         width: 4.33,
        //         height: 6.96,
        //         length: 7.48,
        //     },
        //     options: {
        //         //    label_format: "PDF",
        //         label_size: "4X6",
        //         // delivery_confirmation: "SIGNATURE"                  
        //        },
        // }),
        // new api.Shipment({
        //     parcel: {
        //         weight: 32,
        //         width: 4.33,
        //         height: 6.96,
        //         length: 7.48,
        //     },
        //     options: {
        //         //    label_format: "PDF",
        //         label_size: "4X6",
        //         // delivery_confirmation: "SIGNATURE"                  
        //        },
        // }),
        // new api.Shipment({
        //     parcel: {
        //         weight: 32,
        //         width: 4.33,
        //         height: 6.96,
        //         length: 7.48,
        //     },
        //     options: {
        //         //    label_format: "PDF",
        //         label_size: "4X6",
        //         // delivery_confirmation: "SIGNATURE"                  
        //        },
        // }),
        // new api.Shipment({
        //     parcel: {
        //         weight: 32,
        //         width: 4.33,
        //         height: 6.96,
        //         length: 7.48,
        //     },
        //     options: {
        //         //    label_format: "PDF",
        //         label_size: "4X6",
        //         // delivery_confirmation: "SIGNATURE"                  
        //        },
        // }),
        // new api.Shipment({
        //     parcel: {
        //         weight: 32,
        //         width: 4.33,
        //         height: 6.96,
        //         length: 7.48,
        //     },
        //     options: {
        //         //    label_format: "PDF",
        //         label_size: "4X6",
        //         // delivery_confirmation: "SIGNATURE"
        //        },
        // }),
        // new api.Shipment({
        //     parcel: {
        //         weight: 32,
        //         width: 4.33,
        //         height: 6.96,
        //         length: 7.48,
        //     },
        //     options: {
        //         //    label_format: "PDF",
        //            label_size: "4X6",
        //         //    delivery_confirmation: "SIGNATURE"
        //           },
        // }),
    ],
    carrier_accounts: [{"id":"ca_09df5bb08bab4da3aeb7b26ce6a79a1d"}],
});

order.save().then(console.log).catch(console.log);