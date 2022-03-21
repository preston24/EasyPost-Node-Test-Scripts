require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.prodKey
const api = new Easypost(apiKey);





//WARINGING this will refund/void all production labels in "pre_transit" or "unknown" status after the start date
api.Shipment.all({
    page_size: 100,
    start_datetime: '2021-02-16', // should be less than 30 days.
}).then(s => {
    //if we don't find any shipments to refund then this variable will remain false
    let found = false;
    //iterate through shipments and find shipments in a state eligible for refund (pre_transit or unknown, also not already refunded)
    for (i = 0; i < s.length; i++) {
        if (s[i].status === "unknown" && s[i].refund_status !== "refunded" || s[i].status === "pre_transit" && s[i].refund_status !== "refunded") {
            found = true;
            api.Shipment.retrieve(s[i].id).then(s => {
                s.refund().then(() => console.log("shipment: " + s.id, " | action: refunding...", " | status: " + s.refund_status)).catch(console.log);
            }).catch(console.log);
        }
    }
    //tell us if there was nothing found to refund
    if (!found) {
        console.log("No shipments to refund");
    }
}).catch(console.log);