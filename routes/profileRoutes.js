const express=require('express')
const router=express.Router();
const {create,update,show} =require('../controllers/profileController')
const {protect}=require('../middleware/auth')


router.route('/profile/:userId').post(protect,create)
router.route('/profile/:id').get(protect,show).put(protect,update)


module.exports=router