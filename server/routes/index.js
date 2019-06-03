var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/login', function(req, res, next) {
  const {id, password} = req.body;
  if(id === 'kk' && password === '123') {
    res.json({ id: 'bfej7fj4' });
  }

  res.json({result: false});
});

module.exports = router;
