// const dotenv = require('dotenv');
const app = require('express')();

app.use('/', require('./routes/order'));

app.listen(3000, () => {
  console.log('its working');
});
