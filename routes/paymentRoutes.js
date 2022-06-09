const express = require("express");
const router=express.Router()
const {pay,show,fetchAll}=require('../controllers/paymentController')

router.route('/pay').post(pay)
router.route('/payments').get(fetchAll)

module.exports=router


