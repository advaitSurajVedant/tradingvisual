const express = require('express')
const app = express()
const port = 3002

const merchant_model = require('./merchant_model')

app.use(express.json())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

// app.get('/', (req, res) => {
//   merchant_model.getMerchants()
//   .then(response => {
//     res.status(200).send(response);
//   })
//   .catch(error => {
//     res.status(500).send(error);
//   })
// })

app.post('/add', (req, res) => {
  merchant_model.addData(req.body)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
  // .then(response => {
  //   res.status(200).send(response);
  // })
  // .catch(error => {
  //   res.status(500).send(error);
  // })
})

// app.delete('/merchants/:id', (req, res) => {
//   merchant_model.deleteMerchant(req.params.id)
//   .then(response => {
//     res.status(200).send(response);
//   })
//   .catch(error => {
//     res.status(500).send(error);
//   })
// })
app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})


// const express = require('express')
// const app = express()
// const port = 3002

// app.get('/', (req, res) => {
//   res.status(200).send('Hello World!');
// })

// app.listen(port, () => {
//   console.log(`App running on port ${port}.`)
// })