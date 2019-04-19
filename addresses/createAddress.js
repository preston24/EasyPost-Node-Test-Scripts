require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey
const api = new Easypost(apiKey);


// To address 

const toAddress = new api.Address({
    name: "Kaiser Bloc",
    street1: "626 Metro Centre II",
    street2: "21 Lam Hing Street",
    city: "Kowloon Bay",
    state: "Kowloon",
    zip: "",
    country: "HK",
    phone: "98765432",
    // verify: ["delivery"]
});

toAddress.save().then(console.log);