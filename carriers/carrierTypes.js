require('dotenv').config();


const Easypost = require('@easypost/api');
// const apiKey = process.env.testKey;
const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);


  // api.CarrierType.all().then(r => {console.log(JSON.stringify(r))}).catch(console.log);

  // api.CarrierType.all().then(console.log).catch(console.log);

api.CarrierType.all().then((r) => {
  for (i = 0; i < r.length; i++) {
    if (r[i].type == "DHLGMIAccount") {
      console.log(JSON.stringify(r[i]));
    }
  }
});
