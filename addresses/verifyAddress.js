require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey
const api = new Easypost(apiKey);

const verifiableAddress = new api.Address({
    verify: ['delivery'],
    // company: 'The UPS Store',
    name: 'Heather KIRK',
    street1: '2820 BOUL LAURIER',
    street2: 'COMPLEXE JULES DALLAIRE TOUR 3, Office 850',
    city: 'Québec',
    state: 'QC',
    zip: 'G1V 0C1',
    country: 'CA',
    phone: '5142130299',
  });
  
//   // verifiableAddress.save().then(console.log);
  
//   // This will show me the error in the terminal
  verifiableAddress.save().then(r => console.log(JSON.stringify(r)))