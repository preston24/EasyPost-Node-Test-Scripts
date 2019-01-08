const verifiableAddress = new api.Address({
    verify: ['delivery'],
    name: 'Alexis Atallah',
    street1: 'Beirut, Achrafieh, Hotel Dieu de Fr',
    city: 'Achrafieh',
    state: 'Beirut',
    zip: '1100',
    country: 'LB',
    phone: '0096171968278',
  });
  
  // verifiableAddress.save().then(console.log);
  
  // This will show me the error in the terminal
  verifiableAddress.save().then(r => console.log(JSON.stringify(r)))