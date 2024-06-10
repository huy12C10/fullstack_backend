const express = require('express');
const {getHomepage,getABC,getHuy,postCreateUser, getCreatePage} = require('../controllers/homeController');
const router = express.Router();



//khai báo route
router.get('/', getHomepage )
  
router.get('/abc', getABC)
  
router.get('/huy', getHuy)

  
router.get('/create', getCreatePage)

router.post('/create-user', postCreateUser)


module.exports= router;
  