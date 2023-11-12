const { addCost, getCost,deleteCost } = require('../controllers/cost');
const{ addEarning, getEarnings, deleteEarnings } = require('../controllers/earnings');
const router = require('express').Router()


router.post('/add-earnings', addEarning)
      .get('/get-earnings', getEarnings)
      .delete('/delete-earnings/:id',deleteEarnings)
      .post('/add-cost', addCost)
      .get('/get-cost', getCost)
      .delete('/delete-cost/:id',deleteCost)
module.exports = router