const express = require('express');
const router = express.Router();

const{signIn , logIn}= require('../controllers/User');

router.post('/signup' , signIn);
router.get('/login', logIn);

module.exports=router;

 