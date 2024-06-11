const express = require('express');
const {getHomepage,getABC,getHuy,postCreateUser, getCreatePage,getUpdatePage,postUpdateUser,postDeleteUser,postHandleRemoveUser} = require('../controllers/homeController');
const router = express.Router();



//khai báo route
router.get('/', getHomepage )
  
router.get('/abc', getABC)
  
router.get('/huy', getHuy)

router.get('/create', getCreatePage)

router.get('/update/:id', getUpdatePage)    

router.post('/create-user', postCreateUser)

router.post('/update-user', postUpdateUser)

router.post('/delete-user/:id', postDeleteUser)

router.post('/delete-user', postHandleRemoveUser)




module.exports= router;