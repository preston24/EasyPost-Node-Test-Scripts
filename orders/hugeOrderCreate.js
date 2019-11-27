require('dotenv').config();


const Easypost = require('@easypost/api');
// const apiKey = process.env.testKey;
const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);


// set addresses
const toAddress = new api.Address({
    name: "DREXEL INDUSTRIES",
    street1: "100 Kellogg Lane",
    street2: "",
    city: "London",
    state: "ON",
    zip: "N5W 0B4",
    country: "CA",
    phone: "5192663400",
    email: "Orders@Drexel.ca",
});

const fromAddress = new api.Address({
    company: "Wintronic Ltd",
    name: "Tony",
    street1: "53-377 Burnhamthorpe Road East",
    street2: "",
    city: "Toronto",
    state: "ON",
    zip: "M5G 1X5",
    country: "CA",
    phone: "4164562134",
    email: "talkwire85@yahoo.com",
});






const order = new api.Order({
    to_address: toAddress,
    from_address: fromAddress,
    shipments: [
        new api.Shipment({
            parcel: {
                weight: 32,
                width: 4.33,
                height: 6.96,
                length: 7.48,
            },
            options: {
                //    label_format: "PDF",
                label_size: "4X6",
                delivery_confirmation: "SIGNATURE"                  
               },
        }),
        new api.Shipment({
            parcel: {
                weight: 32,
                width: 4.33,
                height: 6.96,
                length: 7.48,
            },
            options: {
                //    label_format: "PDF",
                label_size: "4X6",
                delivery_confirmation: "SIGNATURE"                  
               },
        }),
        new api.Shipment({
            parcel: {
                weight: 32,
                width: 4.33,
                height: 6.96,
                length: 7.48,
            },
            options: {
                //    label_format: "PDF",
                label_size: "4X6",
                delivery_confirmation: "SIGNATURE"                  
               },
        }),
        new api.Shipment({
            parcel: {
                weight: 32,
                width: 4.33,
                height: 6.96,
                length: 7.48,
            },
            options: {
                //    label_format: "PDF",
                label_size: "4X6",
                delivery_confirmation: "SIGNATURE"                  
               },
        }),
        new api.Shipment({
            parcel: {
                weight: 32,
                width: 4.33,
                height: 6.96,
                length: 7.48,
            },
            options: {
                //    label_format: "PDF",
                label_size: "4X6",
                delivery_confirmation: "SIGNATURE"                  
               },
        }),
        new api.Shipment({
            parcel: {
                weight: 32,
                width: 4.33,
                height: 6.96,
                length: 7.48,
            },
            options: {
                //    label_format: "PDF",
                label_size: "4X6",
                delivery_confirmation: "SIGNATURE"                  
               },
        }),
        new api.Shipment({
            parcel: {
                weight: 32,
                width: 4.33,
                height: 6.96,
                length: 7.48,
            },
            options: {
                //    label_format: "PDF",
                label_size: "4X6",
                delivery_confirmation: "SIGNATURE"                  
               },
        }),
        new api.Shipment({
            parcel: {
                weight: 32,
                width: 4.33,
                height: 6.96,
                length: 7.48,
            },
            options: {
                //    label_format: "PDF",
                label_size: "4X6",
                delivery_confirmation: "SIGNATURE"                  
               },
        }),
        new api.Shipment({
            parcel: {
                weight: 32,
                width: 4.33,
                height: 6.96,
                length: 7.48,
            },
            options: {
                //    label_format: "PDF",
                label_size: "4X6",
                delivery_confirmation: "SIGNATURE"                  
               },
        }),
        new api.Shipment({
            parcel: {
                weight: 32,
                width: 4.33,
                height: 6.96,
                length: 7.48,
            },
            options: {
                //    label_format: "PDF",
                label_size: "4X6",
                delivery_confirmation: "SIGNATURE"                  
               },
        }),
        new api.Shipment({
            parcel: {
                weight: 32,
                width: 4.33,
                height: 6.96,
                length: 7.48,
            },
            options: {
                //    label_format: "PDF",
                label_size: "4X6",
                delivery_confirmation: "SIGNATURE"                  
               },
        }),
        new api.Shipment({
            parcel: {
                weight: 32,
                width: 4.33,
                height: 6.96,
                length: 7.48,
            },
            options: {
                //    label_format: "PDF",
                label_size: "4X6",
                delivery_confirmation: "SIGNATURE"                  
               },
        }),
        new api.Shipment({
            parcel: {
                weight: 32,
                width: 4.33,
                height: 6.96,
                length: 7.48,
            },
            options: {
                //    label_format: "PDF",
                label_size: "4X6",
                delivery_confirmation: "SIGNATURE"                  
               },
        }),
        new api.Shipment({
            parcel: {
                weight: 32,
                width: 4.33,
                height: 6.96,
                length: 7.48,
            },
            options: {
                //    label_format: "PDF",
                label_size: "4X6",
                delivery_confirmation: "SIGNATURE"                  
               },
        }),
        new api.Shipment({
            parcel: {
                weight: 32,
                width: 4.33,
                height: 6.96,
                length: 7.48,
            },
            options: {
                //    label_format: "PDF",
                label_size: "4X6",
                delivery_confirmation: "SIGNATURE"                  
               },
        }),
        new api.Shipment({
            parcel: {
                weight: 32,
                width: 4.33,
                height: 6.96,
                length: 7.48,
            },
            options: {
                //    label_format: "PDF",
                label_size: "4X6",
                delivery_confirmation: "SIGNATURE"
               },
        }),
        new api.Shipment({
            parcel: {
                weight: 32,
                width: 4.33,
                height: 6.96,
                length: 7.48,
            },
            options: {
                //    label_format: "PDF",
                   label_size: "4X6",
                   delivery_confirmation: "SIGNATURE"
                  },
        }),
    ],
    carrier_accounts: [ {"id":"ca_62e83d60f01846f2b639b5ffe51b2339"}],
});

order.save().then(console.log).catch(console.log);