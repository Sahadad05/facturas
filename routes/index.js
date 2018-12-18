const express = require('express');
const router  = express.Router();

const Factura = require('../models/factura');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.post('/', (req, res, next) => {

  // let {rfc} = req.body;

  const newRfc = new Factura(req.body);

  newRfc.save((err, f) => {
    if(err){
      return res.status(400).json({
        ok: false,
        err
      });
    }
    return res.status(200).json({
      ok:true,
      rfc: f
    });
  })

  console.log('body', req.body);

});

module.exports = router;
