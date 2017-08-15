const router = require('express').Router();

router
  .get('/mint', (req, res)=> {
    res.render('mint');
  })

  .get('/mysite', (req, res)=> {
    res.render('mysite');
  })

  .get('/mdblog', (req, res)=> {
    res.render('mdblog');
  })


module.exports = router;
