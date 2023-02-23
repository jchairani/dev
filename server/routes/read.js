const express = require('express');
const {createReading,getAllReading,deleteReading,updateReading} = require('../controllers/readingController');

const router = express.Router();

router.get('/',getAllReading);
router.post('/create',createReading);
router.delete('/:id',deleteReading);
router.put('/:id',updateReading);


module.exports = router;