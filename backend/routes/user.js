const express = require('express');
const router = express.Router();

const{signIn , logIn ,  getAllTasks,deleteTasks, updateTasks , 
    importantTasks , completeTasks , getimpTasks, getCompTasks ,getinCompTasks}= require('../controllers/User');

const{userTask}= require('../controllers/Task');
const {auth}= require('../middlewares/auth');



router.post('/signup' , signIn);
router.get('/login', logIn);
router.post('/taskcreate',auth , userTask);
router.get('/gettasks',auth, getAllTasks);
router.delete('/deletetask/:id' ,auth,  deleteTasks);
router.put('/updatetask/:id',auth , updateTasks );
router.put('/updateimptasks/:id',auth,importantTasks);
router.put('/updatecomptasks/:id', auth ,completeTasks);
router.get('/getimptasks/:id',auth, getimpTasks);
router.get('/getcomptask/:id',auth,  getCompTasks);
router.get('/getincompletetask/:id' , auth, getinCompTasks)

module.exports=router;

 