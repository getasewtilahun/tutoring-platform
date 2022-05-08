const express =require("express")
const router =express.Router()
const {create,fetchAll,accept,remove} =require('../controllers/scheduleController')

router.route('/schedule').post(create)
router.route('/schedule/:id').get(fetchAll)
router.route('/schedule/accept/:id').put(accept)
router.route('/schedule/:id').delete(remove)

module.exports=router