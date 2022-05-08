const express =require("express")
const router =express.Router()
const {create,fetchAll,show,update,remove,checkReview} =require('../controllers/reviewController')

router.route('/review').post(create)
router.route('/review/:id').get(fetchAll).put(update).delete(remove)
router.route('/my-review/:id').get(checkReview)

module.exports=router